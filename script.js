document.addEventListener('DOMContentLoaded', function () {
    var passwordField = document.querySelector("#password-field");
    var copyGeneratedPasswordBtn = (document.querySelector("#copyBtn"));
    var generateRandomPasswordBtn = (document.querySelector("#generate-password-btn"));
    var passwordLenght = 12; //kept let not const for future length changing purposes
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "1234567890";
    var specialCharacters = "!@#$%^&*()_+<>/";
    var allCharacters = upperCase + specialCharacters + numbers + lowerCase;
    function generateRandomPassword() {
        var password = "";
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        while (passwordLenght > password.length) {
            password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
        }
        passwordField.value = password;
    }
    generateRandomPasswordBtn === null || generateRandomPasswordBtn === void 0 ? void 0 : generateRandomPasswordBtn.addEventListener('click', generateRandomPassword);
    copyGeneratedPasswordBtn === null || copyGeneratedPasswordBtn === void 0 ? void 0 : copyGeneratedPasswordBtn.addEventListener('click', function () {
        if (!passwordField.value) {
            alert("No Password Was Generated");
            return;
        }
        else {
            navigator.clipboard.writeText(passwordField.value);
            alert("Password is Copied To Clipboard");
            passwordField.value = "";
        }
    });
});
