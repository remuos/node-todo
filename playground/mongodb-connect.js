const MongoClient = require('mongodb').MongoClient ;

const url ="mongodb://localhost:27017/";
const dbname = "TodoApp";
MongoClient.connect(url, (err,client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	} 
	console.log('Connect to MongoDB server');
	const db = client.db(dbname);

	/*** InsertOne ***/
	db.collection('Todos').insertOne({
		text :"To do list completed",
		completed: true
	}, (err,result) => {
		if(err){
			return console.log('Unable to insert todo',err);
		}
		console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));

	});	

	client.close();

});