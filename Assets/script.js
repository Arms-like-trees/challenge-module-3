// Assignment Code
var generateBtn = document.querySelector("#generate");

var generateBtn = document.querySelector("#generate");

var alphaLowerCase = 'abcdefghijklmnopqrstuvwxyz'.split(
  ''
)
var alphaUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
  ''
  )
var listOfNumbers = '0123456789'.split(
    ''
)

//function for gereratePassword

function gereratePassword(){
  //ask for length
  var length = prompt("How long would you like the password length(8-128)?")
  //validate that length is numeric 8-128

  //ask for lowercase
  var lowerCase = prompt("Do you want lowercase(Y/N)?" ) 
  //ask for uppercase
  var uppercase = prompt("Do you want uppercase?");
  //ask for numeric
  var numbers = prompt("Do you want numbers?");
  //ask for special criteria
  var specialCharacters = prompt("Do you want special characters?");
  //validate that atleast one of above four criteria (lowercase, uppercase, numeric, symbol).

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
