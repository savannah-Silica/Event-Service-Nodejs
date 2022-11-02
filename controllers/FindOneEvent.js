const db = require("../models/index");
const Events = db.event;
const ApiError = require("../ErrorHandler/Error");

const findOneEvent = async (req,res,next) => {
 try {
    const events = await Events.findByPk(req.params.id);
    if(!events) return next(ApiError.NotFound("Event not found"));
    res.status(200).json(events);
 } catch (error) {
     next(ApiError.InternalError(error));
 }
}

module.exports = findOneEvent;