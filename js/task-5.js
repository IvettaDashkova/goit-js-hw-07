const newName = document.querySelector('input#name-input');

const oldName = document.querySelector('span#name-output');

const showName = () => {
  const res = newName.value ?  oldName.textContent = newName.value : oldName.textContent = 'незнакомец';
}

newName.addEventListener('input', showName);