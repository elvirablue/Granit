import Glide from '@glidejs/glide';
import "@glidejs/glide/dist/css/glide.core.min.css";
const initCertificatesSlider = () => {
    const certificatesCarousel = document.querySelector('#certificatesCarousel');

    if (certificatesCarousel) {
        new Glide('#certificatesCarousel', {
            type: 'carousel',
            perView: 3,
            //perTouch: 1,
            rewind: true,
            bound: true,
            gap: 168,
            breakpoints: {
                480: {
                    perView: 1.5,
                    gap: 16,
                },
                768: {
                    perView: 2,
                    gap: 32,
                },
                1280: {
                    perView: 3,
                    gap: 80,
                },
            },
        }).mount();
    }
}

initCertificatesSlider()

