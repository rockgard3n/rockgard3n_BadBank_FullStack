var express = require('express');
var app     = express();
var cors    = require('cors');
var dal     = require('./dal.js')

//used to serve static files form public directory 
app.use(express.static('public'));
app.use(cors());

// create user account route
app.get('/account/create/:name/:email/:password', function (req, res) {
    dal.create(req.params.name, req.params.email, req.params.password).
    //using dot then to hit the promise we made in dal.js
        then((user) => {
            console.log(user);
            res.send(user);
        });
});

app.get('/account/all', function (req, res) {
    dal.all().
        then((docs) => {
            console.log(docs);
            res.send(docs);
        });
});


//login user route
app.get('/account/login/:email/:password', function (req, res) {
    dal.login(req.params.email, req.params.password).
        then((bool) => {
            console.log(bool);
            res.send(bool);
        });

});



app.get('/account/update/:email/:password/:amount', (req, res) => {
    dal.updateBal(req.params.email,req.params.password, parseInt(req.params.amount))
    res.send("Post request Called");
  })
/* havent turned these into DAL routes yet

app.get('account/updateBal/:email/:password', function (req, res) {
    dal.updateBal(req.params.email, req.params.password, 1000)
    res.send("Update balance request Called");

})

    dal.updateBal(req.params.email, req.params.password, req.params.amount)
    .send("Post request Called");

//all acounts route
app.get('/account/all', function (req, res) {
    res.send({
        name:       'peter',
        email:      'peter@mit.edu',
        password:   'secret'
    });
});

//deposit route
app.get('/account/deposit/:email/:balance', function (req, res) {
    res.send({
        email:      req.params.email,
        balance:   req.params.balance
    });
});

//withdraw route 
app.get('/account/withdraw/:email/:balance', function (req, res) {
    res.send({
        email:      req.params.email,
        balance:   req.params.balance
    });
});

//balance check route 
app.get('/account/balance/:email', function (req, res) {
    res.send({
        email:      req.params.email,
    });
});
*/

//start our listener for the server
var port = 3001;
app.listen(port);
console.log('Running on port: ' + port);