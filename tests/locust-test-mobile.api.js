describe( 'API - locust-test-mobile', function() {
  var runEnv = 'http://localhost:1337',
      request = require( 'supertest-as-promised' )( runEnv );

  it( 'GET /locust-test-mobile returns 200', function() {
    return request
      .get( '/locust-test-mobile' )
      .expect( 200 );
  } );

  it( 'POST /locust-test-mobile submits a valid payload returns 200', function() {
    return request
      .post( '/locust-test-mobile' )
      .send( { 'AnswerSetDefinitions': {
        'Id': '00000000-0000-0000-0000-000000000000',
        'Name': 'yes/no',
        'OptionDefinitions': '[yes/no]'
      } } )
      .expect( 200 );
  } );

  it( 'POST /locust-test-mobile submits an invalid payload returns 400', function() {
    return request
      .post( '/locust-test-mobile' )
      .send( { 'AnswerSetDefinitions': {
        'Id': '',
        'Name': 'yes/no',
        'OptionDefinitions': '[yes/no]'
      } } )
      .expect( 400 );
  } );

  it( 'PUT /locust-test-mobile returns 200', function() {
    return request
      .put( '/locust-test-mobile' )
      .expect( 200 );
  } );

  it( 'DELETE /locust-test-mobile returns 200', function() {
    return request
      .delete( '/locust-test-mobile' )
      .expect( 200 );
  } );
} );
