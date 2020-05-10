var generatePassword = function() 
{
  var randomString = "";
  var specialChar = " !@#$%^&*()_+'?~+[]{} ";
  var number = " 0123456789 ";
  var lowerAlpha = " abcdefghijklmnopqrstuvwxyz ";
  var upperAlpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  // Ask th user to pick a lenght for the password between 8 to 128
  var passwordLength = parseInt(window.prompt("Please select the desired length of the password. It should be between 8 to 128."));
  //console.log(passwordLength)
  //const randomFunc = [specialChar, number, lowerAlpha, upperAlpha];
  //console.log(randomFunc);
  var passwordString = "";

  //check if the length of the password is long enough
  if (passwordLength >= 8 && passwordLength < 128) {
    // ask th user if they want to have special characters
    var useSpecialChar = (window.prompt("Do you wish to include special characters in your password? Type yes or y to confirm.")).toLowerCase();
    //if yes
    if(useSpecialChar === "yes" || useSpecialChar === "y") {
      randomString = randomString + specialChar;
      console.log(randomString);
    }

    //ask the user if they want to have numbers 
    var useNumber = (window.prompt("do you wish to include Numbers in your password?Type yes or y to confirm.")).toLowerCase();
    //if yes
    if (useNumber === "yes" || useNumber === "y") {
      randomString = randomString + number;
      console.log(randomString);
    }

    //ask the user if they want to have lower case alphabets
    var useLowerBets = (window.prompt("Do you wish to include lower case alphabets in your password?Type yes or y to confirm.")).toLowerCase();
    //if yes
    if (useLowerBets === "yes" || useLowerBets === "y") {
      randomString = randomString + lowerAlpha;
      console.log (randomString);
    }

    //ask the user if they want to have upper case alphabets
    var useUpperBets = (window.prompt("Do you wish to include Upper case alphabets in your password?Type yes or y to confirm.")).toLowerCase();
    //if yes
    if (useUpperBets === "yes" || useUpperBets === "y") {
      randomString = randomString + upperAlpha;
      console.log (randomString);
    } 
  } 
  else {
    window.alert ( " Your Password does not meet the basic requirements. Please Try Again");
  }
  
  const typesCount = useSpecialChar + useLowerBets +useUpperBets + useNumber;
  //console.log('typesCount:', typesCount);
  //const typesArr = [useSpecialChar, useLowerBets, useUpperBets, useNumber].filter (item => Object.values(item[0]));
  //console.log('typesArr:', typesArr);

  if (typesCount === 0){
   return '';
  }
     //generate random password based on the characters the user picked
    for (var i = 0; i < passwordLength; i++){
      passwordString += randomString.charAt(Math.floor(Math.random() * randomString.length));
    }
      //return passwordString;
      const finalPassword = passwordString;//.slice(0, passwordLength);
      console.log(finalPassword);
      return finalPassword;
    
    //document.getElementById("password").value = finalPassword;  
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