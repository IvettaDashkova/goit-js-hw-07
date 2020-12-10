const runner = document.querySelector('input#font-size-control');
const dynamicText = document.querySelector('span#text');
dynamicText.style.fontSize = `${runner.value}px`

const changeRunner = () => {
    dynamicText.style.fontSize = `${runner.value}px`;
}

runner.addEventListener('input', changeRunner);
