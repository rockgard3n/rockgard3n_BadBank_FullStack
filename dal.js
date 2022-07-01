const MongoClient = require('mongodb').MongoClient;
const url         = 'mongodb://localhost:27017';
let db            = null;

// connect to mongo 
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) { 
    console.log("Connected 1");
    //connect to our myproject db
    db = client.db('myproject');
    //console.log(db);
});

//create user account 
function create(name, email, password){
    console.log("run 2");
    //we package it in a promise so its async 
    return new Promise((resolve, reject) => {
        const collection = db.collection('users');
        const doc = {name, email, password, balance: 0};
        //insert one doc and pass in the object we made above
        collection.insertOne(doc, {w:1}, function(err, result) {
            err ? reject(err) : resolve(doc);
        });
    })
}

//return all users
function all(){
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .find({})
            .toArray(function(err, docs) {
                err ? reject(err) : resolve(docs);
            });
    })
}

//lets login beast 
function login(email, password){
    console.log("its 1991. A man in a beanie sits in front of his computer and cracks his knuckles. 0s and 1s float down his screen.");
    return new Promise((resolve, reject) => {
        const customers = db
            .collection('users')
            .findOne({email: email, password: password}, function (err, doc){
                console.log("typing rapidly, a bead of sweat drips down his face");
                console.log(JSON.stringify(doc));
                err ? reject(err) : resolve(doc);
            });

    })
}

//update some balances get that $$$
function updateBal(email, password, amount){
    console.log("if only money was this fungible");
    return new Promise((resolve, reject) => {
        const customers = db
        .collection('users')
        .updateOne(
            {email: email, password: password},
            { $inc: {balance: amount}},
            function (err, doc){
                console.log("like a fever dream we begin to enter a montage");
                console.log(JSON.stringify(doc));
                err ? reject(err) : resolve(doc);
            }
    
        );
    })
}
//this shit below is MAD VITAL BRO if you dont put this in it doesnt let index.js bool with our functions bruh
module.exports = {create, all, login, updateBal};

//setTimeout(() => {create("liam","test@mit.edu","secret")}, 1000);