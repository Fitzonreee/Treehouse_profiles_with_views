var router = require("../js/router.js");

//Problem: Need a simple way to look at Users badge count and JS points
//Solution: Use Node.js to perform the profile look up and serve templetes via HTTP

// Create a web server
var http = require('http');
var https = require('https');

http.createServer( (request, response) => {
  router.home(request, response);
  router.user(request, response);
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');

// Function that handles the reading of files and merge in values
  // read from file and get a string
    // merge values into string
