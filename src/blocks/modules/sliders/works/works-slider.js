import Glide from '@glidejs/glide';
const initWorksSlider = () => {
    const worksCarousel = document.querySelector('#worksCarousel');

    if (worksCarousel) {
        new Glide('#worksCarousel', {
            type: 'carousel',
            perView: 1,
            //perTouch: 1,
            rewind: true,
            bound: true,
            gap: 100,
        }).mount();
    }
}

initWorksSlider()