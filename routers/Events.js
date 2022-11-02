const router = require('express').Router();
const getOneEvent = require("../controllers/FindOneEvent");
const getAllEvents = require("../controllers/FindAllEvents");
const updateEvent = require("../controllers/UpateEvent");
const createEvent = require("../controllers/CreateEvent");
const deleteEvent = require("../controllers/DeleteEvent");

router.get('/events/all', getAllEvents);
router.put('/events/:id', updateEvent);
router.post('/events/create', createEvent);
router.get('/events/:id',getOneEvent);
router.delete('/events/:id',deleteEvent);


module.exports = router