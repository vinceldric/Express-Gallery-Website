// Load dependencies
const path = require('path');
const express = require('express');
const places = require('./places');
const ejs = require('ejs');
require('dotenv').config();

// Create express app
const app = express();

app.set('view engine', 'ejs');

// app.use is for using middleware
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res){
  res.render('pages/index', {
    page: "Home Page",
    title: "Express Gallery Website", 
    tagline: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    current: "home"
  })
});

app.get('/gallery', function(req, res){
  res.render('pages/gallery', {
    page: "Gallery Page",
    title: "Random Places Gallery", 
    tagline: "Explore the World!",
    current: "gallery"
  })
});

app.get('/subscribe', function(req, res){
  res.render('pages/subscribe', {
    page: "Subscription Page",
    title: "Subscribe Here!", 
    tagline: "Be updated on new places we upload!",
    current: "subscribe"
  })
});

// JSON GET endpoint
app.get('/api/v0/gallery', function(req, res){
  res.json(places);
});

app.post('/users',function(req,res){
  console.log(req.body);
  res.send(`<p>Thanks, ${req.body.name}! We'll send newsletter updates to ${req.body.email}.</p>`);
});

// Add more middleware
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

// Set port preferrence with default
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});