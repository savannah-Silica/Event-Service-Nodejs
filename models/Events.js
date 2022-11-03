
module.exports =  (sequelize, Sequelize) => {
    const Event = sequelize.define("event", {
      id:{
        type:Sequelize.STRING,
        primaryKey:true,
    },
      title: {
        type: Sequelize.STRING,
      },
      speakers: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
        
      },
      description: {
        type: Sequelize.TEXT,
        
      },
      media: {
        type: Sequelize.STRING,
      },
      sponsors: {
        type: Sequelize.JSON,
        
      },
      partners: {
        type: Sequelize.JSON,
       
      },
      created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
    return Event;
  }; 