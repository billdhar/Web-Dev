var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/main.js', function (req, res) {
	res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/xpage1', function (req, res) {
	res.sendFile(path.join(__dirname, 'ui', 'xpage1.html'));
});

app.get('/xpage2', function (req, res) {
	res.sendFile(path.join(__dirname, 'ui', 'xpage2.html'));
});

app.get('/xpage3', function (req, res) {
	res.sendFile(path.join(__dirname, 'ui', 'xpage3.html'));
});

app.get('/text', function (req, res) {
  res.send("Yolo!");
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD Practice app listening on port ${port}!`);
});
