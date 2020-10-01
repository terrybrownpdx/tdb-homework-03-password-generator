//declare criteria variables as arrays
var length = 8-128;
var characterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var characterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characterNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var characterSpecial =  ["!,", "#", "$", "%", "&", "'", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", ", "{", "|", "}", "~","]", "^", "_"];



// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword () {


//declare variables that will take inputs - wrap inside function


var userlength = prompt("How many characters would you like, between 8-128?");
var usercharacterLower = confirm("Do you want Lower case letters?");
var usercharacterUpper = confirm("Do you want Upper case letters?");
var usercharacterNumber = confirm("Do you want Numbers?");
var usercharacterSpecial = confirm("Do you want Special characters?");
  console.log(length);
  console.log(characterLower);
  console.log(characterNumber);
  console.log(characterSpecial);


function length() {
  var userlength = prompt("How many characters would you like, between 8-128?");
  console.log(userlength);
}


if (characterLower){
  alert("You want lower case");
}
else {
  alert ();

}

if (characterUpper){
  alert
}
else {
  alert
}

if (characterNumber){
  alert
}
else {
  alert
}

if (characterSpecial){
  alert
}
else {
  alert
}

//evaluations of if input is correct
\

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  length();

  passwordText.value = password;

  prompt(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
