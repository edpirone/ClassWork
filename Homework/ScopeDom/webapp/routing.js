var express = require( 'express' );
var parser = require( 'body-parser' );

var app = express( );

app.use(parser.json( ));

// app.post( '/submit', function( request, response ) {
//    if ( request.body.foo ) {
//       response.send( `Foo is ${ request.body.foo }` )
//    } else {
//       response.send( 'Error' );
//    }
// });

app.get([
   '/apple', '/ale',
], function( request, response ) {
   console.log( 'got request for apple or ale' );
   // response.send( 'Apple or ale' );
   response.send( `
		<h1>Testing</h1>
		` );
});

app.get( '/who+a+', function( request, response ) {
   console.log( 'got request for whoa' );
   response.send( 'Whoaaaaa!' );
});

app.get( '/hello/:first_name/:last_name', function( request, response ) {
   console.log( `Request for ${ request.params.first_name } ${ request.params.last_name }` );
   response.send( `Hello there ${ request.params.first_name } ${ request.params.last_name }` );
});

app.get( '/hi', function( request, response ) {

   response.send( 'hi ' + request.query.first_name + ' ' + request.query.last_name );
});

app.get( '/reverse/:word', function( request, response ) {
   function reverseString( str ) {
      return str.split( "" ).reverse( ).join( "" );
   }
   response.send('Is it worth it? Let me work it. Put my game down flip it and reverse it. ' + reverseString( `${ request.params.word }` ));
});

app.get( '*', function( request, response ) {
   response.status( 404 ).send( 'This page is not here' );
});

app.listen( 3000, function( ) {
   console.log( 'Example app listening on port 3000!' );
});
