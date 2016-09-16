// Let's cluster
var cluster = require( 'cluster' );

if ( cluster.isMaster ) {
  var cpuCount = require( 'os' ).cpus().length;

  for ( var i = 0; i < cpuCount; i += 1 ) {
    cluster.fork();
  }

  cluster.on( 'exit', function( worker ) {
    console.log( 'Worker %d died.', worker.id );
    cluster.fork();
  } );
} else {
  // Basic HTTP Server to Validate Locust Test Construction

  var express = require( 'express' );
  var bodyParser = require( 'body-parser' );
  var app = express();

  var storedPayload = require( './payload.json' );

  app.get( '/locust-test', function( req, res ) {
    // event log for received GET request
    console.log( 'get request received' );
    console.log( 'clusterid: ' + cluster.worker.id );
    console.log( req.path );
    console.log( req.headers );

    // response to client
    res.status(200).send( 'Request received\n' + cluster.worker.id );
  } );

  app.get( '/locust-test-mobile', function( req, res ) {
    // event log for received GET request
    console.log( 'get request received' );
    console.log( 'clusterid: ' + cluster.worker.id );
    console.log( req.path );
    console.log( req.headers );

    // response to client
    res.status(200).send( 'Request received\n' + cluster.worker.id );
  } );

  app.use( bodyParser.json() );

  app.post( '/locust-test', function( req, res, next ) {
    // event log of received POST request
    console.log( 'post request received' );
    console.log( 'clusterid: ' + cluster.worker.id );
    console.log( req.path );
    console.log( req.headers );
    console.log( req.body );

    if ( req.body.AnswerSetDefinitions.Id === storedPayload.AnswerSetDefinitions.Id &&
         req.body.AnswerSetDefinitions.Name === storedPayload.AnswerSetDefinitions.Name &&
         req.body.AnswerSetDefinitions.OptionDefinitions === storedPayload.AnswerSetDefinitions.OptionDefinitions ) {

      // event log that POST data passes validation
      console.log( 'true' );

      // response to client
      res.status( 200 ).send( 'POST data accepted\n' + cluster.worker.id  );
    } else {
      // event log POST data passes validation
      console.log( 'false' );

      // response to client
      res.status( 400 ).send( 'invalid request\n'  + cluster.worker.id );
    }
  } );

  app.post( '/locust-test-mobile', function( req, res, next ) {
    // event log of received POST request
    console.log( 'post request received' );
    console.log( 'clusterid: ' + cluster.worker.id );
    console.log( req.path );
    console.log( req.headers );
    console.log( req.body );

    if ( req.body.AnswerSetDefinitions.Id === storedPayload.AnswerSetDefinitions.Id &&
         req.body.AnswerSetDefinitions.Name === storedPayload.AnswerSetDefinitions.Name &&
         req.body.AnswerSetDefinitions.OptionDefinitions === storedPayload.AnswerSetDefinitions.OptionDefinitions ) {

      // event log that POST data passes validation
      console.log( 'true' );

      // response to client
      res.status( 200 ).send( 'POST data accepted\n'  + cluster.worker.id );
    } else {
      // event log POST data passes validation
      console.log( 'false' );

      // response to client
      res.status( 400 ).send( 'invalid request\n'  + cluster.worker.id );
    }
  } );

  app.put( '/locust-test', function( req, res ) {
    // event log of PUT request
    console.log( 'put request received' );
    console.log( 'clusterid: ' + cluster.worker.id );
    console.log( req.path );
    console.log( req.headers );

    // response to client
    res.status(200).send( 'Request received\n'  + cluster.worker.id );
  } );

  app.put( '/locust-test-mobile', function( req, res ) {
    // event log of PUT request
    console.log( 'put request received' );
    console.log( 'clusterid: ' + cluster.worker.id );
    console.log( req.path );
    console.log( req.headers );

    // response to client
    res.status(200).send( 'Request received\n'  + cluster.worker.id );
  } );

  app.delete( '/locust-test', function( req, res ) {
    // event log of DELETE request
    console.log( 'delete request received' );
    console.log( 'clusterid: ' + cluster.worker.id );
    console.log( req.path );
    console.log( req.headers );

    // response to client
    res.status(200).send( 'Request received\n'  + cluster.worker.id );
  } );

  app.delete( '/locust-test-mobile', function( req, res ) {
    // event log of DELETE request
    console.log( 'delete request received' );
    console.log( 'clusterid: ' + cluster.worker.id );
    console.log( req.path );
    console.log( req.headers );

    // response to client
    res.status(200).send( 'Request received\n'  + cluster.worker.id );
  } );

  app.listen( 1337, function() {
    console.log( 'app server is running on port 1337' );
    console.log( 'clusterid: ' + cluster.worker.id );
    console.log( 'End Point:\n/locust-test\n\nMETHODS:\nGET\nPOST\nPUT\nDELETE' );
    console.log( '\n\nEnd Point:\n/locust-test-mobile\n\nMETHODS:\nGET\nPOST\nPUT\nDELETE' );
  } );
}
