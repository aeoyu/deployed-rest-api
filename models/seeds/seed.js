const seeder = require("mongoose-seed");

const db =
  "mongodb+srv://filora:C9_p.4WX*3JqF_j@cluster0.x2cwc.mongodb.net/catsDatabase?retryWrites=true&w=majority";
  
const data = [
  {
    'model': 'cat',
    'documents': [
      {
        _id: "b37e5396-251f-4531-81af-dcaac12bae17",
        id: 1,
        title: "Black cat",
        description: "It's a black cat.",
        image: "https://images.unsplash.com/photo-1604916287784-c324202b3205?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBjYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        birthday: "2020-02-03",
      }
      {
        _id: "16fde376-9986-443f-aa6f-5011bb4682f6",
        id: 2,
        title: "White Cate",
        description: "A white cat!, Cute",
        image: "https://images.unsplash.com/photo-1606208427954-aa8319c4815e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBjYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        birthday: "2021-09-10",
      }
      {
        _id: "dbdd52c2-76c5-4826-b492-4775c9e380ca",
        id: 3,
        title: "Orange Cat",
        description: "Wow! An Orange Cat",
        image: "https://images.unsplash.com/photo-1618759287629-ca56b5916066?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8b3JhbmdlJTIwY2F0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        birthday: "2020-12-21",
      }
    ]
  }
]

seeder.connect(db, () => {
	seeder.loadModels(["../Cat"]);
	seeder.clearModels(["cat"]);
	seeder.populateModels(data, (err, done) => {
		if (err) {
			return console.log("seeder err", err);
		}
		if (done) {
			return console.log("seed done", done);
		}
		seeder.disconnect();
	});
});
