// Assignment Code
lowerIndex = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
"r", "s", "t", "u", "v", "w", "x", "y", "z"];

upperIndex = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
"R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

numIndex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

spIndex = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "`", "|", "/", "(", ")",
"{", "}", "[", "]", ":", ";", "<", ">", ",", ".", "?"];

var criteria = {};

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  criteria = {
    length: prompt("Enter password length. (must be between 8 and 128 characters long)")
  }

  if (criteria.length < 8) {
    alert("The password must be at least 8 characters long.");
    return;
  } else if (criteria.length > 128) {
    alert("The password must not be over 128 characters long.")
    return;
  }
  criteria = {
    length: criteria.length,
    lowerCase: confirm("Include lowercase characters in the password?"),
    upperCase: confirm("Include uppercase characters in the password?"),
    numbers: confirm("Include numbers in the password?"),
    special: confirm("Include special characters in the password?")
  }
  
  if (criteria.lowerCase !== true && criteria.upperCase !== true && 
    criteria.numbers !== true && criteria.special !== true) {
      alert("At least one type of character needs to be selected.");
      return;
  }

  console.log(criteria);
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);