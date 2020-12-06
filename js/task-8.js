const btnCreateDivs = document.querySelector('button[data-action="render"]')

const btnDeleteDivs = document.querySelector('button[data-action="destroy"]')

const input = document.querySelector("div#controls > input")

const box = document.querySelector("div#boxes")

let amount = 0
let width = 20
let height = 20
let color

// колл-бэки

function createBoxes(amount) {
    amount = +input.value;
    for (let i = 0; i < amount; i += 1) {
        width += 10
        height += 10

		const tagDiv = document.createElement("div")
		tagDiv.style.backgroundColor = `#${backgroundColorRandom()}`
		tagDiv.style.width = `${width}px`
		tagDiv.style.height = `${height}px`
		box.append(tagDiv)
	}
	return
}
function destroyBoxes() {
	box.textContent = ""
	input.value = 0
	width = 20
	height = 20
	return
}
function backgroundColorRandom() {
	color = Math.round(255.0 * Math.random())
	let r = color.toString(16)
	color = Math.round(255.0 * Math.random())
	let g = color.toString(16)
	color = Math.round(255.0 * Math.random())
	let b = color.toString(16)
	color = r + g + b
	return color
}
// слушатели
btnCreateDivs.addEventListener("click", () => createBoxes())
btnDeleteDivs.addEventListener("click", destroyBoxes)
