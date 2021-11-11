// import express
const express = require("express");
const Cat = require("../models/Cat");
const router = express.Router();

// Server items routes... request data
router.get("/api/cats", async (req, res, next) => {
	try {
		// Find cat
		const result = await Cat.find({});
		res.status(200).json({
			result: result,
		});
	} catch (err) {
		next(err);
	}
});

router.get("/api/cats/:id", async (req, res, next) => {
	try {
		const id = req.params.id;
		// Find items
		const result = await Cat.findOne({ id: id });
		res.status(200).json(result);
	} catch (err) {
		next(err);
	}
});

router.get("*", (req, res) => {
	// Catch err
	res.status(404).json({
		error: "404 Not Found",
	});
});

// Export router
module.exports = router;
