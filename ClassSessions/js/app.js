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


// // ELEVATOR SIMULATOR  EDS TRY
//
// var EventEmitter = require( 'events' );
// var myEmitter = new EventEmitter();
//
// /////////////////
//
// var travelers = [ {
//    name: 'Newman',
//    destination: 2
// }, {
//    name: 'Kramer',
//    destination: 10
// }, {
//    name: 'Jerry',
//    destination: 4
// } ]
//
// function Elevator( passengers ) {
//    this.passenger = null;
//    this.currentFloor = 1;
//    this.passengers = passengers;
//
//    this.goUp = function () {
//       console.log( 'Passing floor ' + this.currentFloor++ + ' on our way to floor ' + this.passenger.destination + '.' );
//    }
//    this.goDown = function () {
//       console.log( 'Passing floor ' + this.currentFloor-- + ' on our way to floor 1.' );
//    }
//    this.onElevatorRunning = function () {
//
//       if ( this.passenger != null ) {
//          if ( this.passenger.destination > this.currentFloor ) {
//             myEmitter.emit( 'elevatorUp' );
//          } else {
//             console.log( 'Dropping off ' + this.passenger.name + " and going down." );
//             this.passenger = null;
//             myEmitter.emit( 'elevatorDown' );
//          }
//       } else if ( this.passenger == null ) {
//          if ( this.currentFloor > 1 ) {
//             myEmitter.emit( 'elevatorDown' );
// 				var over = false;
//          } else {
//             var current = passengers.shift();
//             this.passenger = current;
//             console.log( 'Picking up ' + current.name + ' to go to floor ' + current.destination + '.' )
//          }
//       }
//    }
// }
// var myElevator = new Elevator( travelers );
//
// /////////////////
//
// myEmitter.on( 'elevatorRunning', function () {
//    myElevator.onElevatorRunning();
// } );
//
// myEmitter.on( 'elevatorUp', function () {
//    myElevator.goUp();
// } );
//
// myEmitter.on( 'elevatorDown', function () {
//    myElevator.goDown();
// } );
//
// //////////////////
//
// function emitElevator() {
// 	if (myElevator.passengers.length == 0 && myElevator.currentFloor == 1 && myElevator.passenger == null) {
// 		console.log('No more passengers to pick up');
// 	} else {
// 		myEmitter.emit( 'elevatorRunning' );
// 		setTimeout( emitElevator, 150 );
// 	}
// }
//
// emitElevator( '' );
//
// //////////////////


// ELEVATOR SIMULATOR CLASS

var EventEmitter = require( 'events' );
var myEmitter = new EventEmitter();

/////////////////

var travelers = [ {
   name: 'Newman',
   destination: 2
}, {
   name: 'Kramer',
   destination: 10
}, {
   name: 'Jerry',
   destination: 4
} ]

function Elevator( passengers ) {
   var self = this;

   this.passenger = null;
   this.currentFloor = 1;
   this.passengers = passengers;

   this.on( 'emitUp', function ( passenger ) {
      self.changeFloor( +1 );

      if ( self.passenger != null ) {
         if ( self.passenger.destination > self.currentFloor ) {
				console.log( 'Passing floor ' + self.currentFloor++ + ' on our way to floor ' + self.passenger.destination + '.' );
         } else {
            console.log( 'Dropping off ' + self.passenger.name + " and going down." );
            self.passenger = null;
            myEmitter.emit( 'elevatorDown' );
         }
      } else if ( self.passenger == null ) {
         if ( self.currentFloor > 1 ) {
            myEmitter.emit( 'elevatorDown' );
            var over = false;
         } else {
            var current = passengers.pop();
            self.passenger = current;
            console.log( 'Picking up ' + current.name + ' to go to floor ' + current.destination + '.' )
         }
      }


   } );

   this.goUp = function () {
		self.emit( 'emitUp' );
   }
   this.goDown = function () {
      console.log( 'Passing floor ' + self.currentFloor-- + ' on our way to floor 1.' );
   }
   this.onElevatorRunning = function () {


   }
}
var myElevator = new Elevator( travelers );

/////////////////

myEmitter.on( 'elevatorRunning', function () {
   myElevator.onElevatorRunning();
} );

myEmitter.on( 'elevatorUp', function () {
   myElevator.goUp();
} );

myEmitter.on( 'elevatorDown', function () {
   myElevator.goDown();
} );

//////////////////

function emitElevator() {
   if ( myElevator.passengers.length == 0 && myElevator.currentFloor == 1 && myElevator.passenger == null ) {
      console.log( 'No more passengers to pick up' );
   } else {
      myEmitter.emit( 'elevatorRunning' );
      setTimeout( emitElevator, 150 );
   }
}

emitElevator( '' );

//////////////////
