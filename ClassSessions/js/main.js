// 03.16.17

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
// var mountains = [['Half Dome', 'Cascade', 'Gothics', 'Wolf Jaw'],['Slide', 'Hunter', 'Black Head', 'Black Dome']];
//
// console.log(parks[2] + ' , ' + mountains[1][0]);
// console.log(mountains[0][2] + ' is in Yosemite, ' + mountains[1][2] + ' is in the Catskills.')
//
// if (parks.length < 5) {
//     console.log('The amount of items in the "parks" array is less than 5.');
// } else {
//     console.log('The amount of items in the "parks" array is greater than 5. To be clear, it is ' + parks.length + '.');
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
//     if (i > 100) {
//         console.log(i + ' is greater than 100');
//     } else if (i == 100) {
//         console.log(i + ' is equal to 100');
//     } else {
//         console.log(i + ' is less than 100');
//     }
// }
//
// // Not sure what part of the homework this was for.
// function edsFunction(name) {
//     console.log(name + ' loves code.')
// }
//
// console.log(edsFunction('ed'));
//
// // THIS IS THE RANDOM DOOR ASSIGNMENT.
// // Notes: I definitely played around a tried some different things. The final product seems like I made if statements on the actual door click that were unecessary.
// // I could have just labeled them with the same function and acheived the same result.
//
// function winningDoors(whichDoor) {
//     function prize() {
//         var prizeRandomizer = Math.floor((Math.random() * 3) + 1);
//         if (prizeRandomizer == 1) {
//             alert('You won a car!');
//         } else if (prizeRandomizer == 2) {
//             alert('You won nothing!');
//         } else {
//             alert('You won a pen!');
//         }
//     }
//     if (whichDoor == 'firstDoor') {
//         prize();
//     } else if (whichDoor == 'secondDoor') {
//         prize();
//     } else {
//         prize();
//     }
// }
//
//
//
//
// // END HOMEWORK. EVERYTHIGN BELOW WAS TINKERING FROM CLASS
//
//
//
//
//
//
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


// END 03.16.17

// 03.19.17

