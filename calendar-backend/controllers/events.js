const { response } = require('express');
const Event = require('../models/Event');

const getEvents = async(req, res=response) => {

  const events = await Event.find()
    .populate('user', 'name');

  return res.json({
    ok: true,
    events
  });
};

const createEvent = async(req, res) => {

  const event = new Event(req.body);

  try {
    event.user = req.uid;
    const savedEvent = await event.save();
    res.json({
      ok: true,
      event: savedEvent
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Contact the admin...",
    });
  }

  return res.json({
    ok: true,
    msg: 'createEvent'
  });
};

const updateEvent = async(req, res) => {
  const eventId = req.params.id;
  const {uid} = req;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'Event does not exists'
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "You can't edit this",
      });
    }

    const newEvent = {
      ...req.body,
      user: uid
    }

    const updatedEvent = await Event
      .findByIdAndUpdate(eventId, newEvent, { new: true });

    return res.json({
      ok: true,
      event: updatedEvent
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Contact the admin...",
    });
  }
};

const deleteEvent = async(req, res) => {
  const eventId = req.params.id;
  const {uid} = req;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'Event does not exists'
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "You can't remove this",
      });
    }

    await Event.findByIdAndDelete(eventId);

    return res.json({
      ok: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Contact the admin...",
    });
  }
};

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
};