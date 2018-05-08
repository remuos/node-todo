var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/Todo.js');
var {User} = require('./models/User.js');

const port = process.env.PORT || 3000 ;
var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then( (doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(err);
	});
	//console.log(req.body);
});

app.get('/todos', (req, res) => {
	Todo.find().then( (todos) => {
		res.send({todos})
	}, (err) => {
		res.status(400).send(err);
	});
});

app.get('/todo/:id', (req,res) => {
	var id = req.params.id;
	if(!ObjectID.isValid(id)){
		res.status(404).send();
	} 
	Todo.findById(id).then( (todo) => {
		if(!todo) res.status(404).send();
		res.status(200).send(todo);
	}, (e) => res.status(400).send(e));
});

app.listen(port, () => {
	console.log(`Started at port ${port}`);
});
