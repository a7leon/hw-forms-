

// note to self:<label  for = "" and <select name="" must match/correspond! 
//autofocus is a user feature to put the cursor in the input field ! use it, autofocus=enter info here
//REMEMBER COS THIS CONFUES YOU:  IN <input type="text" name="aName" id="someName" >, the name="" is for backend use.
//id=someName u will use to handle in js EEEEE!!!!REMEMBER

$(document).ready (function(){

$('form').submit(checkEverything);

function checkEverything (event){
		event.preventDefault();
		checkName();
		checkEmail();
		checkPhone();
		checkPlanet();
	}
		


		function checkName() {
			var namePresent = $('#name').val();
			console.log(namePresent);
			if (namePresent == false) {
				alert("Enter your name :)");

			}

		}

		function checkEmail() {
			var email = $('#email').val();
			if (email == false) {
				alert("Enter a valid email!");
			} 

		}


		function checkPhone() {
			var phone = $('#phone').val();
			if (phone.length == 10) {
			} else {
				alert("Enter phone number as shown");
			}
			//ps- I'm curious as to how it could be formatted so that the characters in phone numbers are automatically inserted using jscript? 
			//like this: when typing phone number in input box, the '()' and '-' of (xxx) xxx-xxxx show up, making above function unnecessary?
		
		}


});

