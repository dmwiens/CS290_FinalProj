var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);
app.use(express.static('public'));


// Page handlers
app.get('/',function(req,res){
  var context = {};
  context.pageTitle = "Mexico 2018";
  res.render('pageMain', context);
});

app.get('/s1SanCristobal',function(req,res){
  var context = {};
  context.pageTitle = "San Cristobal de las Casas, Chiapas";
  res.render('s1SanCristobal', context);
});

app.get('/s2Palenque',function(req,res){
  var context = {};
  context.pageTitle = "Palenque, Chiapas";
  res.render('s2Palenque', context);
});

app.get('/s3Tulum',function(req,res){
  var context = {};
  context.pageTitle = "Tulum, Quintana Roo";
  res.render('s3Tulum', context);
});


app.get('/f1AboutThisSite',function(req,res){
  var context = {};
  context.pageTitle = "About this Site";
  res.render('f1AboutThisSite', context);
});

app.get('/f2Credits',function(req,res){
  var context = {};
  context.pageTitle = "Credits";
  res.render('f2Credits', context);
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
