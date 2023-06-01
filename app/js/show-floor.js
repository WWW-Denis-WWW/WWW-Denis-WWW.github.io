import { floorsPath } from './data/floors.js'
import { resetSize } from './selectRoad.js'
import { hideChangeBtns } from './script.js'
const btn = document.querySelector('#show-floor-btn')
const floorImg = document.querySelector('#floor-img')

btn.addEventListener('click', e => {
	e.preventDefault()
	let floor = document.querySelector('#show-floor select.floors').value
	resetSize()
	hideChangeBtns()
	changePath(floor)
})
function changePath(floorNumber) {
	let path = floorsPath[floorNumber]?.path
	if (path) {
		floorImg.src = path
	} else {
		alert('Нет такого этажа')
	}
}
export { changePath }
