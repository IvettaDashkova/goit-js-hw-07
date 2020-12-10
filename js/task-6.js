const newText = document.querySelector("input#validation-input")

const validationText = () => {
    
	if (newText.value.length !== +newText.getAttribute("data-length")) {
		newText.classList.add("invalid")
        newText.classList.remove("valid")
	} else {
		newText.classList.add("valid")
        newText.classList.remove("invalid")
 
    } 
}


newText.addEventListener("change", validationText)
