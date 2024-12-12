import customSelect from 'custom-select'
import PerfectScrollbar from "perfect-scrollbar"

const allSelects = customSelect('[id^="select"]')
console.log(allSelects)
const clearSelect = (item, button, placeholder) => {
    item.value = ''
    button.style.display = 'none'
    placeholder.style.display = 'flex'
}
allSelects.forEach((item, index) => {
    const buttonClear = item.container.nextElementSibling
    const placeholder = item.container.nextElementSibling.nextElementSibling
    clearSelect(item, buttonClear, placeholder)
    buttonClear.addEventListener('click', () => {
        clearSelect(item, buttonClear, placeholder)
    })
    item.select.addEventListener('change', (e) => {
        if (item.value) {
            buttonClear.style.display = 'flex'
            placeholder.style.display = 'none'
        }
    })
    item.container.parentElement.style.zIndex = allSelects.length - index
    new PerfectScrollbar(item.panel, {
        minScrollbarLength: 40,
        wheelSpeed: 0.1
    } )
})