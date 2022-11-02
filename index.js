const express = require("express");
const db = require("./models/index");
const dotenv = require("dotenv");
const EventsRoute = require("./routers/Events");
const ErrorHandler = require("./ErrorHandler/ErrorHandler");
dotenv.config();
const app = express();
const PORT = process.env.APP_PORT || 5000;

//database
db.sequelize.sync()
	.then(() => {
		console.log("Synced db.");
	})
	.catch((err) => {
		console.log("Failed to sync db: " + err.message);
	});


//routers
app.use('/api',EventsRoute);

//ErrorHandler
app.use(ErrorHandler);

//listener
app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}`);
});