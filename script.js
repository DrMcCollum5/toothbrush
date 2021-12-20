// Assignment Code
var generateBtn = document.querySelector("#generate");


var Symbol = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerABC = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperABC = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// DOM elements
//const resultEL = document;

// Function user input

function userInput() {
  var passwordLength = prompt(
    "How long do you want your password, must be between 8 and 128 characters."
  );
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must between 8 and 128 characters");
    return;
  }
  var passwordLower = confirm(
    "Do you want your password to have lowercase characters"
  );
  var passwordUpper = confirm(
    "Do you want your password to have uppercase characters"
  );
  var passwordSymbol = confirm(
    "Do you want your password to have symbol characters"
  );
  var passwordNumber = confirm(
    "Do you want your password to have number characters"
  );

  if (
    passwordLower === false &&
    passwordUpper === false &&
    passwordSymbol === false &&
    passwordNumber === false
  ) {
    alert("Must choose at least one out of 4 character types");
    return;
  }

  var userChoices = {
    passwordLength: passwordLength,
    passwordLower: passwordLower,
    passwordUpper: passwordUpper,
    passwordSymbol: passwordSymbol,
    passwordNumber: passwordNumber,
  };

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

  if (pwChoices.passwordLower) {
    allUserCharacters = allUserCharacters.concat(lowerABC);
    //concat arrays to have all options
    // push one random to mustUseOne array
    mustUseOne.push(getRandomLower())
  }

  if (pwChoices.passwordUpper) {
    allUserCharacters = allUserCharacters.concat(upperABC);
    mustUseOne.push(getRandomUpper())
  }

  if (pwChoices.passwordNumber) {
    allUserCharacters = allUserCharacters.concat(numbers);
    mustUseOne.push(getRandomNumber())
  }
  if (pwChoices.passwordSymbol) {
    allUserCharacters = allUserCharacters.concat(Symbol);
    mustUseOne.push(getRandomSymbol())
  }
 
  for (var i= 0; i < pwChoices.passwordLength; i++) {
    var userCharacter = randomize(allUserCharacters);
    result.push(userCharacter);
  };

  for (var i= 0; i < mustUseOne.length; i++) {
    result[i] = mustUseOne[i]
  };

  console.log ("result: ", result)

  return result.join("");

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

function randomize(array) {
  var index = Math.floor(Math.random() * array.length);
  var randomCharacter = array[index];
  return randomCharacter;
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
