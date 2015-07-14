var unirest = require('unirest');

var url = "http://localhost:8080/headers";

unirest.get(url).end(function(response) {
    console.log('Status:', response.statusCode);
    console.log('Headers:', response.headers);
    console.log('Body:', response.body);
});