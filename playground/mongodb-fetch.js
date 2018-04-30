const {MongoClient,ObjectID} = require('mongodb') ;

const url ="mongodb://localhost:27017/";
const dbname = "TodoApp";
MongoClient.connect(url, (err,client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	} 
	console.log('Connect to MongoDB server');
	const db = client.db(dbname);

	/** fetch data **/
	db.collection('Todos').find({_id: ObjectID('5ae4c7eef98e5511d436c9aa') }).toArray().then(
		(docs) => {
		 console.log(JSON.stringify(docs,undefined,2))
		}, (err) => {
			console.log('Unable to fech data ',err);
		}
		);

	client.close();

});