// // // function response() {
// // // 	var myNum = $('#myVariable').val();
// // // 	// var myNum = document.getElementById("myVariable").value;
// // //
// // // 	if (myNum < 10) {
// // // 		alert('Your number is less than 10.');
// // // 	} else if (myNum > 10) {
// // // 		alert('Your number is ' + myNum + ', which is obviously more than 10.');
// // // 	} else {
// // // 		alert('The variable ' + '"' + myNum + '"' + ' is not a number at all baby. It is a string.')
// // // 	}
// // // }
// //
// // // function response() {
// // // 	var myNum = $('#myVariable').val();
// // //
// // //
// // // 	if (myNum < 10) {
// // // 		$("#answer").text(function () {
// // // 			return $(this).text().replace("", "Your number is less than 10.");
// // // 		});
// // // 	} else if (myNum > 10) {
// // // 		$("#answer").text(function () {
// // // 			return $(this).text().replace("", "Your number is greater than 10.");
// // // 		});
// // // 	} else {
// // // 		$("#answer").text(function () {
// // // 			return $(this).text().replace("", "Your number a string.");
// // // 		});
// // // 	}
// // // }
// //
// // // var edsArray = ["edward", "james", "patrick", "paul", "jason"]
// // //
// // // for (i=0; i < edsArray.length; i++ ) {
// // // 	console.log(edsArray[i] + 'is my friend');
// // // }
// //
// // // for (i = 99; i >= 1; i--) {
// // // 	console.log(i + ' bottles of beer on the wall, ' + i + ' bottles of beer, take one down, pass it around, ' + (i - 1) + ' bottles of beer on the wall.');
// // // }
// //
// // // var globalVar = 5;
// // //
// // // function edsFunction() {
// // // 	var localVar = 10;
// // // 	return(localVar + globalVar);
// // // }
// // //
// // // console.log(edsFunction());
// //
// //
// // // HOMEWORK
// //
// //
// // // ADDING SOME VARIABLE TO EACH OTHER. EITHER INTEGERS OR STRINGS.
// //
// // var firstNum = 1;
// // var secondNum = 2;
// // var firstString = 'Hey dude.';
// // var secondString = 'Hola amigo.';
// //
// // console.log(firstNum + secondNum);
// // console.log(firstString + secondString);
// //
// //
// // // CREATING SOME ARRAYS TO REFERENCE THE LENGTH OF
// // // AND USE AN IF/ELSE TO DISPLAY.
// //
// // var parks = ['Yosemite', 'Acadia', 'Yellowstone', 'Monument Valley'];
// // var mountains = ['Half Dome', 'Cascade', 'Gothics', 'Wolf Jaw'];
// //
// // console.log(parks[2] + ' , ' + mountains[3]);
// //
// // if (parks.length < 5) {
// // 	console.log('The amount of items in the "parks" array is less than 5.');
// // } else {
// // 	console.log('The amount of items in the "parks" array is greater than 5. To be clear, it is ' + parks.length + '.');
// // }
// //
// //
// // // SETTING A VARIABLE TO CHECK AND THEN LOOP THROUGH
// // // WITH A IF/ELSEIF/ELSE STATEMENT TO DISPLAY IF THE
// // // VARIABLE IS LESS THAN, EQUAL TO, OR GREATER THAN 100;
// //
// // var numberCheck = 105;
// //
// // for (i = numberCheck; i >= 95; i--) {
// // 	if (i > 100) {
// // 		console.log(i + ' is greater than 100');
// // 	} else if (i == 100) {
// // 		console.log(i + ' is equal to 100');
// // 	} else {
// // 		console.log(i + ' is less than 100');
// // 	}
// // }
// //
// // function edsFunction(name) {
// // 	console.log(name + ' loves code.')
// // }
// //
// // console.log(edsFunction('ed'));
// //
// //
// // function winningDoors(whichDoor) {
// // 	if (whichDoor == 'firstDoor') {
// // 		console.log('First Door');
// // 	}
// // 	else if (whichDoor == 'secondDoor'){
// // 		console.log('Second Door');
// // 	}
// // 	else {
// // 		console.log('Third Door');
// // 	}
// // }
//
//
//
// // var fixList = function() {
// //     var getList = document.getElementsByClassName('list');
// //     for (i = 0; i < getList.length; i++) {
// //         var listElements = getList[i].getElementsByTagName('li');
// //
// //         if (getList[i].className == 'list food') {
// //             console.log(listElements);
// //         } else {
// //             console.log(listElements);
// //         }
// //     }
// // }
// //
// // fixList();
//
// // var heading = document.getElementById('form-title');
// // var textField = document.getElementById('username');
// //
// // var callback = function() {
// //     heading.innerText = textField.value + "'s Information";
// // }
// //
// // heading.onclick = callback;
// //
// // textField.onkeyup = function() {
// //     heading.innerText = textField.value + "'s Information";
// // };
//
// // ORIGINAL
//
// // var headArray = document.getElementsByTagName("h1");
// //
// // for (i = 0; i < headArray.length; i++) {
// //     headArray[i].addEventListener("click", edsClick);
// // }
// //
// // function edsClick() {
// //   alert(this.innerHTML);
// // }
//
// var headArray = document.getElementsByTagName("h1");
//
// for (i = 0; i < headArray.length; i++) {
//    //  var head = headArray[i];
//
//     headArray[i].addEventListener("click", edsClick);
// }
//
// function edsClick() {
//     alert(this.innerHTML);
// }


// end 03.19.17

// 03.21.17

