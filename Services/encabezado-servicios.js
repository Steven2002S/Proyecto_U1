// Importamos los estilos CSS usando JavaScript
import { templateCss, templateHTML } from './encabezado-servicios.styles.js';

class EncabezadoServicios extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
        this.currentImageIndex = 0;
    }

    connectedCallback() {
        this.imgSrcs = this.getAttribute('img-srcs').split(',');
        this.interval = parseInt(this.getAttribute('interval'), 10) || 3000;
        this.render();
        this.startCarousel();
    }

    startCarousel() {
        this.imageElements = this.shadowDOM.querySelectorAll('.carousel-image');
        this.imageElements[this.currentImageIndex].classList.add('active');
        this.intervalId = setInterval(() => {
            this.imageElements[this.currentImageIndex].classList.remove('active');
            this.currentImageIndex = (this.currentImageIndex + 1) % this.imageElements.length;
            this.imageElements[this.currentImageIndex].classList.add('active');
        }, this.interval);
    }

    render() {
        this.shadowDOM.innerHTML = `
            ${templateCss()}
            ${templateHTML(this.imgSrcs)}
        `;
    }

    disconnectedCallback() {
        clearInterval(this.intervalId);
    }
}

export default EncabezadoServicios;

// Definimos el custom element al final para evitar problemas de carga
window.customElements.define('encabezado-servicios', EncabezadoServicios);
