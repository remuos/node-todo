const {MongoClient, ObjectID} = require('mongodb') ;

const url ="mongodb://localhost:27017/";
const dbname = "TodoApp";
MongoClient.connect(url, (err,client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	} 
	console.log('Connect to MongoDB server');
	const db = client.db(dbname);

	/*var cursor = db.collection('Todos').find({
		_id: new ObjectID("5ae4cd550485c81240edfaf3")
	}) ;
	cursor.toArray().then( (docs) => {
		console.log('Todos ');
		console.log(JSON.stringify(docs, undefined ,2));
	}, (err) => {
		console.log('Unable to fetch todos',err);
	}); */
	/// count method 
	/*db.collection('Todos').find().count().then( (count) => {
		console.log('Total count : ',count);
	}, (err) => {
		console.log('Unable to fetch todos',err);
	}); */
	db.collection('Users').find({name: "soumer"}).toArray().then( (docs) => {
		console.log(JSON.stringify(docs,undefined,2));
	}, (err) => {
		console.log('Unable to fetch todos',err);
	});
	client.close();

});