var addend1 = 5;
var addend2 = 10;

var sum = addend1 + addend2;

console.log(sum);

/* alert("The sum is " + sum);

var isItfifteen = confirm("Is the sum 15?");

sum = prompt("What is the sum?"); */

var age = prompt("How old are you?");

age = parseInt(age);

if (isNaN(age)){
	alert("BONED!!");
} else if (age < 200){
	alert("So young!!");
} else {
	alert("Methusela");
}