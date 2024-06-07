class WelcomeCarousel extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.initCarousel();
    }

    render() {
        this.shadowRoot.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;
    }

    template() {
        return `
        <div class="welcome-container">
            <h1 class="welcome-text">Bienvenidos al Hospital</h1>
            <p class="welcome-message">
                Nos complace darles la bienvenida a nuestro hospital, donde nos dedicamos a brindar la mejor atención médica para mejorar tu salud y bienestar. Nuestro equipo de profesionales está aquí para ofrecerte un servicio de alta calidad en un entorno seguro y acogedor. Gracias por confiar en nosotros.
            </p>
            <div class="carousel">
                <div class="carousel-item">
                    <img src="imgPrincipal/imagen1.jpg" alt="Imagen 1">
                </div>
                <div class="carousel-item">
                    <img src="imgPrincipal/imagen2.png" alt="Imagen 2">
                </div>
                <div class="carousel-item">
                    <img src="imgPrincipal/imagen3.jpg" alt="Imagen 3">
                </div>
                <div class="carousel-item">
                    <img src="imgPrincipal/imagen4.jpg" alt="Imagen 4">
                </div>
                    <div class="carousel-item">
                    <img src="imgPrincipal/imagen5.jpg" alt="Imagen 3">
                </div>
                <div class="carousel-item">
                    <img src="imgPrincipal/imagen6.jpg" alt="Imagen 4">
                </div>
                <button class="carousel-control prev">&lt;</button>
                <button class="carousel-control next">&gt;</button>
            </div>
        </div>
        `;
    }

    templateCss() {
        return `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
            .welcome-container {
                text-align: center;
                font-family: 'Nunito', sans-serif;
                margin: 20px;
            }

            .welcome-text {
                font-size: 2rem;
                margin-bottom: 10px;
                animation: fadeIn 1s ease-in-out;
            }

            .welcome-message {
                font-size: 1rem;
                line-height: 1.6;
                margin-bottom: 20px;
                color: #555;
                animation: fadeIn 1.5s ease-in-out;
            }

            .carousel {
                display: flex;
                overflow: hidden;
                position: relative;
                width: 100%;
                max-width: 100%;
                margin: 0 auto;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
            }

            .carousel-item {
                min-width: 50%;
                transition: transform 0.5s ease;
                position: relative;
            }

            .carousel-item img {
                width: 100%;
                height: 400px;
                object-fit: cover;
            }

            .carousel-control {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(0, 0, 0, 0.5);
                color: white;
                border: none;
                padding: 0.5rem 1rem;
                cursor: pointer;
                border-radius: 4px;
                transition: background 0.3s ease;
                z-index: 1;
            }

            .carousel-control:hover {
                background: rgba(0, 0, 0, 0.7);
            }

            .carousel-control.prev {
                left: 10px;
            }

            .carousel-control.next {
                right: 10px;
            }

            @keyframes fadeIn {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        </style>
        `;
    }

    initCarousel() {
        const items = this.shadowRoot.querySelectorAll('.carousel-item');
        const prevButton = this.shadowRoot.querySelector('.carousel-control.prev');
        const nextButton = this.shadowRoot.querySelector('.carousel-control.next');
        let currentIndex = 0;

        const updateCarousel = () => {
            items.forEach((item, index) => {
                if (index >= currentIndex && index < currentIndex + 2) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        };

        const showNextImages = () => {
            currentIndex = (currentIndex + 2) % items.length;
            updateCarousel();
        };

        const showPrevImages = () => {
            currentIndex = (currentIndex - 2 + items.length) % items.length;
            updateCarousel();
        };

        nextButton.addEventListener('click', showNextImages);
        prevButton.addEventListener('click', showPrevImages);

        setInterval(showNextImages, 3000);

        updateCarousel();
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('welcome-carousel', WelcomeCarousel);




// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //
class acercaDe extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const template = document.createElement('template');
        template.innerHTML = `
            ${this.templateCss()}
            <div class="about-container">
                <section class="about">
                    <div class="img-container">
                        <img src="imgPrincipal/AcercaDe1.jpg" alt="Acerca de">
                    </div>
                    <div class="text-container">
                        <h2>Acerca de</h2>
                        <p>El Hospital Vida Saludable es un centro de salud dedicado a ofrecer servicios médicos de alta calidad. Nuestro compromiso es brindar atención personalizada y humana a todos nuestros pacientes.</p>
                    </div>
                </section>
                <section class="mission">
                    <div class="img-container">
                        <img src="imgPrincipal/AcercaDe2.jpg" alt="Misión">
                    </div>
                    <div class="text-container">
                        <h2>Misión</h2>
                        <p>Nuestra misión es mejorar la salud y el bienestar de nuestra comunidad mediante la provisión de servicios médicos accesibles, innovadores y de alta calidad.</p>
                    </div>
                </section>
                <section class="vision">
                    <div class="img-container">
                        <img src="imgPrincipal/AcercaDe3.jpg" alt="Visión">
                    </div>
                    <div class="text-container">
                        <h2>Visión</h2>
                        <p>Ser el hospital líder en la región, reconocido por nuestra excelencia en atención médica, tecnología avanzada y un enfoque centrado en el paciente.</p>
                    </div>
                </section>
            </div>
                            <hr class="styled-line">

        `;
        this.shadowDOM.appendChild(template.content.cloneNode(true));
    }

    templateCss() {
        return `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
            .about-container {
                max-width: 1200px;
                margin: 40px auto;
                padding: 0 20px;
                font-family: 'Nunito', sans-serif;
                display: flex;
                flex-direction: column;
                gap: 40px;
                background-color: #F0F4F8; /* Fondo Principal */
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }

            section {
                display: flex;
                align-items: center;
                gap: 20px;
            }

            hr.styled-line {
                border: none;
                height: 1px;
                background: linear-gradient(to right, rgba(0, 0, 0, 0), #D3D3D3, rgba(0, 0, 0, 0)); /* Degradado */
                margin: 20px 0;
            }

            .img-container {
                flex: 1;
            }

            .img-container img {
                width: 100%;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }

            .text-container {
                flex: 2;
                padding: 20px;
                background-color: #FFFFFF; /* Fondo Secundario */
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }

            .text-container h2 {
                font-size: 1.75rem;
                margin-bottom: 10px;
                color: #333333; /* Texto Principal */
                border-bottom: 2px solid #007BFF; /* Color de Acento Azul */
                display: inline-block;
                padding-bottom: 5px;
            }

            .text-container p {
                font-size: 1rem;
                line-height: 1.6;
                color: #555555; /* Texto Secundario */
                margin-bottom: 20px;
            }

            @media (max-width: 768px) {
                section {
                    flex-direction: column;
                }

                .text-container {
                    padding: 10px;
                }

                .text-container h2 {
                    font-size: 1.5rem;
                }

                .text-container p {
                    font-size: 0.9rem;
                }
            }
        </style>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('acerca-section', acercaDe);


// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //
// ---------------------------------------------------------------- //
class Informacion1 extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.mapComponentAttributes();
        this.render();
    }

    mapComponentAttributes() {
        const attributeMapping = [
            'img-src',
            'img-alt',
            'title',
            'text'
        ];
        attributeMapping.forEach(key => {
            if (!this.attributes[key]) {
                this.attributes[key] = { value: '' };
            }
        });
    }

    render() {
        this.shadowDOM.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;
    }

    template() {
        return `
        <div class="card">
            <img src="${this.attributes['img-src'].value}" alt="${this.attributes['img-alt'].value}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${this.attributes.title.value}</h5>
                <p class="card-text">${this.attributes.text.value}</p>
            </div>
        </div>
        `;
    }

    templateCss() {
        return `
        <style>
            @keyframes slideIn {
                0% {
                    opacity: 0;
                    transform: translateX(-100%);
                }
                100% {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            .card {
                margin: 10px;
                flex: 1 1 auto;
                display: flex;
                flex-direction: column;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                overflow: hidden;
                background-color: white;
                max-width: 400px;
                animation: slideIn 1s ease-in-out; /* Agrega la animación de deslizamiento */
                transition: transform 0.3s ease-in-out; /* Agrega la transición para el hover */
            }

            .card:hover {
                transform: scale(1.05); /* Hace que la card se agrande al hacer hover */
            }

            .card-img-top {
                height: 200px;
                object-fit: cover;
            }

            .card-body {
                flex: 1 0 auto;
                padding: 10px;
            }

            .card-title {
                font-size: 1.25rem;
                margin-bottom: 10px;
            }

            .card-text {
                font-size: 1rem;
                color: #555;
            }
        </style>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('card-component', Informacion1);
