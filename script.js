// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  var passwordPool =[]  
  var passwordLength = parseInt(prompt('How many characters would you like your password to be?'));

  if(passwordLength < 8 || passwordLength > 128) {
    alert('Password must be between 8 and 128 characters');
    return password='';
  }

  var confirmUsingSpecialCharacters = confirm('Would you like to include special characters?');
  if(confirmUsingSpecialCharacters){
    passwordPool = passwordPool.concat(specialCharacters);
  }
  var confirmUsingLowerCaseCharacters = confirm('Would you like to include lower case characters?');
  if(confirmUsingLowerCaseCharacters){
    passwordPool = passwordPool.concat(lowerCasedCharacters);
  }
  var confirmUsingUpperCaseCharacters = confirm('Would you like to include Upper Case characters?');
  if(confirmUsingUpperCaseCharacters){
    passwordPool = passwordPool.concat(upperCasedCharacters);
  }
  var confirmUsingNumericalCharacters = confirm('Would you like to include Numerical characters?');
  if(confirmUsingNumericalCharacters){
    passwordPool = passwordPool.concat(numericCharacters);
  }

  if(passwordPool.length === 0) {
alert('You must choose at least one character type');
return password='';
  }

  console.log(passwordPool);
  var password =''
  for(let i=0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random() * passwordPool.length);
    // 0.1*52=5.2 => 5
    var randomCharacter = passwordPool[randomIndex];
    //'e'
    password += randomCharacter;
    // password =e
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

