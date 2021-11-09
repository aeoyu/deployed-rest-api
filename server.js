require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const api = require("./route/api");

async function main() {
	const app = express();

	app.use(api);

	await mongoose.connect(
		"mongodb+srv://filora:C9_p.4WX*3JqF_j@cluster0.x2cwc.mongodb.net/catsDatabase?retryWrites=true&w=majority"
	);
	// Start Server

	app.listen(process.env.PORT, function () {
		console.log(`Listening on port ${process.env.PORT}`);
	});
}
main();
