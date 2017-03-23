// HOMEWORK


// ADDING SOME VARIABLE TO EACH OTHER. EITHER INTEGERS OR STRINGS.

var firstNum = 1;
var secondNum = 2;
var firstString = 'Hey dude.';
var secondString = 'Hola amigo.';

console.log(firstNum + secondNum);
console.log(firstString + secondString);


// CREATING SOME ARRAYS TO REFERENCE THE LENGTH OF
// AND USE AN IF/ELSE TO DISPLAY.

var parks = ['Yosemite', 'Acadia', 'Yellowstone', 'Monument Valley'];
var mountains = [['Half Dome', 'Cascade', 'Gothics', 'Wolf Jaw'],['Slide', 'Hunter', 'Black Head', 'Black Dome']];

console.log(parks[2] + ' , ' + mountains[1][0]);
console.log(mountains[0][2] + ' is in Yosemite, ' + mountains[1][2] + ' is in the Catskills.')

if (parks.length < 5) {
    console.log('The amount of items in the "parks" array is less than 5.');
} else {
    console.log('The amount of items in the "parks" array is greater than 5. To be clear, it is ' + parks.length + '.');
}


// SETTING A VARIABLE TO CHECK AND THEN LOOP THROUGH
// WITH A IF/ELSEIF/ELSE STATEMENT TO DISPLAY IF THE
// VARIABLE IS LESS THAN, EQUAL TO, OR GREATER THAN 100;

var numberCheck = 105;

for (i = numberCheck; i >= 95; i--) {
    if (i > 100) {
        console.log(i + ' is greater than 100');
    } else if (i == 100) {
        console.log(i + ' is equal to 100');
    } else {
        console.log(i + ' is less than 100');
    }
}

// Not sure what part of the homework this was for.
function edsFunction(name) {
    console.log(name + ' loves code.')
}

console.log(edsFunction('ed'));

// THIS IS THE RANDOM DOOR ASSIGNMENT.
// Notes: I definitely played around a tried some different things. The final product seems like I made if statements on the actual door click that were unecessary.
// I could have just labeled them with the same function and acheived the same result.

function winningDoors(whichDoor) {
    function prize() {
        var prizeRandomizer = Math.floor((Math.random() * 3) + 1);
        if (prizeRandomizer == 1) {
            alert('You won a car!');
        } else if (prizeRandomizer == 2) {
            alert('You won nothing!');
        } else {
            alert('You won a pen!');
        }
    }
    if (whichDoor == 'firstDoor') {
        prize();
    } else if (whichDoor == 'secondDoor') {
        prize();
    } else {
        prize();
    }
}




// END HOMEWORK. EVERYTHIGN BELOW WAS TINKERING FROM CLASS






// function response() {
// 	var myNum = $('#myVariable').val();
// 	// var myNum = document.getElementById("myVariable").value;
//
// 	if (myNum < 10) {
// 		alert('Your number is less than 10.');
// 	} else if (myNum > 10) {
// 		alert('Your number is ' + myNum + ', which is obviously more than 10.');
// 	} else {
// 		alert('The variable ' + '"' + myNum + '"' + ' is not a number at all baby. It is a string.')
// 	}
// }

// function response() {
// 	var myNum = $('#myVariable').val();
//
//
// 	if (myNum < 10) {
// 		$("#answer").text(function () {
// 			return $(this).text().replace("", "Your number is less than 10.");
// 		});
// 	} else if (myNum > 10) {
// 		$("#answer").text(function () {
// 			return $(this).text().replace("", "Your number is greater than 10.");
// 		});
// 	} else {
// 		$("#answer").text(function () {
// 			return $(this).text().replace("", "Your number a string.");
// 		});
// 	}
// }

// var edsArray = ["edward", "james", "patrick", "paul", "jason"]
//
// for (i=0; i < edsArray.length; i++ ) {
// 	console.log(edsArray[i] + 'is my friend');
// }

// for (i = 99; i >= 1; i--) {
// 	console.log(i + ' bottles of beer on the wall, ' + i + ' bottles of beer, take one down, pass it around, ' + (i - 1) + ' bottles of beer on the wall.');
// }

// var globalVar = 5;
//
// function edsFunction() {
// 	var localVar = 10;
// 	return(localVar + globalVar);
// }
//
// console.log(edsFunction());
