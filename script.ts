document.addEventListener('DOMContentLoaded', () => {

	const passwordField = (document.querySelector("#password-field") as HTMLInputElement);
	const copyGeneratedPasswordBtn = (document.querySelector("#copyBtn"));
	const generateRandomPasswordBtn = (document.querySelector("#generate-password-btn"));

	let passwordLenght = 12; //kept let not const for future length changing purposes
	const upperCase : string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const lowerCase : string = "abcdefghijklmnopqrstuvwxyz";
	const numbers : string = "1234567890";
	const specialCharacters : string = "!@#$%^&*()_+<>/";
	const allCharacters = upperCase + specialCharacters + numbers + lowerCase;

	function generateRandomPassword() : void {
		let password : string = "";
		password += upperCase[Math.floor(Math.random() * upperCase.length)];
		password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
		password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
		password += numbers[Math.floor(Math.random() * numbers.length)];

		while(passwordLenght > password.length) {
			password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
		}
		passwordField.value = password;
	}

	generateRandomPasswordBtn?.addEventListener('click' , generateRandomPassword);

	copyGeneratedPasswordBtn?.addEventListener('click' , () => {
		if(!passwordField.value) {
			alert("No Password Was Generated");
			return;
		} else {
			navigator.clipboard.writeText(passwordField.value);
			alert("Password is Copied To Clipboard");
			passwordField.value = "";
		}
	})






})