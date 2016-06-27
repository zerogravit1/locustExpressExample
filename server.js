var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var app = express();

var storedPayload = require( './payload.json' );

app.get( '/locust-test', function( req, res ) {
  // event log for received GET request
  console.log( 'get request received' );
  console.log( req.headers );

  // response to client
  res.status(200).send( 'Request received\n');
} );

app.use( bodyParser.json() );

app.post( '/locust-test', function( req, res, next ) {
  // event log of received POST request
  console.log( 'post request received' );
  console.log( req.body );
  console.log( req.headers );

  if ( req.body.AnswerSetDefinitions.Id === storedPayload.AnswerSetDefinitions.Id &&
       req.body.AnswerSetDefinitions.Name === storedPayload.AnswerSetDefinitions.Name &&
       req.body.AnswerSetDefinitions.OptionDefinitions === storedPayload.AnswerSetDefinitions.OptionDefinitions ) {

    // event log that POST data passes validation
    console.log( 'true' );

    // response to client
    res.status( 200 ).send( 'POST data accepted\n' );
  } else {
    // event log POST data passes validation
    console.log( 'false' );

    // response to client
    res.status( 400 ).send( 'invalid request\n' );
  }
} );

app.put( '/locust-test', function( req, res ) {
  // event log of PUT request
  console.log( 'put request received' );
  console.log( req.headers );

  // response to client
  res.status(200).send( 'Request received\n' );
} );

app.delete( '/locust-test', function( req, res ) {
  // event log of DELETE request
  console.log( 'delete request received' );
  console.log( req.headers );

  // response to client
  res.status(200).send( 'Request received\n' );
} );

app.listen( 1337, function() {
  console.log( 'app server is running on port 1337' );
  console.log( 'End Point:\n/locust-test\n\nMETHODS:\nGET\nPOST\nPUT\nDELETE' );
} );
