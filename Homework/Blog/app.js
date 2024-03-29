var express = require( 'express' );
var path = require( 'path' );
var favicon = require( 'serve-favicon' );
var logger = require( 'morgan' );
var cookieParser = require( 'cookie-parser' );
var bodyParser = require( 'body-parser' );
// // include the node postgres library
// var pg = require( 'pg' );
// // connect to a database
// pg.connect( 'postgres://user:711838@localhost/blog', function( err, client, done ) {
//    //request all of the hats
//    client.query( `select * from hats`, function( err, result ) {
//       console.log( result.rows );
//       //let pg know we're done with this client
//       done( );
//       //close the pg pool entirely.
//       //this is done so our node process will exit.
//       pg.end( );
//    });
// });

var index = require( './routes/index' );
var users = require( './routes/users' );

var app = express( );

// view engine setup
app.set('views', path.join( __dirname, 'views' ));
app.set( 'view engine', 'pug' );

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger( 'dev' ));
app.use(bodyParser.json( ));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser( ));
app.use(express.static(path.join( __dirname, 'public' )));

app.use( '/', index );
app.use( '/users', users );

// catch 404 and forward to error handler
app.use( function( req, res, next ) {
   var err = new Error( 'Not Found' );
   err.status = 404;
   next( err );
});

// error handler
app.use( function( err, req, res, next ) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error   = req.app.get( 'env' ) === 'development'
      ? err
      : {};

   // render the error page
   res.status( err.status || 500 );
   res.render( 'error' );
});

module.exports = app;
