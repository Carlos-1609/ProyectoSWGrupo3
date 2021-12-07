const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateJWT } = require('../helpers/jwt');

const createUser = async(req, res = response) => {
  
  const {email, password} = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'Email already registered'
      });
    }

    user = new User(req.body);

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    const token = await generateJWT(user.id, user.name);
    
    return res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token
    });
  } catch(error) {
    return res.status(500).json({
      ok: false,
      msg: 'Please contact admin',
    });
  }
};

const loginUser = async(req, res = response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'User does not exists (email)',
      });
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Wrong password',
      });
    }

    const token = await generateJWT(user.id, user.name);

    return res.json({
      ok: true,
      uid: user.id,
      name: user.name,
      token
    });
  } catch(err) {
    return res.status(500).json({
      ok: false,
      msg: 'Please contact admin',
    });
  }

};

const renewToken = async(req, res = response) => {
  const {uid, name} = req;
 
  const token = await generateJWT(uid, name);

  return res.json({
    ok: true,
    uid,
    name,
    token
  });
};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};