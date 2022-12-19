// Import the top-level function of express 
const express = require('express');

// Creates an Express application using the top-level function 
const app = express();
 
// Define port number as 5001 
const port = 5001;

// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.get('/', function(request, response) {
  response.send('Hello, World Node!');
});

// Make the app listen on port 3000
app.listen(port, function() {
  console.log('Server listening on http://localhost:' + port);
});