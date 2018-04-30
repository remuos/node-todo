const {MongoClient} = require('mongodb') ;

const url ="mongodb://localhost:27017/";
const dbname = "TodoApp";
MongoClient.connect(url, (err,client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	} 
	console.log('Connect to MongoDB server');
	const db = client.db(dbname);

	//deletMany
	/*db.collection('Todos').deleteMany({text:'To do'}).then( (result) => {
		console.log(result);
	});*/

		//deletMany
	/*db.collection('Todos').deleteOne({text:'To do'}).then( (result) => {
		console.log(result);
	});
*/
	db.collection('Todos').findOneAndDelete({completed:false}).then( (result) => {
		console.log(result);
	});


	client.close();

});