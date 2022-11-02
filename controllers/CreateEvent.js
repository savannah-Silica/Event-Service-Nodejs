const db = require('../models');
const Event = db.event;
const ApiError = require("../ErrorHandler/Error");

async function create  (req, res,next) {
  try {
    const { title } = req.body;

  // Filter for existing event with title as the parameter
  const event = await Event.findOne({ where: { title } });
  if (event) {
    return next(ApiError.BadRequest("This Event Already Exist"))
  }

  // Create new event
  const newEvent = await Event.create(req.body);
  return res.status(201).json(newEvent);

  } catch (error) {
    next(ApiError.InternalError(error))
  }
  
}

module.exports = create