// function validate() {
//     var userValid = document.getElementById("username");
//     var passValid = document.getElementById("password");
//     var validateMessage = document.getElementById("validateMessage");
//     var isUsernameBad = true;
//     var isPassBad = true;
//
//     for (i = 0; i < userValid.value.length; i++) {
//         if (userValid.value[i] >= 0) {
//             isUsernameBad = false;
//
//         }
//     }
//
//     if (passValid.value == 1234) {
//         isPassBad = false;
//     }
//
//     if (isUsernameBad == false && isPassBad == false) {
//         validateMessage.innerHTML = "Good job! You just fake signed in to this shitty app!";
//     } else {
//         validateMessage.innerHTML = "Your username or password is incorrect!";
//         alert('Hey! Looks like something went wrong. Check the error message at the bottom.');
//     }
// }
// var keyPressNotify = document.getElementById("keyLogger");
//
// document.addEventListener('keydown', function(e) {
//     console.log(String.fromCharCode(e.keyCode));
//     keyPressNotify.innerHTML += (String.fromCharCode(e.keyCode));
// });
//
// function Human(name, age, sex, location, birthdate) {
// 	this.name = name;
// 	this.age = age;
// 	this.sex = sex;
// 	this.location = location;
// 	this.birthdate = birthdate;
// 	this.description = function () {
// 		return('The human named ' + this.name + ' is a ' + this.age + ' year old ' + this.sex + ' that lives in ' + this.location + ".");
// 	}
// }
//
// var human1 = new Human('Ed', 34, 'Male', 'New Jersey', '01-01-83');
// var human2 = new Human('Ashley', 29, 'Female', 'New Jersey', '06-18-86');
//
// console.log(human1);
// console.log(human1.age);
// // console.log('The human named ' + human1.name + ' is a ' + human1.age + ' year old ' + human1.sex + ' that lives in ' + human1.location + ".");
// console.log(human1.description;
//
// // for (i = 0; i < Human.length; i++) {
// // 	console.log(Human[i]);
// // }


// END 03.21.17

// START PRIOR TO 03.23.17

// function validate() {
//     var userValid = document.getElementById("username");
//     var passValid = document.getElementById("password");
//     var validateMessage = document.getElementById("validateMessage");
//     var isUsernameBad = true;
//     var isPassBad = true;
//
//     for (i = 0; i < userValid.value.length; i++) {
//         if (userValid.value[i] >= 0) {
//             isUsernameBad = false;
//         }
//     }
//
//     if (passValid.value == 1234) {
//         isPassBad = false;
//     }
//
//     if (isUsernameBad == false && isPassBad == false) {
//         validateMessage.innerHTML = "Good job! You just fake signed in to this shitty app!";
//     } else {
//         validateMessage.innerHTML = "Your username or password is incorrect!";
//         alert('Hey! Looks like something went wrong. Check the error message at the bottom.');
//     }
// }
// var keyPressNotify = document.getElementById("keyLogger");
//
// document.addEventListener('keydown', function(e) {
//     console.log(String.fromCharCode(e.keyCode));
//     keyPressNotify.innerHTML += (String.fromCharCode(e.keyCode));
// });
//
// function Human(name, age, sex, location, birthdate) {
// 	this.name = name;
// 	this.age = age;
// 	this.sex = sex;
// 	this.location = location;
// 	this.birthdate = birthdate;
// 	this.description = function () {
// 		return('The human named ' + this.name + ' is a ' + this.age + ' year old ' + this.sex + ' that lives in ' + this.location + ".");
// 	}
// }
//
// var human1 = new Human('Ed', 34, 'Male', 'New Jersey', '01-01-83');
// var human2 = new Human('Ashley', 29, 'Female', 'New Jersey', '06-18-86');
//
// console.log(human1);
// console.log(human1.age);
// console.log(human1.description;



// OBJECTS

// function Worker(fName, lName, location, age) {
//     this.fName = fName;
//     this.lName = lName;
//     this.location = location;
//     this.age = age;
// 	 this.description = function() {
// 		 if (this.fulltime == true) {
// 			 console.log('Full Time');
// 		 } else if (this.parttime == true) {
// 			 console.log('Part Time');
// 		 } else {
// 			 console.log('Freelance');
// 		 }
// 	 }
// }
//
// function FullTime() {
//     this.fulltime = true;
//     Worker.apply(this, arguments);
// }
//
// function PartTime() {
//     this.parttime = true;
//     Worker.apply(this, arguments);
// }
//
// PartTime.prototype = new Worker();
// FullTime.prototype = new Worker();
//
// var worker1 = new Worker('Ed', 'Pirone', 'New Jersey', 34);
// var worker2 = new PartTime('Patrick', 'James', 'New York', 37);
// var worker3 = new FullTime('Paul', 'Kilgallen', 'Virginia', 28);
//
// console.log(worker1.description());

// var listElements = $(".list li");

// for (i = 0; i < listElements.length; i++) {

// }
// listElements.click(function() {
// 	// listElements.removeClass('active');
// 	// if ($(this).hasClass('active'))
//    $(this).toggleClass('active');
// });

// END PRIOR TO 03.23.17
// START 03.26.17

