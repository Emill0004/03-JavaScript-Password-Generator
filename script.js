// Assignment Code
// The four following variables are arrays containing each character, sorted by type, that could be used in the final password.
var lowArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
"r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
"R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var spArray = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "=", "`", "|", "/", "(", ")",
"{", "}", "[", "]", ":", ";", "<", ">", ",", ".", "?"];
// This array is later used to convert the boolean values in the charTypes array to strings that I can more easily use when choosing the type of a character with a random number.
var typeArray = ["lower", "upper", "number", "special"];

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
    function generatePassword() {
        // This variable gets it's value by prompting the user with a text box and will be used to determine the length of the generated password.
        var pwdLength = prompt("Enter password length. (must be between 8 and 128 characters long)");
        // This if statetment displays an alert to the user if they input text that doesnt follow the parameters given in the initial prompt, and uses 'return;' to stop the entire function.
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
        // These next four lines declare the array charTypes with a boolean value set by the user, and then uses .push to add 3 more user given boolean objects to the array.
        var charTypes = [confirm("Include lowercase characters in the password?")];
        charTypes.push(confirm("Include uppercase characters in the password?"));
        charTypes.push(confirm("Include numbers in the password?"));
        charTypes.push(confirm("Include special characters in the password?"));
        // This if statement displays an alert if all the boolean values are false and stops the function with 'return;'
        if (charTypes[0] !== true && charTypes[1] !== true && 
            charTypes[2] !== true && charTypes[3] !== true) {
            alert("At least one type of character needs to be selected.");
            return;
        }
        // This for loop with a nested if statement decrements through each object in charTypes and changes it to the corresponding string (taken from typeArray) if true, otherwise it removes the object from the array.
        for (var i = 3; i > -1; i--) {
            if (charTypes[i] == true) {
                charTypes[i] = typeArray[i];
            } else {
                charTypes.splice(i, 1);
            }
        }
        // The next three lines declare variables that are used in the following for loop.
        var randomType;
        var randomChar;
        var protoPassword = "";
        // This for loop uses pwdLength to determine how many times it repeats.
        for (var i = 0; i < pwdLength; i++) {
            // This line sets randomType to a randomly generated number from 0 to the number of objects in charTypes.
            randomType = Math.floor(Math.random() * charTypes.length);
            // These if statements use randomType to index charTypes and see what value is stored in the given object.
            //When one of the given conditions is finally met, randomChar is set to a random number between 0 and the number of objects in the given array, and uses randomChar to index the array and concatenate the specified object to protoPassword.
            if (charTypes[randomType] == "lower") {
                randomChar = Math.floor(Math.random() * lowArray.length);
                protoPassword += lowArray[randomChar];
            } else if (charTypes[randomType] == "upper") {
                randomChar = Math.floor(Math.random() * upArray.length);
                protoPassword += upArray[randomChar];
            } else if (charTypes[randomType] == "number") {
                randomChar = Math.floor(Math.random() * numArray.length);
                protoPassword += numArray[randomChar];
            } else if (charTypes[randomType] == "special") {
                randomChar = Math.floor(Math.random() * spArray.length);
                protoPassword += spArray[randomChar];
            }
        }
        // Finally, protoPassword is returned so password (who's value is set to generatePassword()) is able to display the newly generated password in the text box above the generate password button.
        return protoPassword;
    }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
