import Accordion from 'accordion-js';

new Accordion('#workAccordion', {
    duration: 300,
    showMultiple: false,
    openOnInit : [0],
    elementClass: 'ac',
    triggerClass: 'ac__trigger',
    panelClass: 'ac__panel',
    activeClass: 'ac--active'
});