// SPOTIFY EXAMPLE
// $.ajax({
//     type: "GET",
//     url: 'https://api.spotify.com/v1/search',
//     data: {
//         q: 'prince',
//         type: 'artist'
//     },
//     success: function(response) {
//         console.log(response);
//     }
// });
//
// $.getJSON("http://www.omdbapi.com/?", {
//     t: "sharknado"
// }, function(response) {
//     console.log(response);
// });



// var searchValue = $("#search").keyup(returnResults);
//
// function returnResults() {
//     var searchLength = $("#search").val().length;
//
//     if (searchLength >= 4) {
//         var searchValue = $("#search").val();
//         $.ajax({
//             url: "http://www.omdbapi.com/?",
//             data: {
//                 t: searchValue
//             },
//             dataType: "json",
//             success: function(response) {
//                 console.log(response);
//                 //  $(".suggestion").text(response['Title']);
//                 //  $(".suggestion").html
//             }
//         });
//     }
//
// }


// END 03.26.17



// ISAAC THIS IS THE HOMEWORK FOR DOM ELEMENT STUFF

// // BUTTONS ARGUING
//
// $('#person1').click(hello1);
// $('#person2').click(hello2);
//
// function hello1() {
//     $('#argument').html('I am right!');
// }
//
// function hello2() {
//     $('#argument').html('No I am right!');
// }
//
// // END BUTTONS ARGUING
// // DON'T HOVER ON ME DIV
//
// $('#hoverGuy').hover(hover1);
//
// function hover1() {
//     $('#hoverGuy p').html('I said don\'t hover on me!');
// }
// // END DON'T HOVER ON ME DIV
// // KEYLISTENER STUFF BELOW
//
// document.addEventListener('keydown', function(e) {
//     console.log(String.fromCharCode(e.keyCode));
//     $('#keyLogger').append(String.fromCharCode(e.keyCode));
// });
//
// // END KEYLISTENER
// // FORM VALIDATION BELOW
// $('#validateForm').click(validate);
//
// function validate() {
//     var userValid = document.getElementById("username");
//     var passValid = document.getElementById("password");
//     var validateMessage = document.getElementById("validateMessage");
//     var isUsernameBad = true;
//     var isPassBad = true;
//
//     for (i = 0; i < userValid.value.length; i++) {
//         if (userValid.value[i] >= 0) {
//             isUsernameBad = false;
//         }
//     }
//
//     if (passValid.value == 1234) {
//         isPassBad = false;
//     }
//
//     if (isUsernameBad == false && isPassBad == false) {
//         validateMessage.innerHTML = "Good job! You just fake signed in to this shitty app!";
//     } else {
//         validateMessage.innerHTML = "Your username or password is incorrect!";
//         alert('Hey! Looks like something went wrong. Check the error message at the bottom.');
//     }
// }
// END FORM VALIDATION

// JUKEBOX

function Jukebox() {
    this.songs = [];
    this.playCurrent = function(index) {
        var playThis = new Audio(this.songs[index].url);
		  var isPlaying = false;

		  if (isPlaying == false) {
			  var isPlaying = true;
			  playThis.play();
		  } else {
			  var isPlaying = false;
			  playThis.pause();
		  }

    }
    this.loadList = function() {
        for (i = 0; i < this.songs.length; i++) {
            $('#jukebox-playlist').append('<li>' + this.songs[i].artist + ' - ' + this.songs[i].title + '</li>');
        }
		  $('#jukebox-current h1').html(this.songs[0].title);
		  $('#jukebox-current h2').html(this.songs[0].artist);
    }
}
var myJukebox = new Jukebox();

function Song(artist, title, url) {
    this.artist = artist;
    this.title = title;
    this.url = url;
    myJukebox.songs.push(this);
}

var song1 = new Song('J.Cole', 'Return of Simba', 'assets/audio/return-of-simba.mp3');
var song2 = new Song('Griz', 'Getting Live', 'assets/audio/getting-live.mp3');

$(document).ready(myJukebox.loadList());

$('#jukebox-play').click(function() {
    myJukebox.playCurrent(1);
});
$('#jukebox-playlist li').dblclick(function() {
	myJukebox.playCurrent(1);
});
$('#jukebox-playlist li').dblclick(function() {
	myJukebox.playCurrent(1);
});

// SOUNDCLOUD 4/3/17
