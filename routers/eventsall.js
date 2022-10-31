const eventsAll = require("../controllers/eventsfindall");
const update = require("../controllers/eventsupdate");
const router = require('express').Router();
router.get('/events/all', eventsAll);
router.put('/events/update', update);


module.exports = router