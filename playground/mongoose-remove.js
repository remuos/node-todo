
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');

var id = "5aea197014768d0a54d499b7";

/*Todo.remove({}).then((result) => {
	console.log('remove todos ,' result);
});*/

//Todo.findAndRemove
Todo.findByIdAndRemove(id).then( (todo) => {
	console.log('remove todo ',todo);
});