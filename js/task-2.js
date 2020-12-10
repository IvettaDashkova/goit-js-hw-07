const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"]

const parentsElement = document.querySelector("ul#ingredients")

function addItem(array, parent) {
	const shapeElements = array.map(element => {
		let addTagElement = document.createElement("li")
		addTagElement.textContent = element
		return addTagElement
	})
	parent.append(...shapeElements)
}
addItem(ingredients, parentsElement)
