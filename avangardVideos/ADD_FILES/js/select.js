let filters            = Array.from(document.querySelectorAll('.select-filter'))
let options            = Array.from(document.querySelectorAll('.select-filter__option'))
let selectFilterValues = Array.from(document.querySelectorAll('.select-filter__value'))

function setSelectedValue() {
    filters.forEach(filter => {
        let options             = Array.from(filter.querySelectorAll('.select-filter__option'))
        let selectedOption      = getSelectedOptionValue(options).textContent
        let filterValue         = filter.querySelector('.select-filter__value')
        filterValue.textContent = selectedOption
    })
}

function addOptionsHandler() {
    options.forEach(option => {
        setOptionHandler(option)
    })
}

function addFilterValuesHandler() {
    selectFilterValues.forEach(filterValue => {
        setFilterValueHandler(filterValue)
    })
}

function setOptionHandler(option) {
    option.addEventListener('click', () => {
        if (option.classList.contains('selected')) return
        removeSelectedOptionForList(option)
        option.classList.add('selected')
        setSelectedValue()
        hideSelect(option)
    })
}

function setFilterValueHandler(filterValue) {
    filterValue.addEventListener('click', () => {
        let filter = filterValue.closest('.select-filter')
        if (filter.classList.contains('show')) {
            filter.classList.remove('show')
        } else {
            removeAllShowClassFilter()
            filter.classList.add('show')
        }


    })
}

function removeAllShowClassFilter() {
    filters.forEach(el => el.classList.remove('show'))
}


function hideSelect(option) {
    let filter = option.closest('.select-filter')
    filter.classList.remove('show')
}

function removeSelectedOptionForList(option) {
    let allOption = option.closest('.select-filter__options').querySelectorAll('.select-filter__option')
    console.log(allOption)
    allOption.forEach(option => option.classList.remove('selected'))
}

function getSelectedOptionValue(optionList) {
    return optionList.find(option => option.classList.contains('selected'))
}

setSelectedValue()
addOptionsHandler()
addFilterValuesHandler()
window.addEventListener('click', (e) => {
    let notFilter = true
    console.log(e.target)
    notFilter     = !filters.find(filter => filter.contains(e.target))
    console.log(notFilter)
    if (notFilter) removeAllShowClassFilter()
})