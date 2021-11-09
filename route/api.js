const express = require("express");
const Cat = require("../models/Cat");
const router = express.Router();

// Server items routes

router.get("/api/cats", async (req, res) => {
	const result = await Cat.find({});
	res.status(200).json({
		result: result,
	});
});

router.get("/api/cats/:id", async (req, res) => {
	const id = req.params.id;
	const result = await Cat.findOne({ id: id });
	res.status(200).json(result);
});

router.get("*", (req, res) => {
	res.status(404).json({
		error: "404 Not Found",
	});
});

module.exports = router;
