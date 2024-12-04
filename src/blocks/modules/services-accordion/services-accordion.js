import Viewer from "viewerjs";
import 'viewerjs/dist/viewer.css'

const initCertificatesViewer = () => {
    const certificatesViewer = document.querySelector('#certificatesViewer');

    if (certificatesViewer) {
        new Viewer(certificatesViewer, {
            title: false,
            toolbar: {
                prev: 1,
                next: 1,
            },
            navbar: true
        });
    }
}
const initServicesAccordion = () => {
    let accordion = document.body.querySelector('.accordion')
    let accordionItems = accordion.querySelectorAll('.accordion__item')
    let accordionActivators = accordion.querySelectorAll('.accordion__activator')
    accordionItems[0].classList.add('accordion__item--active')
    accordion.style.setProperty('--count-item', accordionItems.length.toString())

    accordionActivators.forEach((button, index) =>
        button.addEventListener('click', () => openContent(index))
    )

    function openContent(index) {
        console.debug(index)
        accordion.querySelector('.accordion__item.accordion__item--active')?.classList.remove('accordion__item--active')
        accordionItems[index].classList.add('accordion__item--active')
    }
}

initServicesAccordion()
initCertificatesViewer()