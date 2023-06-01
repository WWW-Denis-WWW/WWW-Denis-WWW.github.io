import { frames, floorsForFrames, cabinetsForFloors } from './data/info.js'

let allSelectFormBox = Array.from(document.querySelectorAll('.select-form'))
function getSelectsBlock(form) {
	return Array.from(form.querySelectorAll('.select-block'))
}
function initGroup(box) {
	let frame = box.querySelector('.frame'),
		floors = box.querySelector('.floors'),
		cabinets = box.querySelector('.cabinets')

	resetAndSetDefaultValue(frame, 'frame')
	fillFrame(frame)
	if (floors) resetAndSetDefaultValue(floors, 'floors')
	if (cabinets) resetAndSetDefaultValue(cabinets, 'cabinets')

	addListener(frame, floors, cabinets)
}
function fillFrame(frameSelect) {
	frames.forEach(frame => {
		frameSelect.appendChild(createOption(frame))
	})
}
function addListener(frame, floors, cabinets) {
	frame.addEventListener('change', () => {
		resetAndSetDefaultValue(floors, 'floors')
		floors.disabled = false
		fillFloors(frame.value, floors)
	})
	if (cabinets)
		floors.addEventListener('change', () => {
			resetAndSetDefaultValue(cabinets, 'cabinets')
			cabinets.disabled = false
			fillCabinets(floors.value, cabinets)
		})
}
function resetAndSetDefaultValue(select, type) {
	if (type == 'frame') {
		select.innerHTML = ''
		select.appendChild(createOption('Корпус', true, true))
	} else if (type == 'floors') {
		select.innerHTML = ''
		select.appendChild(createOption('Этаж', true, true))
		select.disabled = true
	} else if (type == 'cabinets') {
		select.innerHTML = ''
		select.appendChild(createOption('Кабинет', true, true))
		select.disabled = true
	}
}
function fillFloors(frameValue, floorsSelect) {
	floorsForFrames[frameValue].forEach(floor => {
		floorsSelect.appendChild(createOption(floor))
	})
}
function fillCabinets(floorsValue, cabinetsSelect) {
	cabinetsForFloors[floorsValue].forEach(cabinet => {
		cabinetsSelect.appendChild(createOption(cabinet))
	})
}
function createOption(optionValue, disabled, selected) {
	let option = document.createElement('option')
	if (optionValue.toString() != '[object Object]') {
		option.value = optionValue
		option.innerText = optionValue
	} else {
		option.value = optionValue.value
		option.innerText = optionValue.text
	}
	if (disabled) option.disabled = true
	if (selected) option.selected = true
	return option
}
function fillAllSelectBlock(allSelectBlock) {
	allSelectBlock.forEach(selectBlock => {
		initGroup(selectBlock)
	})
}
function fill() {
	allSelectFormBox.forEach(form => {
		let allSelectBlock = getSelectsBlock(form)
		fillAllSelectBlock(allSelectBlock)
	})
}

export { fill }
