// Assignment Code
var lowIndex = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
"r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upIndex = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
"R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numIndex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var spIndex = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "`", "|", "/", "(", ")",
"{", "}", "[", "]", ":", ";", "<", ">", ",", ".", "?"];

var typeIndex = ["lower", "upper", "number", "special"];

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    function generatePassword() {
        var pwdLength = prompt("Enter password length. (must be between 8 and 128 characters long)");
        if (pwdLength < 8) {
            alert("The password must be at least 8 characters long.");
            return;
        } else if (pwdLength > 128) {
            alert("The password must not be over 128 characters long.")
            return;
        } else if (!/\d/.test(pwdLength)) {
            alert("Password does not contain a number.");
            return;
        }
        var charTypes = [confirm("Include lowercase characters in the password?")];
        charTypes.push(confirm("Include uppercase characters in the password?"));
        charTypes.push(confirm("Include numbers in the password?"));
        charTypes.push(confirm("Include special characters in the password?"));
        if (charTypes[0] !== true && charTypes[1] !== true && 
            charTypes[2] !== true && charTypes[3] !== true) {
            alert("At least one type of character needs to be selected.");
            return;
        }
        for (var i = 3; i > -1; i--) {
            if (charTypes[i] == true) {
                charTypes[i] = typeIndex[i];
            } else {
                charTypes.splice(i, 1);
            }
        }
        
        var randomType;
        var randomChar;
        var protoPassword = "";
        for (var i = 0; i < pwdLength; i++) {
            randomType = Math.floor(Math.random() * charTypes.length);
            if (charTypes[randomType] == "lower") {
                randomChar = Math.floor(Math.random() * lowIndex.length);
                protoPassword += lowIndex[randomChar];
            } else if (charTypes[randomType] == "upper") {
                randomChar = Math.floor(Math.random() * upIndex.length);
                protoPassword += upIndex[randomChar];
            } else if (charTypes[randomType] == "number") {
                randomChar = Math.floor(Math.random() * numIndex.length);
                protoPassword += numIndex[randomChar];
            } else if (charTypes[randomType] == "special") {
                randomChar = Math.floor(Math.random() * spIndex.length);
                protoPassword += spIndex[randomChar];
            }
            
        }
        return protoPassword;
    }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
