const newText = document.querySelector('input#validation-input');

const validationText = () => {
    if (newText.value.length != newText.getAttribute('data-length')) {
        newText.classList.add("invalid");
    } else {
        newText.classList.replace("invalid", "valid");
    }
}
newText.addEventListener('change', validationText)