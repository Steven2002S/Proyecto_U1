// SERVICIOS
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
            ${this.templateCss()}
            ${this.templateHTML()}
        `;
    }

    templateHTML() {
        const images = this.imgSrcs.map(src => `<img src="${src}" class="carousel-image" alt="Carrusel de Servicios">`).join('');
        return `
        <div class="page-header">
            ${images}
            <div class="container">
                <div class="d-flex flex-column align-items-center justify-content-center header-text">
                    <p class="m-0 text-uppercase font-bold text-white" style="font-size: 36px;">SERVICIOS</p>
                </div>
            </div>
        </div>
        `;
    }

    templateCss() {
        return `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
            body {
                font-family: 'Nunito', sans-serif;
            }
            .page-header {
                position: relative;
                width: 100%;
                height: 50vh; /* Use full viewport height */
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                overflow: hidden;
            }

            .page-header img {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100%;
                height: auto;
                transform: translate(-50%, -50%);
                z-index: -1;
                opacity: 0;
                transition: opacity 1s ease-in-out;
            }

            .page-header img.active {
                opacity: 1;
            }

            .page-header::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5); /* Overlay to darken image */
            }

            .page-header .container {
                position: relative;
                z-index: 1;
            }

            .header-text {
                z-index: 2;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            }

            .header-text p {
                color: white;
            }

            .font-bold {
                font-weight: bold;
            }

            .text-white {
                color: white;
            }
        </style>
        `;
    }

    disconnectedCallback() {
        clearInterval(this.intervalId);
    }
}

window.customElements.define('encabezado-servicios', EncabezadoServicios);



//CARDS
class ServicioHospital extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.addEventListener('mouseover', this.handleMouseOver.bind(this));
        this.addEventListener('mouseout', this.handleMouseOut.bind(this));
        this.shadowDOM.querySelector('.card-header').addEventListener('click', this.toggleDescription.bind(this));
    }

    handleMouseOver() {
        this.shadowDOM.querySelector('.card').classList.add('animated');
    }

    handleMouseOut() {
        this.shadowDOM.querySelector('.card').classList.remove('animated');
    }

    toggleDescription() {
        const collapseElement = this.shadowDOM.querySelector('.collapse');
        collapseElement.classList.toggle('show');
    }

    render() {
        this.shadowDOM.innerHTML = `
            ${this.templateCSS()}
            ${this.templateHTML()}
        `;
    }

    templateHTML() {
        return `
        <div class="col mb-4">
            <div class="card h-100">
                <img src="${this.getAttribute('img-src')}" class="card-img-top" alt="${this.getAttribute('img-alt')}">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="m-0">${this.getAttribute('title')}</h5>
                    <div class="star-rating">
                        ${this.renderStars(this.getAttribute('rating'))}
                    </div>
                    <button class="btn btn-link" type="button">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
                <div class="collapse">
                    <div class="card-body">
                        ${this.getAttribute('description')}
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    renderStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;

        return `${'<i class="fas fa-star"></i>'.repeat(fullStars)}
                ${'<i class="fas fa-star-half-alt"></i>'.repeat(halfStars)}
                ${'<i class="far fa-star"></i>'.repeat(emptyStars)}`;
    }

    templateCSS() {
        return `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

            .card {
                transition: transform 0.3s, box-shadow 0.3s;
                font-family: 'Nunito', sans-serif;
            }
            
            .card.animated {
                transform: scale(1.05);
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
            }

            .card-img-top {
                width: 100%;
                height: 200px; 
                object-fit: cover;
                transition: transform 0.3s, filter 0.3s;
            }

            .card-img-top:hover {
                transform: scale(1.1);
                filter: brightness(0.8);
            }

            .collapse {
                display: none;
                transition: height 0.3s ease;
            }

            .collapse.show {
                display: block;
            }

            .card-header {
                cursor: pointer;
            }

            .card-body {
                transition: opacity 0.3s, transform 0.3s;
                text-align: justify;
            }

            .collapse.show .card-body {
                opacity: 1;
                transform: translateY(0);
            }

            .collapse .card-body {
                opacity: 0;
                transform: translateY(-10px);
            }

            .star-rating {
                display: flex;
                align-items: center;
            }

            .star-rating .fas, .star-rating .far {
                color: #FFD700;
                margin-right: 2px;
                transition: transform 0.3s;
            }

            .star-rating .fas:hover, .star-rating .far:hover {
                transform: scale(1.2);
            }
        </style>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('servicio-hospital', ServicioHospital);

class ServicioLaboratorio extends ServicioHospital {}
window.customElements.define('servicio-laboratorio', ServicioLaboratorio);

class ServicioConsulta extends ServicioHospital {}
window.customElements.define('servicio-consulta', ServicioConsulta);

class ServicioCardiologia extends ServicioHospital {}
window.customElements.define('servicio-cardiologia', ServicioCardiologia);

class ServicioTraumatologia extends ServicioHospital {}
window.customElements.define('servicio-traumatologia', ServicioTraumatologia);

class ServicioDermatologia extends ServicioHospital {}
window.customElements.define('servicio-dermatologia', ServicioDermatologia);

