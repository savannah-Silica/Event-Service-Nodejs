const db = require("../models");
const Event = db.event;


const eventsAll = async(req,res) =>{
    try{
        const events = await Event.findAll({include:'posts'});
        return res.json(events);
    }catch(err){
        return res.status(500).json(err);
    }
  };
module.exports = eventsAll