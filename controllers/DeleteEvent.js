const db = require("../models/index");
const Events = db.event;
const ApiError = require("../ErrorHandler/Error");

const Eventdelete = async (req,res,next) => {
try {
    const event = await Events.findByPk(req.params.id);
    if(!event) return next(ApiError.NotFound("Event not found"))
    await event.destroy();
    res.status(200).json("event has been deleted");
} catch (error) {
    next(ApiError.InternalError(error));
}
}

module.exports = Eventdelete;