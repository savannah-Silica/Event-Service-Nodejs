const db = require("../models");
const Event = db.event;
const ApiError = require("../ErrorHandler/Error");

 const update = async (req,res,next)=>{
    const {title, speakers, category, description, media, sponsors, partners} = req.body
    try{
      const isUpdated = await Event.update({id, title, speakers, category, description, media, sponsors, partners},{
        where:{
          id:req.params.id
        }
      })
      if(isUpdated[0]) return res.json({data:{message:true}})
    }catch(err){
      return next(ApiError.InternalError(err));
    }
    return res.json({data:{message:false}})
  };
  module.exports = update