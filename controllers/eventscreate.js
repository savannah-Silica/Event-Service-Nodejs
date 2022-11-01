const db = require('../models');
const Event = db.event

async function create  (req, res) {
  try {
    const { title } = req.body;

  // Filter for existing event with title as the parameter
  const event = await Event.findOne({ where: { title } });
  if (event) {
    return res.status(401).json({ message: 'Event already exists' });
  }

  // Create new event
  const newEvent = await Event.create(req.body);
  return res.status(201).json(newEvent);

  } catch (error) {
    return res.status(500).json(error);
  }
  
}

module.exports = create