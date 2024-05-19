const d = document,
	  inputFN = d.querySelector("#first_name"),
	  inputLN = d.querySelector("#last_name"),
	  inputEmail = d.querySelector("#email"),
	  inputPassword = d.querySelector("#password"),
	  errorFN = d.querySelector("#fn_error"),
	  errorLN = d.querySelector("#ln_error"),
	  errorEmail = d.querySelector("#email_error"),
	  errorPassword = d.querySelector("#password_error"),
	  iconFN = d.querySelector("#fn-icon_error"),
	  iconLN = d.querySelector("#ln-icon_error"),
	  iconEmail = d.querySelector("#email-icon_error"),
	  iconPassword = d.querySelector("#password-icon_error");

console.log(errorFN);

d.addEventListener("input", (e) => {

	if(e.target === inputFN) {
		if(e.target.value.length < 1) {
			inputFN.style.borderColor = "var(--red)"
			errorFN.style.display = "block";
			iconFN.style.display = "flex";
		} else {
			inputFN.style.borderColor = "#ddd"
			errorFN.style.display = "none";
			iconFN.style.display = "none";
		}
		
	}
	if(e.target === inputLN) {
		console.log(e.target.value.length)
		if(e.target.value.length < 1) {
			inputLN.style.borderColor = "var(--red)"
			errorLN.style.display = "block";
			iconLN.style.display = "flex";
		} else {
			inputLN.style.borderColor = "#ddd"
			errorLN.style.display = "none";
			iconLN.style.display = "none";
		}
		
	}
	if(e.target === inputEmail) {
		if(e.target.value.length < 1) {
			inputEmail.style.borderColor = "var(--red)"
			errorEmail.style.display = "block";
			iconEmail.style.display = "flex";
			inputEmail.placeholder = "email@example.com";
			inputEmail.classList.add("invalid");
		} else {
			inputEmail.style.borderColor = "#ddd"
			errorEmail.style.display = "none";
			iconEmail.style.display = "none";
		}
		
	}
	if(e.target === inputPassword) {
		if(e.target.value.length < 1) {
			inputPassword.style.borderColor = "var(--red)";
			errorPassword.style.display = "block";
			iconPassword.style.display = "flex";
		} else {
			inputPassword.style.borderColor = "#ddd"
			errorPassword.style.display = "none";
			iconPassword.style.display = "none";
		}
		
	}
})

	  
