var fs = require( 'fs' );

fs.readFile( './countries.json', 'utf-8', function( err, data, country ) {

   var country = process.argv[2];

   if ( err ) {
      console.log( `an error occurred: ${ err }` );
      throw err;
   } else {
      var obj = JSON.parse( data );

      for ( i = 0; i < obj.length; i++ ) {
         if ( obj[i].name == country ) {
            console.log( 'Name: ' + obj[i].name );
            console.log( 'Region: ' + obj[i].region );
            console.log( 'Sub Region: ' + obj[i].subregion );
            console.log( 'Capital: ' + obj[i].capital );
         }
      }
   }
});
