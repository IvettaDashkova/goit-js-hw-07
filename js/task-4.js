const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counterTag = document.querySelector('span#value');

const decrement = () => {
    counterTag.textContent -= 1;
}

const increment = () => {
    counterTag.textContent = +(counterTag.textContent) + 1;
}

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);


