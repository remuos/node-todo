const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');

var id = "5aea197014768d0a54d499b7";

if(!ObjectID.isValid(id)){
	console.log('ID not valid');
}
/*Todo.find({
	_id: id
}).then( (todos) => {
	console.log('Todos ',todos);
});

Todo.findOne({
	_id: id
}).then( (todo) => {
	console.log('Todo ',todo);
});
*/
Todo.findById(id).then( (todo) => {
	if(!todo) return console.log('Id not found');
	console.log('Todo By Id ',todo);
}).catch( (e) => console.log(e));