// SET MODULES

// // var setDifference = require('./modules/set-difference');
// var setIntersection = require('./modules/set-intersection');
//
// var set1 = ['dogs', 'cats', 'red', 'bananas', 'code', 'movies'];
// var set2 = ['blue', 'horses', 'dogs', 'code', 'rain'];
//
// // var difference = setDifference(set1, set2);
// var intersection = setIntersection(set1, set2);
//
// // console.log(difference);
// console.log(intersection);


// ORDERING DRINKS
// function orderDrinks( drinkType, hasIce, callBack ) {
//    if ( !drinkType ) {
//       return callBack( new Error( 'We need to know what you want to drink!' ) );
//    } else {
//       console.log( `Thank you for ordering a ${drinkType}!` )
//
//       setTimeout( function () {
//          callBack( null, `Here is your ${drinkType} with ${hasIce ? 'lots of' : 'no'} ice.` )
//       }, 1000 );
//    }
// };
//
// function showDrinkOrder( error, message ) {
//    if ( error ) {
//       console.log( `There was a problem with your drink order: ${error.message}.` );
//    } else {
//       console.log( message );
//    }
// }
//
// orderDrinks( 'Pepsi', false, showDrinkOrder );
// orderDrinks( null, false, showDrinkOrder );
// orderDrinks( 'Coke', true, showDrinkOrder );
// orderDrinks( 'Ginger Ale', false, showDrinkOrder );
// orderDrinks( 'Orange Soda', false, showDrinkOrder );
// orderDrinks( 'Rootbeer', true, showDrinkOrder );


// ELEVATOR SIMULATOR

var EventEmitter = require( 'events' );
var myEmitter = new EventEmitter();

myEmitter.on( 'goUp', function ( passenger ) {
   console.log( passenger );
} );

myEmitter.emit( 'goUp', travelers[ 1 ].destination );

travelers = [ {
   name: 'Jerry',
   destination: 4
}, {
   name: 'Kramer',
   destination: 10
}, {
   name: 'Newman',
   destination: 2
} ]
