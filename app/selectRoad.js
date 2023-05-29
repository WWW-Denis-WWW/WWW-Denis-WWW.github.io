import { draw } from './script.js'
// select path api
const createBtn = document.querySelector('#create-road')
let startK, endK, selectStartValue, selectEndValue
const endEl = document.querySelector('.road-end')
const startEl = document.querySelector('.road-start')
const mainLines = [
	document.querySelector('.road__main .road1'),
	document.querySelector('.road__main .road2'),
	document.querySelector('.road__main .road3'),
]

createBtn.addEventListener('click', e => {
	e.preventDefault()
	selectStartValue = document.querySelector('#select-start').value
	selectEndValue = document.querySelector('#select-end').value
	if (selectStartValue === selectEndValue) {
		alert('А так нельзя')
		return
	} else {
		resetSize()
		startK = selectStartValue
		endK = selectEndValue
		draw(+startK, +endK)
	}
})
function resetSize() {
	endEl.style.height = '0%'
	startEl.style.height = '0%'
	mainLines.forEach(line => {
		line.style.width = `0%`
	})
}
export { resetSize }
