const mongoose = require("mongoose");
const schema = new mongoose.Schema({
	id: {
		type: Number,
		unique: true,
		required: true,
	},
	title: {
		type: String,
	},
  description: {
    type: String,
  },
  image: {
    type: String,
  }
	birthday: {
    Type: Date,
  },
});

const Cat = mongoose.model("Cat", schema);

module.exports = Cat;
