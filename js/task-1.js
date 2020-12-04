
const showChildSelector = document.querySelectorAll('ul#categories > li.item');
console.log(`В списке ${showChildSelector.length} категории.`);
function showElementsCategories(array) {
    array.forEach((element) => console.log('Категория: ' + element.firstElementChild.textContent + '\nКоличество элементов: ' + element.lastElementChild.children.length));
}
showElementsCategories(showChildSelector)



