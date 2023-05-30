import { frames, floorsForFrames, cabinetsForFloors } from './info.js'

let allSelectFrames = Array.from(document.querySelectorAll('select.frame'))
let allSelectFloors = Array.from(document.querySelectorAll('select.floors'))
let allSelectCabinets = Array.from(document.querySelectorAll('select.cabinets'))
function fillSelectFrame(select) {
	select.appendChild(createOption('Корпус', true))
	frames.forEach(frame => {
		select.appendChild(createOption(frame))
	})
}
function fillSelectFloor(select) {
	select.appendChild(createOption('Этаж', true))
	floorsForFrames[6].forEach(frame => {
		select.appendChild(createOption(frame))
	})
}
function fillSelectCabinet(select) {
	select.appendChild(createOption('Кабинет', true))
	cabinetsForFloors[1].forEach(frame => {
		select.appendChild(createOption(frame))
	})
	cabinetsForFloors[2].forEach(frame => {
		select.appendChild(createOption(frame))
	})
}
function createOption(optionSetting, defaultOption = false) {
	let option = document.createElement('option')
	if (defaultOption) {
		option.disabled = true
		option.selected = true
	}
	if (typeof optionSetting != 'object') {
		option.value = optionSetting
		option.innerText = optionSetting
	} else {
		option.value = optionSetting.value
		option.innerText = optionSetting.text
	}
	return option
}
function fill() {
	allSelectFrames.forEach(select => {
		fillSelectFrame(select)
	})
	allSelectFloors.forEach(select => {
		fillSelectFloor(select)
	})
	allSelectCabinets.forEach(select => {
		fillSelectCabinet(select)
	})
}
export { fill }
