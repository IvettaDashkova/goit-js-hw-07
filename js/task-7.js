const runner = document.querySelector('input#font-size-control');
const dynamicText = document.querySelector('span#text');

const changeRunner = () => {
    dynamicText.style.fontSize = `${runner.value}px`;
}

runner.addEventListener('input', changeRunner);
