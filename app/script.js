import resolution from './resolution.js'
import { resetSize } from './selectRoad.js'
import { floors } from './floors.js'
import { fill } from './fill-select.js'
fill()
resolution()

const endEl = document.querySelector('.road-end')
const startEl = document.querySelector('.road-start')
const changeFloorBtn = document.querySelector('#floor-change')
const floorImg = document.querySelector('#floor-img')
const floorsPath = {
	1: {
		path: './floors/6-1.svg',
	},
	2: {
		path: './floors/6-2.svg',
	},
	3: {
		path: './floors/6-3.svg',
	},
	4: {
		path: './floors/6-4.svg',
	},
	5: {
		path: './floors/6-5.svg',
	},
}
let secondFloor = {
	floor: null,
	nearStaircase: null,
	to: null,
}
let nowFloor = null
const mainLineStyle = {
	w: 0.6,
	h: 1,
}
const pointsStyle = {
	x: {
		height: 1,
		width: 1.8,
	},
	y: {
		height: 2.5,
		width: 0.6,
	},
}

function draw(from, to) {
	console.log(from, to)
	let [sortedFrom, sortedTo] = [from, to].sort()
	nowFloor = getfloorNumber(from)
	setFloorImg(nowFloor)
	//==================================
	let startPoint = getPointInfo(sortedFrom)
	let endPoint = getPointInfo(sortedTo)
	let nearStaircase = getStaircase(startPoint, floors[nowFloor])

	if (getfloorNumber(sortedFrom) == getfloorNumber(sortedTo)) {
		drawStart(startPoint)
		drawMainLine(startPoint, endPoint, floors[nowFloor])
		drawEnd(endPoint)
	} else if (getfloorNumber(sortedFrom) != getfloorNumber(sortedTo)) {
		endPoint = getPointInfo(to)
		startPoint = getPointInfo(from)
		nearStaircase = getStaircase(startPoint, floors[nowFloor])
		drawStart(nearStaircase)
		drawMainLine(nearStaircase, startPoint, floors[nowFloor])
		drawEnd(startPoint)
		secondFloor.floor = getfloorNumber(to)
		secondFloor.nearStaircase = getStaircase(
			startPoint,
			floors[getfloorNumber(to)]
		)
		secondFloor.to = endPoint
		showChangeBtn()
	}
}
function drawStart(startPoint) {
	console.log(startPoint)
	setPosition(startEl, startPoint)
	setLineSize(startEl, startPoint)
}
function drawEnd(endPoint) {
	setPosition(endEl, endPoint)
	setLineSize(endEl, endPoint)
}
function getStaircase(setting, floor) {
	return floor.infoStaircase[setting.nearStaircase]
}
function drawMainLine(fromSetting, toSetting, floor) {
	if (fromSetting.mainLine == toSetting.mainLine) {
		let infoMainLine = floor.infoMainLine[fromSetting.mainLine]
		let mainLineEl = document.querySelector(infoMainLine.className)
		setPositionMainLine(mainLineEl, infoMainLine, fromSetting, toSetting)
		setSizeMainLine(mainLineEl, infoMainLine, fromSetting, toSetting)
	} else if (fromSetting.mainLine != toSetting.mainLine) {
		console.log(toSetting, fromSetting)
		let infoMainLine = floor.infoMainLine[fromSetting.mainLine]
		let infoMainLine2 = floor.infoMainLine[toSetting.mainLine]
		let infoMainLineEl = document.querySelector(infoMainLine.className)
		let infoMainLineEl2 = document.querySelector(infoMainLine2.className)
		let crossNumber = getSameCrossNumber(infoMainLine, infoMainLine2)
		let cross = getCross(crossNumber, floor)
		setPositionMainLine(infoMainLineEl, infoMainLine, fromSetting, cross)
		setSizeMainLine(infoMainLineEl, infoMainLine, fromSetting, cross)
		setPositionMainLine(infoMainLineEl2, infoMainLine2, toSetting, cross)
		setSizeMainLine(infoMainLineEl2, infoMainLine2, toSetting, cross)
	}
}
function getSameCrossNumber(infoMainLine, infoMainLine2) {
	return infoMainLine.cross
		.filter(el => infoMainLine2.cross.indexOf(el) > -1)
		.slice(0, 1)
}
function getCross(crossNumber, floor) {
	return floor.crossroads[crossNumber]
}
function setPositionMainLine(el, infoMainLine, fromSetting, toSetting) {
	if (infoMainLine.axis == 'x') {
		el.style.top = fromSetting.t + '%'
		el.style.left = Math.min(fromSetting.l, toSetting.l) + '%'
	} else if (infoMainLine.axis == 'y') {
		el.style.top = Math.min(fromSetting.t, toSetting.t) + '%'
		el.style.left = fromSetting.l + '%'
	}
}
function setSizeMainLine(el, infoMainLine, fromSetting, toSetting) {
	if (infoMainLine.axis == 'x') {
		el.style.width = `${
			Math.abs(fromSetting.l - toSetting.l) + pointsStyle.y.width
		}%`
		el.style.height = mainLineStyle.h + '%'
	} else if (infoMainLine.axis == 'y') {
		el.style.height = `${
			Math.abs(fromSetting.t - toSetting.t) + pointsStyle.x.height
		}%`
		el.style.width = mainLineStyle.w + '%'
	}
}

