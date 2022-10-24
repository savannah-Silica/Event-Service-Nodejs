const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: "mysql",
    operatorsAliases:0,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
    socketPath: '/var/run/mysqld/mysqld.sock'
  });

  const db = {}
 db.Sequelize = Sequelize;
 db.sequelize = sequelize;
 db.event = require("./Events")(sequelize, Sequelize);

 module.exports = db;