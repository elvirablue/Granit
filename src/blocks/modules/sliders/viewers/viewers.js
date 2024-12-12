import Viewer from "viewerjs";

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
const initWorksViewer = () => {
    const worksViewer = document.querySelector('#worksViewer');

    if (worksViewer) {
        new Viewer(worksViewer, {
            title: false,
            toolbar: {
                prev: 1,
                next: 1,
            },
            navbar: true
        });
    }
}

initCertificatesViewer()
initWorksViewer()