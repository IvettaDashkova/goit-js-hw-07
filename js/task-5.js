const inputNewName = document.querySelector('input#name-input');

const getName = document.querySelector('span#name-output');

const defoltName = getName.textContent;

const showName = () => {
	return event.target.value ? (getName.textContent = event.target.value) : (getName.textContent = defoltName)
}

inputNewName.addEventListener('input', showName);