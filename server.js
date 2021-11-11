require("dotenv").config();
// import modules
const mongoose = require("mongoose");
const express = require("express");
const api = require("./route/api");

// any method using await must execute with async only
async function main() {
	const app = express();

	//executes err in order
	app.use(express.static("public"));
	app.use(api);

	// Start Server
	// await until process is done
	await mongoose.connect(process.env.MONGO_CONN_STRING);

	app.listen(process.env.PORT, function () {
		console.log(`Listening on port ${process.env.PORT}`);
	});
}
// catch err
main().catch((err) => console.error(err));
