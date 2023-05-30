import { floorsPath } from './floors.js'
const btn = document.querySelector('#show-floor-btn')
const floorImg = document.querySelector('#floor-img')

btn.addEventListener('click', () => {
	let floor = document.querySelector('#show-floor select.floors').value
	changePath(floor)
})
function changePath(floorNumber) {
	floorImg.src = floorsPath[floorNumber].path
}
