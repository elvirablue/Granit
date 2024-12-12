import PerfectScrollbar from "perfect-scrollbar";
let accordion = document.body.querySelector('.index-accordion')
let accordionItems = accordion.querySelectorAll('.index-accordion__item')
let accordionActivators = accordion.querySelectorAll('.index-accordion__activator')
let textContents = accordion.querySelectorAll('.text-contents')
const initServicesAccordion = () => {
    accordionItems[0].classList.add('index-accordion__item--active')
    accordion.style.setProperty('--count-item', accordionItems.length.toString())

    accordionActivators.forEach((button, index) =>
        button.addEventListener('click', () => openContent(index))
    )

    textContents.forEach((item, index) => {
        new PerfectScrollbar(item, {
            minScrollbarLength: 40,
            wheelSpeed: 0.1
        });
    });

    function openContent(index) {
        accordion.querySelector('.index-accordion__item.index-accordion__item--active')?.classList.remove('index-accordion__item--active')
        accordionItems[index].classList.add('index-accordion__item--active')
    }
}

initServicesAccordion()