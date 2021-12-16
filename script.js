// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ["0", "1", "2"]

// DOM elements
//const resultEL = document;



// Function user input

function userInput() {
  var passwordLength = prompt(
    "How long do you want your password, must be between 8 and 128 characters."
  );
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert ("Password must between 8 and 128 characters");
    return;
  }
  var passwordLower = confirm ("Do you want your password to have lowercase characters")
  var passwordUpper = confirm ("Do you want your password to have uppercase characters")
  var passwordSymbol = confirm ("Do you want your password to have symbol characters")
  var passwordNumber = confirm ("Do you want your password to have number characters")

  if (passwordLower=== false && passwordUpper === false && passwordSymbol === false && passwordNumber=== false) {
    alert ("Must choose at least one out of 4 character types");
    return
  }

  var userChoices = {
    passwordLength: passwordLength,
    passwordLower: passwordLower,
    passwordUpper: passwordUpper,
    passwordSymbol: passwordSymbol,
    passwordNumber: passwordNumber
  }

  return userChoices;


}




// Objects
// const randomFunc = {
//   lower: getRandomLower,
//   upper: getRandomUpper,
//   number: getRandomNumber,
//   symbol: getRandomSymbol,
// };

function generatePassword() {
  var pwChoices = userInput();

  var result = [];
  var allUserCharacters = [];
  var mustUseOne = [];


  //4 if statements - onbe for each character type

  if(pwChoices.passwordLower) {
    //concat arrays to have all options
    // push one random to mustUseOne array
  }

  

}

// Generator functions- http://www.net-comber.com/charset.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbol = "!@#$%^&*(){}=<>/,.";
  return symbol[Math.floor(Math.random() * symbol.length)];
}

console.log(getRandomNumber());
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomSymbol());

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
