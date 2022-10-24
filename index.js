const express = require("express");
const app = express();
const db = require("./models/index");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

//database
db.sequelize.sync()
.then(() => {
  console.log("Synced db.");
})
.catch((err) => {
  console.log("Failed to sync db: " + err.message);
});


app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}`);
});