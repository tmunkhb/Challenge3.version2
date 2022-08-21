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
  //Criteria Prompts for lowercase, uppercase, number and symbols
  var getRandomLower = window.confirm("Would you like to include lowercase letters in your password?")
  var getRandomUpper = window.confirm("Would you like to include uppercase letters in your password?")
  var getRandomNumber = window.confirm("Would you like to include numbers in your password?")
  var getRandomSymbol = window.confirm("Would you like to include symbols in your password?")

  //Empty variable to be populated and called 
  var generatedPassword = ""
      
  //For loop    
  for (var i = 0; i < passwordLength; i++) {  
    var randomList = ""
    const symbols = '!@#$%^&*(){}[]=<>/,.?+-:;_'
    
  //if statement with random lowercase, uppercase, numbers, symbols  
    if (getRandomLower === true) {
        randomList += (String.fromCharCode(Math.floor(Math.random() * 26) + 97))
    }
    
    if (getRandomUpper === true) {
        randomList += (String.fromCharCode(Math.floor(Math.random() * 26) + 65))
    }
    
    if (getRandomNumber === true) {
      randomList += (String.fromCharCode(Math.floor(Math.random() * 10) + 48))
    }
    
    if (getRandomSymbol === true) {
      randomList += symbols[Math.floor(Math.random() * symbols.length)]
    }

    if (randomList.length === 0) {
      randomList += (String.fromCharCode(Math.floor(Math.random() * 26) + 97))
    }
    
    generatedPassword += randomList.charAt(Math.floor(Math.random()*randomList.length))

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
