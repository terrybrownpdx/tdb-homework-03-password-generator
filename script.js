// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword () {

//declare variables that will take inputs 
var length = prompt("How many characters would you like?");
var characterLower = confirm("Do you want Lower case letters?");
var characterUpper = confirm("Do you want Upper case letters?");
var characterNumber = confirm("Do you want Numbers?");
var characterSpecial = confirm("Do you want Special characters?");
//declare criteria variables as arrays
var length = 8-128;
var characterLower = ["a-z"];
var characterUpper = ["A-Z"];
var characterNumber = ["0-9"];
var characterSpecial =  ["!,", #, $, %, &, ', ', (, ), *, +, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, ~,"];

if (characterLower){
  alert
}
else {
  alert
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












}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  prompt(password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
