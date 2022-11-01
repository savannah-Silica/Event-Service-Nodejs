const router = require('express').Router();

const eventsAll = require("../controllers/eventsfindall");
const update = require("../controllers/eventsupdate");
const create = require("../controllers/eventscreate");

router.get('/events/all', eventsAll);
router.put('/events/update', update);
router.post('/events/create', create);


module.exports = router