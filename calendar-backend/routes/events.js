
/*
  Event routes
  /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
} = require('../controllers/events');

const router = Router();

router.use(validateJWT);

router.get('/', getEvents);

router.post(
  '/',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is required').custom(isDate),
    check('end', 'End date is required').custom(isDate),
    validateFields
  ],
  createEvent
);

router.put(
  '/:id',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is required').custom(isDate),
    check('end', 'End date is required').custom(isDate),
    validateFields
  ],
  updateEvent
);

router.delete('/:id', deleteEvent);


module.exports = router;