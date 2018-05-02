var mongoose = require('mongoose');

mongoose.Promise = global.Promise ;
mongoose.connect('mongodb://localhost:27017/TodoProject');
// create model
var Todo = mongoose.model('todo',{
	text:{
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt:{
		type: Number,
		default: null
	}
});


var newTodo = new Todo({
	text: 'Code every day'
});

newTodo.save().then( (doc) => {
	console.log('Saved todo ', doc);
}, (err) => {
	console.log('Unable to save data ',err);
});