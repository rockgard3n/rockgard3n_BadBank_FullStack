const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://rockgard3n:FI7855hh@cluster0.cyuh8xi.mongodb.net/?retryWrites=true&w=majority';

async function main(){
    const client = new MongoClient(url);

    try {
        await client.connect();

        console.log("?");
    } catch(e){
        console.log("didnt work");
    }
}
/*
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log('connected')

    //database name
    const dbName = 'myproject';
    const db = client.db(dbName);

    //new user
    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@mit.edu';

    //insert into customer table 
    /*
    var collection = db.collection('customers');
    var doc = {name, email};
    collection.insertOne(doc, {w:1}, function(err,result) {
        console.log('Document insert');
    });

    const customers = db
    .collection('users')
    .findOne({email: "bruce@mit.edu", password: "secret"}, function (err, doc){
        console.log("typing rapidly, a bead of sweat drips down his face");

    });

    const secondtest = db
    .collection('users')
    .updateOne(
        {email: "bruce@mit.edu", password: "secret"},
        { $inc: {balance: 150}},
        function (err, doc){
            console.log("like a fever dream we begin to enter a montage");
        }

    );
});
*/