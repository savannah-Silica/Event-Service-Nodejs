const db = require("../models");
const Event = db.event;


 const update = async (req,res)=>{
    const {id, title, speakers, category, description, media, sponsors, partners} = req.body
    try{
      const isUpdated = await User.update({id, title, speakers, category, description, media, sponsors, partners},{
        where:{
          id
        }
      })
      if(isUpdated[0]) return res.json({data:{message:true}})
    }catch(err){
      return res.json({err})
    }
    return res.json({data:{message:false}})
  };
  module.exports = update