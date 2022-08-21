// Assignment code here
function generatePassword() {
  while (true) {
    
    var userInput = window.prompt("How long do you want your password to be?")
        
    // If user canceled the prompt
    if (userInput === null) {
    return
    }
            
    var passwordLength = parseInt(userInput)
        
    if (isNaN(passwordLength)) {
    window.alert("That's not a number!")
    } else if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Invalid password length. Length should be between 8 and 128 characters.")
    } else {
    break
    }

}
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
