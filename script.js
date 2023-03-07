// Assignment Code
// These four indexes contain all of the characters that the random number generator will pick to use in the password.
lowIndex = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
"r", "s", "t", "u", "v", "w", "x", "y", "z"];

upIndex = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
"R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

numIndex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

spIndex = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "`", "|", "/", "(", ")",
"{", "}", "[", "]", ":", ";", "<", ">", ",", ".", "?"];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // This declares the varible criteria that will hold the various conditions the password needs to meet.
  var criteria = {
    length: prompt("Enter password length. (must be between 8 and 128 characters long)")
  }

  // This if statement checks if criteria.length is between 8 and 128 characters long and stops the function generatePassword
  // if criteria.length is smaller than 8 or bigger than 128.
  if (criteria.length < 8) {
    alert("The password must be at least 8 characters long.");
    return;
  } else if (criteria.length > 128) {
    alert("The password must not be over 128 characters long.")
    return;
  }
  // The reason I didn't get all the values from the user in one block of code is because they will have to set all the values before the code
  // will check if anything is wrong, this way the program will give the user an error immediately after a wrong length value is input.

  // This sets the rest of the values after criteria.length has been checked. 
    criteria = {
    length: criteria.length,
    lowerCase: confirm("Include lowercase characters in the password?"),
    upperCase: confirm("Include uppercase characters in the password?"),
    numbers: confirm("Include numbers in the password?"),
    special: confirm("Include special characters in the password?")
  }
  
  // This if statement gives the user an error if none of the character types are set to true.
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