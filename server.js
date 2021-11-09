require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const api = require("./route/api");

async function main() {
	const app = express();

	app.use(express.static("public"));
	app.use(api);

	await mongoose.connect(process.env.MONGO_CONN_STRING);
	// Start Server

	app.listen(process.env.PORT, function () {
		console.log(`Listening on port ${process.env.PORT}`);
	});
}
main();
