function validate() {
    var userValid = document.getElementById("username");
    var passValid = document.getElementById("password");
    var validateMessage = document.getElementById("validateMessage");
    var isUsernameBad = true;
    var isPassBad = true;

    for (i = 0; i < userValid.value.length; i++) {
        if (userValid.value[i] >= 0) {
            isUsernameBad = false;

        }
    }

    if (passValid.value == 1234) {
        isPassBad = false;
    }

    if (isUsernameBad == false && isPassBad == false) {
        validateMessage.innerHTML = "Good job! You just fake signed in to this shitty app!";
    } else {
        validateMessage.innerHTML = "Your username or password is incorrect!";
        alert('Hey! Looks like something went wrong. Check the error message at the bottom.');
    }
}
var keyPressNotify = document.getElementById("keyLogger");

document.addEventListener('keydown', function(e) {
    console.log(String.fromCharCode(e.keyCode));
    keyPressNotify.innerHTML += (String.fromCharCode(e.keyCode));
});

function Human(name, age, sex, location, birthdate) {
	this.name = name;
	this.age = age;
	this.sex = sex;
	this.location = location;
	this.birthdate = birthdate;
	this.description = function () {
		return('The human named ' + this.name + ' is a ' + this.age + ' year old ' + this.sex + ' that lives in ' + this.location + ".");
	}
}

var human1 = new Human('Ed', 34, 'Male', 'New Jersey', '01-01-83');
var human2 = new Human('Ashley', 29, 'Female', 'New Jersey', '06-18-86');

console.log(human1);
console.log(human1.age);
// console.log('The human named ' + human1.name + ' is a ' + human1.age + ' year old ' + human1.sex + ' that lives in ' + human1.location + ".");
console.log(human1.description;

// for (i = 0; i < Human.length; i++) {
// 	console.log(Human[i]);
// }
