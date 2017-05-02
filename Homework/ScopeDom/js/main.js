// BUTTONS ARGUING

$('#person1').click(hello1);
$('#person2').click(hello2);

function hello1() {
    $('#argument').html('I am right!');
}

function hello2() {
    $('#argument').html('No I am right!');
}

// END BUTTONS ARGUING
// DON'T HOVER ON ME DIV

$('#hoverGuy').hover(hover1);

function hover1() {
    $('#hoverGuy p').html('I said don\'t hover on me!');
}
// END DON'T HOVER ON ME DIV
// KEYLISTENER STUFF BELOW

document.addEventListener('keydown', function(e) {
    console.log(String.fromCharCode(e.keyCode));
    $('#keyLogger').append(String.fromCharCode(e.keyCode));
});

// END KEYLISTENER
// FORM VALIDATION BELOW
$('#validateForm').click(validate);

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
// END FORM VALIDATION
