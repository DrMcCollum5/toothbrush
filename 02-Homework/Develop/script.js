// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log()
}

// DOM elements
const resultEL = document




// Objects
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};


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
   const symbol = '!@#$%^&*(){}=<>/,.';
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
