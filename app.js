// JS file hand coded by Janifer Cheng March 2021 as part of the coursework from "The Ultimate MySQL Bootcamp"  taught by Colt Steele on Udemy.  Permission for publication of this work is given by the instructor to Janifer Cheng for portfolio use.


var express = require('express');
var mysql = require('mysql');
var bodyParser = require ("body-parser");
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
// needed to link to the app.css file directory for the ejs file.

var connection = mysql.createConnection({
	host	:	"localhost",
	user	:	"root",
	database:	"join_us"
});

app.get('/', function (req, res) {
	//find count of users in db
	var q = "select count(*) as count from users";
	connection.query (q, function (err, results) {
	if(err) throw err;
	var count = (results[0].count);
	// res.send("We have " + count + " users in our db.");
		res.render("home", {count: count});
	});
});

app.post('/register', function (req, res){
	var person = {
		email: req.body.email
	};
	
	connection.query ('insert into users set ?', person, function (err, result) {
		console.log(err);
		console.log(result);
		res.redirect('/');
		});
});	

app.get("/joke", function(req,res) {
	var joke = "What do you call a dog that does magic tricks?  A labracadabrador.";
	console.log ("requested the joke route!");
	res.send(joke);
});

app.get('/random_num', function (req, res) {
	var num = Math.floor(Math.random() * 10) +1;
	res.send('Your lucky number is ' + num);
});

app.listen(3000, function () {
	console.log("server running on 3000!");
});

