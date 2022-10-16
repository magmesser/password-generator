// Password Generator will provide a randomly generated password of symbols, letters, numbers, and length as determined by the user. 

// Password Character Options Arrays
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbol = ['!', '@', '#', '$', '%', '^', '&', '*'];

// User Select Options
var selectLength = "";
var selectLower;
var selectUpper;
var selectNumber;
var selectSymbol;
var selected;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate password
function generatePassword() {
    selectLength = (prompt("Please advise of number of characters between 8 and 128 characters desired for password ."));    

    if (selectLength < 8 || selectLength > 128) {
        selectLength = alert("Password cannot be less than 8 characters or more than 128 characters. Please enter a value between 8 and 128.");
        return;
    }
    else {
        selectLower = confirm("Would you like to use lower case letters?");
        selectUpper = confirm("Would you like to use upper case letters?");
        selectNumber = confirm("Would you like to use numbers?");
        selectSymbol = confirm("Would you like to use symbols?");
    };

    //4 of 4 categories selected
    if (selectLower && selectUpper && selectNumber && selectSymbol) {
        selected = lowerCase.concat(upperCase, number, symbol);
    }
    //3 of 4 categories selected
    else if (selectLower && selectUpper && selectNumber) {
        selected = lowerCase.concat(upperCase, number);
    }
    else if (selectLower && selectUpper && selectSymbol) {
        selected = lowerCase.concat(upperCase, symbol);
    }
    else if (selectLower && selectNumber && selectSymbol) {
        selected = lowerCase.concat(number, symbol);
    }
    else if (selectUpper && selectNumber && selectSymbol) {
        selected = upperCase.concat(number, symbol);
    }

    //2 of 4 categories selected
    else if (selectLower && selectUpper) {
        selected = lowerCase.concat(upperCase);
    }
    else if (selectLower && selectNumber) {
        selected = lowerCase.concat(number);
    }
    else if (selectLower && selectSymbol) {
        selected = lowerCase.concat(symbol);
    }
    else if (selectUpper && selectNumber) {
        selected = upperCase.concat(number);
    }
    else if (selectUpper && selectSymbol) {
        selected = upperCase.concat(symbol);
    }
    else if (selectNumber && selectSymbol) {
        selected = number.concat(symbol);
    }

    //1 of 4 categories selected
    else if (selectLower) {
        selected = lowerCase;
    }
    else if (selectUpper) {
        selected = upperCase;
    }
    else if (selectNumber) {
        selected = number;
    }
    else if (selectSymbol) {
        selected = symbol;
    }

    //0 of 4 categories selected
    else { selected = alert("Please choose at least one category of characters."); }

    //Randomize
    var randomPassword = "";

    for (var i = 0; i < selectLength; i++) {
        randomPassword = randomPassword + selected[Math.floor(Math.random() * selected.length)];
    }
    return randomPassword;
};

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}