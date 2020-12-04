const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const parentsElement = document.querySelector('ul#ingredients');

const addElemenets = (array, parent) => array.forEach(element => {
    let addTagElements = document.createElement('li');
    addTagElements.textContent = element;
    parent.append(addTagElements);
});
addElemenets(ingredients, parentsElement);
console.log(parentsElement);

