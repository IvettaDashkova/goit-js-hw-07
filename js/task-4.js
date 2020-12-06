const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counterTag = document.querySelector('span#value');
counterTag.textContent = 0;


const decrement = () => {
    counterTag.textContent -= 1;
    console.log(counterTag);
    return counterTag.textContent;
}

const increment = () => {
    counterTag.textContent = +(counterTag.textContent) + 1;
    console.log(counterTag);
    return (counterTag.textContent);
}

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);