function getfloorNumber(cabinet) {
	return +(cabinet / 100).toFixed().slice(0, 1)
}
function getPointInfo(number) {
	let findFloor = getfloorNumber(number)
	return floors[findFloor].roads.find(road => road.k == number)
}
function setLineSize(el, setting) {
	if (setting.type == 't') {
		el.style.width = pointsStyle.y.width + '%'
		el.style.height = pointsStyle.y.height + '%'
		el.style.transform = `translateY(${-100}%)`
	} else if (setting.type == 'l') {
		el.style.width = pointsStyle.x.width + '%'
		el.style.height = pointsStyle.x.height + '%'
		el.style.transform = `translateX(${-100}%)`
	} else if (setting.type == 'b') {
		el.style.width = pointsStyle.y.width + '%'
		el.style.height = pointsStyle.y.height + '%'
		el.style.transform = `translateY(${0}%)`
	} else if (setting.type == 'r') {
		el.style.width = pointsStyle.x.width + '%'
		el.style.height = pointsStyle.x.height + '%'
		el.style.transform = `translateX(${0}%)`
	}
}
function setPosition(el, setting) {
	console.log()
	if (setting.type == 't') {
		el.style.top = setting.t + mainLineStyle.h + '%'
		el.style.left = setting.l + '%'
	} else if (setting.type == 'l') {
		el.style.top = setting.t + '%'
		el.style.left = setting.l + mainLineStyle.w + '%'
	} else if (setting.type == 'b') {
		el.style.top = setting.t + '%'
		el.style.left = setting.l + '%'
	} else if (setting.type == 'r') {
		el.style.top = setting.t + '%'
		el.style.left = setting.l + '%'
	}
}
function showChangeBtn() {
	changeFloorBtn.classList.add('show')
}
function setFloorImg(floorNumber) {
	floorImg.src = floorsPath[floorNumber].path
}
function hideChangeBtn() {
	changeFloorBtn.classList.remove('show')
}
// changeFloorBtn.addEventListener(click)
function changePath(floorNumber) {
	floorImg.src = floorsPath[floorNumber].path
}
changeFloorBtn.addEventListener('click', () => {
	resetSize()
	changePath(secondFloor.floor)
	drawStart(secondFloor.nearStaircase)
	console.log(secondFloor)
	drawMainLine(
		secondFloor.nearStaircase,
		secondFloor.to,
		floors[secondFloor.floor]
	)
	drawEnd(secondFloor.to)
	hideChangeBtn()
})
export { draw }
