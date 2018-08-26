// Dependencies
var path = require("path");
var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;

// The server should respond to all requests with a string
var server = http.createServer(function(req,res){

    // Get the URL and parse it
    var parsedUrl = url.parse(req.url,true);

    // Get the path
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace( /^\/+|\/+$/g, '');

    // Get the query string as an object
    var queryStringObject = parsedUrl.query;

    // Get the http method
    var method = req.method.toLowerCase();

    // Get the headers as an object
    var headers = req.headers;

    // Get the payload, if any
    var decoder = new StringDecoder('utf-8');
    var buffer = '';
    req.on('data', function(data){
        buffer += decoder.write(data);
    });
    req.on('end', function(){
        buffer += decoder.end();

        var chosenHandler = typeof(router[trimmedPath]) !== 'undefined'? router[trimmedPath]

        // consttruc the data object to send to the handler
        var data = {
            'trimmedPath': trimmedPath,
            'queryStringObject' : queryStringObject,
            'method': method,
            'headers': headers,
            'payload': buffer
        }

        chosenHandler(data, function(statusCode, payload){
            statusCode = typeof(statusbar) == 'number' ? statusCode: 200;

            payload = typeof(payload) == 'object' ? payload : {};

            var payloadSTring = JSON.stringify(payload);
        });

        res.writeHead(StatusCode);
        res.end(payloadString);

        console.log("r");

        console.log("The request received on path: ", trimmedPath );
        console.log("Method: ", method );
        console.log("Query string is: ", queryStringObject );
        console.log("headers: ", headers );
        console.log("body: ", buffer );

    });





    
});


server.listen(3000, function(){
    console.log("The server is listening on port 3000 now");
});

// Define the handlers
var handlers = {};

// Sample handler
handlers.sample = function(data,callback){
// callback a http status code, and a payload object
    callback(406, {'name': 'sample handler'})
};

// not found
handlers.notFound = function(data,callback){
    callback(404), {'message': 'page not found'}
};

// Defin a request router
var router = {
    'sample': handlers.sample
};

