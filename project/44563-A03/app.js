var path = require("path");
var express = require("express");
var fs = require('fs')
var logger = require("morgan");  
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var bodyParser = require('body-parser');
var nconf = require('nconf');
var auth =  require('./config.json');
const port = process.env.PORT || 8081;

// make a request app and create the server 
var app = express();
var server = require('http').createServer(app);

// include our static client-side assets and use the bodyParser
app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// log requests to stdout and also
// log HTTP requests to a file using the standard Apache combined format
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));

// http GET default page at /
app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname + '/assets/index.html'));
});

// 404 for page not found requests
app.get(function (request, response) {
  response.sendFile(path.join(__dirname + '/assets/404.html'));
});

// http GET /about
app.get("/about", function (request, response) {
  response.sendFile(path.join(__dirname + '/assets/about.html'));
});

// http GET /contact
app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname + '/assets/contact.html'));
});

// http POST /contact
app.post("/contact", function (req, res) {
  var name = req.body.inputname;
  var email = req.body.inputemail;
  var company = req.body.inputcompany;
  var comment = req.body.inputcomment;
  var isError = false;

  if (company) {
    isError = true;
  }
  console.log('\nCONTACT FORM DATA: '+ name + ' '+email + ' '+ comment+'\n');
  
  // create transporter object capable of sending email using the default SMTP transport
  var transporter = nodemailer.createTransport(mg(auth));

  // setup e-mail data with unicode symbols
  var mailOptions = {
    from: '"Denise Case" <denisecase@gmail.com>', // sender address
    to: 'dcase@nwmissouri.edu, denisecase@gmail.com', // list of receivers
    subject: 'Message from Website Contact page', // Subject line
    text: comment,
    err: isError
    
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('\nERROR: ' + error+'\n');
      //   res.json({ yo: 'error' });
    } else {
         console.log('\nRESPONSE SENT: ' + info.response+'\n');
      //   res.json({ yo: info.response });
    }
  });
});

// Listen for an application request on designated port
server.listen(port, function () {
  console.log('Web app started and listening on http://localhost:' + port);
});

