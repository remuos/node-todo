const _ = require('lodash');

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./db/mongoose.js');
const {Todo} = require('./models/Todo.js');
const {User} = require('./models/User.js');

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

app.delete('/todo/:id', (req,res) => {
	var id = req.params.id;
	if(!ObjectID.isValid(id)){
		res.status(404).send();
	} 
	Todo.findByIdAndRemove(id).then( (todo) => {
		if(!todo) res.status(404).send();
		res.status(200).send(todo);
	}, (e) => res.status(400).send(e));
});

app.patch('/todo/:id', (req,res) => {
	var id = req.params.id;
	var body = _.pick(req.body,['text','completed']);
	if(!ObjectID.isValid(id)){
		res.status(404).send();
	} 

	if(_.isBoolean(body.completed) && body.completed) {
		body.completedAt = new Date().getTime();
	} else {
		body.completed = false ;
		body.completedAt = null ;
	}

	Todo.findByIdAndUpdate(id, { $set : body }, {new: true}).then( (todo) => {
		if(!todo) {
			return res.status(404).send();
		}
		res.status(200).send({todo});
	}).catch( (e) => res.status(400).send(e));
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
