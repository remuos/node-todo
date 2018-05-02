const {MongoClient, ObjectID} = require('mongodb') ;

const url ="mongodb://localhost:27017/";
const dbname = "TodoApp";
MongoClient.connect(url, (err,client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	} 
	console.log('Connect to MongoDB server');
	const db = client.db(dbname);
	//db.collection('Todos').find().toArray().then((docs) => console.log(docs));
	//
	db.collection('Todos').findOneAndUpdate({
			_id: new ObjectID('5ae4ca2ac9556c0e38c8b861')
		},{
			$set:{completed:false}
		},{
			returnOiginal: false
		})
		.then((result) => {
			console.log(result);
		});

	client.close();

});