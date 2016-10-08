---
layout: post
title: Enabling Contact Forms with Node.js, NodeMailer, and MailGun
---

Node.js makes it easy to add a working contact form to your website. 

## Starting with a static website

Let's assume our application is called A03 (short for assignment 03). 

 Start a responsive website with [Initializr](http://www.initializr.com/). 
 
 Select the desired options for a new BootStrap site and download the code. This creates a website with the index.html in a root folder, with subfolders css, fonts, img, and js.  
 
 Create a contact.html page with a contact form, the input forms you would like, and a submit button. 
 
 ```
     <form action="/contact" method="post" id=contactform class="well form-horizontal">
 ```
 
Finish creating and customizing your site.  Your contact page may look something like the following.

[![](http://denisecase.github.io/project/44563-A03/assets/img/2016-10-08_1056.png)](http://denisecase.github.io/project/44563-A03/assets/img/2016-10-08_1056.png)
 
 ## Set up an emailing account on MailGun
 
1. Go to https://mailgun.com.  
1. Set up your account by providing your information.
1. Confirm your (real) email address. 
1. Login to your Mailgun account and activate it with your cell phone number. 
1. Click domains.  Click the settings (gear) icon next to your sandbox and select 'Domain settings'.
1. Add the email to which your comments should be sent. Confirm the test message sent to this address.
1. Note the domain you want to use for sending emails (I used the sandbox as this is just for testing). 
1. Note the API key provided. 

 Confirm your willingness to have emails automatically sent to you from Mailgun.
 
 [![](http://denisecase.github.io/project/44563-A03/assets/img/2016-10-08_1110.png)](http://denisecase.github.io/project/44563-A03/assets/img/2016-10-08_1110.png)
 
 ## Adding server-side functionality with Node.js
 
 We'll create our Node.js server content in the root folder, so create a subfolder in your application called assets and move your website code to this folder. 
 
 In the root folder (A03), create a .gitignore file and a README.md file (used for all types of projects).
 
 - Add the following to the .gitignore.
 
 ```
node_modules
access.log
config.json
    
```
 
 In the root folder (A03), create a package.json, and an app.js for the Node.js application.
 
 - package.json should include the following dependencies:
 
 ```
{
  "dependencies": {
        "express": "latest",
        "morgan": "latest",
        "body-parser": "latest",
        "nodemailer": "latest",
        "nodemailer-mailgun-transport" : "latest",
        "nconf":"latest"
    }
} 
```
 
 
 Add one more file to the root folder, config.json.  This will hold confidential connection information that we don't want to check into the cloud repository.  Get your Mailgun domain and api-key noted above and add these two items to your config.json file in the following format.
 
 ```
{
    "auth": {
        "api_key": "key-123456abcdef",
        "domain": "sandbox1234abcd5678.mailgun.org"
    }
}
```

In the app.js file, include the dependencies, create an express app and use it to configure the server. 
Provide access to your static client-side files, include the body-parser to help read the information submitted on the form, and configure an HTTP request logger (Morgan). 
 ```
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
```

Create nice URLs for your pages and serve up your html:
```
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
```

Handle the POST call when the user submits their contact form.
```
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
```
Finally, start up the server and listen on the specified port.
```
 // Listen for an application request on designated port
server.listen(port, function () {
  console.log('Web app started and listening on http://localhost:' + port);
});

```
## Run your website locally

Open a command window in your c:\44563\a03 folder or from VS Code menu, chose View / Integrated Terminal

Install nodemon globally with npm install -g nodemon

Install the dependencies listed in package.json with npm install.

Run nodemon to start the server.  (Hit CTRL-C to stop.)

```
> npm install -g nodemon
> npm install
> nodemon
```

Point your browser to `http://localhost:8081`. 


## The Demo

View the [demo](http://denisecase.github.io/project/44563-A03).


## Import the code

Go to your BitBucket cloud hosting profile. From the main menu, click Repositories / Import Repository. 

Set the "old URL" to https://bitbucket.org/professorcase/a03.  Set the new repo name to a03 and import. 

This copies the original cloud-based repo into your own cloud-based repo. 

Copy your a03 URL to your clipboard.

## Clone your repo to your local machine

If you're running Windows, install Git for Windows and TortoiseGit. 

Right-click on your C:\44563 folder and click Git Clone. 

In the URL field, paste your a03 repo URL and click OK. 


## Working with the code

Use a light-weight integrated development environment like [Visual Studio Code](https://code.visualstudio.com). 
Right-click on your local a03 folder and click "Open with Code".  

If you don't see this option, reinstall Visual Studio code and check the option to add this to your context menu in Windows.







