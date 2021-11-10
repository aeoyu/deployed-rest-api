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
			{
				id: 4,
				title: "Butterfly Cat",
				description: "Aw Butterfly friends",
				image:
					"https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				birthday: "2020-09-22",
			},
			{
				id: 5,
				title: "Grey Cat",
				description: "Grey cat so cute",
				image:
					"https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				birthday: "2021-10-02",
			},
			{
				id: 6,
				title: "Happy Cat",
				description: "This cat so happy",
				image:
					"https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				birthday: "2019-02-26",
			},
			{
				id: 7,
				title: "Lion Cat",
				description: "This cat looks like a lion! Woah!",
				image:
					"https://images.unsplash.com/photo-1536590158209-e9d615d525e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				birthday: "2021-05-15",
			},
			{
				id: 8,
				title: "Grumpy Cat",
				description: "Lil crumpy kitty",
				image:
					"https://images.unsplash.com/photo-1513245543132-31f507417b26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				birthday: "2021-08-27",
			},
			{
				id: 9,
				title: "Siamese Cat",
				description: "Siamese Cat is so cute",
				image:
					"https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
				birthday: "2020-01-08",
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
