let searchAction = document.querySelector('#search-action')
let searchInputBox = document.querySelector('.search-header')
searchAction.addEventListener('click', toggleSearchClass)
function toggleSearchClass() {
	searchInputBox.classList.toggle('show')
}
