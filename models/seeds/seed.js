require("dotenv").config();
const mongoose = require("mongoose");
const Cat = require("../Cat");

const wipeAndSeed = async () => {
	try {
		await mongoose.connect(process.env.MONGO_CONN_STRING);
		await Cat.deleteMany({});
		await Cat.insertMany([
			{
				id: 1,
				title: "Black cat",
				description: "It's a black cat.",
				image:
					"https://images.unsplash.com/photo-1604916287784-c324202b3205?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBjYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				birthday: "2020-02-03",
			},
			{
				id: 2,
				title: "White Cate",
				description: "A white cat!, Cute",
				image:
					"https://images.unsplash.com/photo-1606208427954-aa8319c4815e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBjYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				birthday: "2021-09-10",
			},
			{
				id: 3,
				title: "Orange Cat",
				description: "Wow! An Orange Cat",
				image:
					"https://images.unsplash.com/photo-1618759287629-ca56b5916066?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b3JhbmdlJTIwY2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				birthday: "2020-12-21",
			},
		]);

		console.log("Data Import Success");

		process.exit();
	} catch (error) {
		console.error("Error with data import", error);
		process.exit(1);
	}
};
wipeAndSeed();
