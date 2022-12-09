// Assignment Code

//Global variables
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
function passwordOptions (){
  //ask for length
  var length = parseInt(prompt("How long would you like the password length(8-128)?"))
 
 //validate that length is numeric 8-128
   if (8 <= length <= 128){console.log(length)
//ask for lowercase
var lowerCase = confirm("Click ok for lowercase characters." );
 //ask for uppercase
 var upperCase = confirm("Click ok for uppercase characters.");
 //ask for numeric
 var numbers = confirm("Click ok for numeric characters.");
 //ask for special criteria
 var specialCharacters = confirm("Click ok for special characters.");
   }


 //validate that atleast one of above four criteria (lowercase, uppercase, numeric, symbol).
 if (lowerCase || upperCase || numbers || specialCharacters){

 }
 var userOptions = 
 {
   length:length,
   lowerCase:lowerCase,
   upperCase:upperCase,
   numbers:numbers,
   specialCharacters:specialCharacters
 };
 return userOptions
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
