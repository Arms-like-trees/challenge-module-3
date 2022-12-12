// Assignment Code

//Global variables and arrays for each criteria
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
var specialCharacters = ['"', "'", "!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
var length ;
//function to gather user inputs
function passwordOptions (){
  //ask for length
  length = parseInt(prompt("How long would you like the password length(8-128)?"))
 
 //validate that length is a number 8-128
   if (length < 8 || length > 128 )
   {length = parseInt(alert("You must choose between 8 and 128"))
   return passwordOptions();}
   // The isNan kicks back if user inputs characters that are not numeric
   if (isNaN(length)){
    alert("You must choose a whole number between 8 and 128")
    return passwordOptions()
   }
   else (console.log)
   {console.log(length)

//ask for lowercase
var lowerCase = confirm("Click ok for lowercase characters." );
 //ask for uppercase
 var upperCase = confirm("Click ok for uppercase characters.");
 //ask for numeric
 var numbers = confirm("Click ok for numeric characters.");
 //ask for special criteria
 var specialCharacters = confirm("Click ok for special characters.");
   
}



// consolidates user options into single array
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
//made function that creates less code to written using the Math.floor and the Mathh.random
function randomWholeNumber (arr){
  var randomIndex = Math.floor(Math.random()* arr.length);
  var randomElement = arr[randomIndex];
  return randomElement
}


function generatePassword(){
  var optionsChoosen = passwordOptions()
  //The following three are empty arrays to have any true boolean response populate the character options
  var possibleCharacters = []
  var promisedCharacters = []
  var finalPassword = []
  //if lowerCase comes back as the Boolean value of true it adds the alphaLowerCase charaters to above empty array using concat and push
  if (optionsChoosen.lowerCase){
    possibleCharacters = possibleCharacters.concat(alphaLowerCase);
    promisedCharacters.push(randomWholeNumber(alphaLowerCase))
  } if (optionsChoosen.upperCase){
  //  if upperCase comes back as the Boolean value of true it adds the alphaUpperCase charaters to above empty array using concat and push
    possibleCharacters = possibleCharacters.concat(alphaUpperCase);
    promisedCharacters.push(randomWholeNumber(alphaUpperCase))
  } if (optionsChoosen.numbers){
    //  if numbers comes back as the Boolean value of true it adds the listOfNumbers charaters to above empty array using concat and push
    possibleCharacters = possibleCharacters.concat(listOfNumbers);
    promisedCharacters.push(randomWholeNumber(listOfNumbers))
  } if (optionsChoosen.specialCharacters){
     //  if specialCharacter comes back as the Boolean value of true it adds the spcialCharacters charaters to above empty array using concat and push
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    promisedCharacters.push(randomWholeNumber(specialCharacters))
  }
console.log(possibleCharacters)
console.log(promisedCharacters)

 for (var i=0; i < optionsChoosen.length; i++){
  var possibleCharacter = randomWholeNumber(possibleCharacters);
  finalPassword.push(possibleCharacter)
 }
 for (var i=0; i < promisedCharacters.length; i++){
  finalPassword[i] = promisedCharacters [i]
 }
  return finalPassword.join("")
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




//variable array and function to get random character for each specified group what they would have looked like before the above simplifed function
function getRandomLower () {
return alphaLowerCase[(Math.floor(Math.random() * 26))]
}
var alphaLowerCase = 'abcdefghijklmnopqrstuvwxyz'.split(
  ''
)  

function getRandomUpper () {
  return alphaUpperCase[(Math.floor(Math.random() * 26))]
  }
var alphaUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
  ''
)

function getRandomNumber () {
  return listOfNumbers[(Math.floor(Math.random() * 10))]
  }
var listOfNumbers = '0123456789'.split(
  ''
)