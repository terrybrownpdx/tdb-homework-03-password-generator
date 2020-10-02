//declare criteria variables as arrays
var length = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "123", "124", "125", "126", "127", "128"];
var characterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var characterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var characterNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var characterSpecial = ["!,", "#", "$", "%", "&", "'", "'", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", ", "{", "|", "}", "~", "]", "^", "_"];
//var lengthResult = result(userLength);
//var lowerResult = result(userCharacterLower);
//var upperResult = result(userCharacterUpper);
//var numberResult = result(userCharacterNumber);
//var specialResult = result(userCharacterSpecial);

//declare variables that will take inputs - wrap inside function
//evaluations of if input is correct
var userLength = prompt("How many characters would you like, between 8-128?");
alert("Your password will be " + userLength + " characters long");

var userCharacterLower = confirm("Do you want Lower case letters?");
if (userCharacterLower === true) {
  alert("Yes to lower case");
}
else if (userCharacterLower === false) {
  alert("No to lower case");
}
else {
  alert("Incorrect command.  Please try again");
}

var userCharacterUpper = confirm("Do you want Upper case letters?");
if (userCharacterUpper === true) {
  alert("Yes to upper case");
}
else if (userCharacterUpper === false) {
  alert("No to upper case");
}
else {
  alert("Incorrect command.  Please try again");
}

var userCharacterNumber = confirm("Do you want Numbers?");
if (userCharacterNumber === true) {
  alert("Yes to numbers");
}
else if (userCharacterNumber === false) {
  alert("No to numbers");
}
else {
  alert("Incorrect command.  Please try again");
}

var userCharacterSpecial = confirm("Do you want Special characters?");
if (userCharacterSpecial === true) {
  alert("Yes to special characters");
}
else if (userCharacterSpecial === false) {
  alert("No to special characters");
}
else {
  alert("Incorrect command.  Please try again");
}
//declare function
//function functionname (arr){ 
//for (var i = 0; i < arr.length; i++) {
//console.log(arr[i]);
//}
//console.log("......");
//}
function lengthResult(userLength) {
  return ("Your password will be" + userLength + "characters long");
}
var lengthResult = result(userLength);
console.log(result);


function lowerResult(userCharacterLower) {
  return (userCharacterLower);
}
var lowerResult = result(userCharacterLower);
console.log(result);


function upperResult(userCharacterUpper) {
  return (userCharacterUpper);
}
var upperResult = result(userCharacterUpper);
console.log(result);


function numberResult(userCharacterNumber) {
  return (userCharacterNumber);
}
var numberResult = result(userCharacterNumber);
console.log(result);


function specialResult(userCharacterSpecial) {
  return (userCharacterSpecial);
}
var specialResult = result(userCharacterSpecial);
console.log(result);





// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
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
