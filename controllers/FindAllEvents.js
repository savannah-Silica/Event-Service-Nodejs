const db = require("../models");
const Event = db.event;
const ApiError = require('../ErrorHandler/Error');

const eventsAll = async(req,res,next) =>{
    try{
        const events = await Event.findAll();
        res.status(200).json(events)
    }catch(err){
        next(ApiError.InternalError(err));
    }
  };
module.exports = eventsAll