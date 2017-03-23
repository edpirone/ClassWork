// // function response() {
// // 	var myNum = $('#myVariable').val();
// // 	// var myNum = document.getElementById("myVariable").value;
// //
// // 	if (myNum < 10) {
// // 		alert('Your number is less than 10.');
// // 	} else if (myNum > 10) {
// // 		alert('Your number is ' + myNum + ', which is obviously more than 10.');
// // 	} else {
// // 		alert('The variable ' + '"' + myNum + '"' + ' is not a number at all baby. It is a string.')
// // 	}
// // }
//
// // function response() {
// // 	var myNum = $('#myVariable').val();
// //
// //
// // 	if (myNum < 10) {
// // 		$("#answer").text(function () {
// // 			return $(this).text().replace("", "Your number is less than 10.");
// // 		});
// // 	} else if (myNum > 10) {
// // 		$("#answer").text(function () {
// // 			return $(this).text().replace("", "Your number is greater than 10.");
// // 		});
// // 	} else {
// // 		$("#answer").text(function () {
// // 			return $(this).text().replace("", "Your number a string.");
// // 		});
// // 	}
// // }
//
// // var edsArray = ["edward", "james", "patrick", "paul", "jason"]
// //
// // for (i=0; i < edsArray.length; i++ ) {
// // 	console.log(edsArray[i] + 'is my friend');
// // }
//
// // for (i = 99; i >= 1; i--) {
// // 	console.log(i + ' bottles of beer on the wall, ' + i + ' bottles of beer, take one down, pass it around, ' + (i - 1) + ' bottles of beer on the wall.');
// // }
//
// // var globalVar = 5;
// //
// // function edsFunction() {
// // 	var localVar = 10;
// // 	return(localVar + globalVar);
// // }
// //
// // console.log(edsFunction());
//
//
// // HOMEWORK
//
//
// // ADDING SOME VARIABLE TO EACH OTHER. EITHER INTEGERS OR STRINGS.
//
// var firstNum = 1;
// var secondNum = 2;
// var firstString = 'Hey dude.';
// var secondString = 'Hola amigo.';
//
// console.log(firstNum + secondNum);
// console.log(firstString + secondString);
//
//
// // CREATING SOME ARRAYS TO REFERENCE THE LENGTH OF
// // AND USE AN IF/ELSE TO DISPLAY.
//
// var parks = ['Yosemite', 'Acadia', 'Yellowstone', 'Monument Valley'];
// var mountains = ['Half Dome', 'Cascade', 'Gothics', 'Wolf Jaw'];
//
// console.log(parks[2] + ' , ' + mountains[3]);
//
// if (parks.length < 5) {
// 	console.log('The amount of items in the "parks" array is less than 5.');
// } else {
// 	console.log('The amount of items in the "parks" array is greater than 5. To be clear, it is ' + parks.length + '.');
// }
//
//
// // SETTING A VARIABLE TO CHECK AND THEN LOOP THROUGH
// // WITH A IF/ELSEIF/ELSE STATEMENT TO DISPLAY IF THE
// // VARIABLE IS LESS THAN, EQUAL TO, OR GREATER THAN 100;
//
// var numberCheck = 105;
//
// for (i = numberCheck; i >= 95; i--) {
// 	if (i > 100) {
// 		console.log(i + ' is greater than 100');
// 	} else if (i == 100) {
// 		console.log(i + ' is equal to 100');
// 	} else {
// 		console.log(i + ' is less than 100');
// 	}
// }
//
// function edsFunction(name) {
// 	console.log(name + ' loves code.')
// }
//
// console.log(edsFunction('ed'));
//
//
// function winningDoors(whichDoor) {
// 	if (whichDoor == 'firstDoor') {
// 		console.log('First Door');
// 	}
// 	else if (whichDoor == 'secondDoor'){
// 		console.log('Second Door');
// 	}
// 	else {
// 		console.log('Third Door');
// 	}
// }



// var fixList = function() {
//     var getList = document.getElementsByClassName('list');
//     for (i = 0; i < getList.length; i++) {
//         var listElements = getList[i].getElementsByTagName('li');
//
//         if (getList[i].className == 'list food') {
//             console.log(listElements);
//         } else {
//             console.log(listElements);
//         }
//     }
// }
//
// fixList();

// var heading = document.getElementById('form-title');
// var textField = document.getElementById('username');
//
// var callback = function() {
//     heading.innerText = textField.value + "'s Information";
// }
//
// heading.onclick = callback;
//
// textField.onkeyup = function() {
//     heading.innerText = textField.value + "'s Information";
// };

// ORIGINAL

// var headArray = document.getElementsByTagName("h1");
//
// for (i = 0; i < headArray.length; i++) {
//     headArray[i].addEventListener("click", edsClick);
// }
//
// function edsClick() {
//   alert(this.innerHTML);
// }

var headArray = document.getElementsByTagName("h1");

for (i = 0; i < headArray.length; i++) {
   //  var head = headArray[i];

    headArray[i].addEventListener("click", edsClick);
}

function edsClick() {
    alert(this.innerHTML);
}
