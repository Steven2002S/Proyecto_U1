class Informacion extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.initCarousel();
    }

    render() {
        this.shadowRoot.innerHTML = `
            ${this.templateCss()}
            ${this.templateHTML()}
        `;
    }

    templateHTML() {
        return `
        <div class="hero">
            <div class="carousel-container">
                <div class="carousel">
                    <img src="img/imagen1.jpg" class="active" alt="Imagen 1">
                    <img src="img/imagen2.png" alt="Imagen 2">
                    <img src="img/imagen3.jpg" alt="Imagen 3">
                    <div class="carousel-controls">
                        <button class="carousel-control prev">&lt;</button>
                        <button class="carousel-control next">&gt;</button>
                    </div>
                </div>
            </div>
            <div class="welcome-text">
                <h1>Bienvenidos</h1>
                <p>
                    Nos complace darles la bienvenida a nuestra página web, donde encontrarás toda la información sobre nuestros servicios y el compromiso que tenemos con tu bienestar y salud. Estamos aquí para ofrecerte la mejor atención y los recursos necesarios para mejorar tu calidad de vida.
                </p>
                <p>
                    Explora nuestra página para conocer más sobre nosotros, nuestros servicios y cómo podemos ayudarte. No dudes en contactarnos para cualquier consulta o para programar una cita.
                </p>
            </div>
        </div>
        `;
    }

    templateCss() {
        return `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Open+Sans:wght@400;700&display=swap');
        @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');

            .hero {
                display: flex;
                flex-wrap: wrap;
                gap: 2rem;
                padding: 2rem;
                background-color: #f9f9f9;
                font-family: 'Open Sans', sans-serif;
            }
            .carousel-container {
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                max-width: 100%;
            }
            .carousel {
                position: relative;
                width: 100%;
                max-width: 400px;
                overflow: hidden;
            }
            .carousel img {
                width: 100%;
                display: none;
                border-radius: 8px;
                transition: opacity 0.5s ease-in-out;
            }
            .carousel img.active {
                display: block;
                opacity: 1;
            }
            .carousel-controls {
                position: absolute;
                top: 50%;
                width: 100%;
                display: flex;
                justify-content: space-between;
                transform: translateY(-50%);
            }
            .carousel-control {
                background: rgba(0, 0, 0, 0.5);
                color: white;
                border: none;
                padding: 0.5rem 1rem;
                cursor: pointer;
                border-radius: 4px;
            }
            .welcome-text {
                flex: 2;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 1rem;
                background-color: white;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                max-width: 100%;
                animation: fadeIn 1s ease-in-out;
                opacity: 0;
                animation-fill-mode: forwards;
                text-align: center;
                font-family: 'Nunito', sans-serif;
            }
            .welcome-text h1 {
                font-size: 2rem;
                margin-bottom: 1rem;
                color: #333;
                text-align: center;
            }
            .welcome-text p {
                font-size: 1.1rem;
                line-height: 1.6;
                color: #666;
                margin-bottom: 1rem;
                text-align: justify;
            }
            @keyframes fadeIn {
                0% {
                    opacity: 0;
                    transform: translateY(20px);
                }
                100% {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            @media (max-width: 768px) {
                .hero {
                    flex-direction: column;
                    align-items: center;
                }
            }
        </style>
        `;
    }

    initCarousel() {
        const carouselElement = this.shadowRoot.querySelector('.carousel');
        const images = carouselElement.querySelectorAll('img');
        let currentIndex = 0;

        const showImage = (index) => {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
                img.style.opacity = i === index ? '1' : '0';
            });
        };

        const prevImage = () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            showImage(currentIndex);
        };

        const nextImage = () => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            showImage(currentIndex);
        };

        const startAutoPlay = () => {
            setInterval(() => {
                nextImage();
            }, 3000); // Cambia de imagen cada 3 segundos (3000 milisegundos)
        };

        carouselElement.querySelector('.prev').addEventListener('click', prevImage);
        carouselElement.querySelector('.next').addEventListener('click', nextImage);

        showImage(currentIndex);
        startAutoPlay();
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('info-component', Informacion);





class Informacion2 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = `
            ${this.templateCss()}
            ${this.templateHTML()}
        `;
    }

    templateHTML() {
        return `
        <div class="hero">
            <div class="welcome-text">
                <h1>Acerca de</h1>
                <p>
                    El Hospital Vida Saludable es una institución médica dedicada a ofrecer servicios de salud de alta calidad con un enfoque integral en el bienestar de nuestros pacientes. Situado en una ubicación accesible, nuestro hospital se ha establecido como un referente en la comunidad por su compromiso con la excelencia médica y el cuidado personalizado.
                </p>
                <div class="mission-vision">
                    <div class="mission">
                        <h4>Misión</h4>
                        <p>
                            Nuestra misión es proporcionar atención médica de calidad que mejore la salud y el bienestar de nuestros pacientes a través de servicios innovadores y compasivos. Nos esforzamos por ser un centro de salud líder, reconocido por nuestra dedicación al cuidado del paciente y la excelencia en todos los aspectos de la medicina.
                        </p>
                    </div>
                    <div class="vision">
                        <h4>Visión</h4>
                        <p>
                            Nuestra visión es ser el hospital de elección en nuestra comunidad y más allá, conocido por nuestro enfoque centrado en el paciente, el uso de tecnología avanzada y un equipo de profesionales comprometidos con la mejora continua y el desarrollo profesional.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    templateCss() {
        return `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Lora:wght@400;700&display=swap');
        @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
            .hero {
                display: flex;
                flex-wrap: wrap;
                gap: 2rem;
                padding: 2rem;
                background-color: white;
                font-family: 'Lora', serif;
            }
            .welcome-text {
                flex: 2;
                display: flex;
                flex-direction: column;
                justify-content: center;
                line-height: 1.5;
                max-width: 100%;
                font-family: 'Poppins', sans-serif;
                text-align: center;
            }
            .mission-vision {
                display: flex;
                gap: 2rem;
                flex-wrap: wrap;
                justify-content: center;
            }
            .mission, .vision {
                flex: 1;
                background-color: #f9f9f9;
                padding: 1.5rem;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                max-width: 45%;
                text-align: left;
            }
            @media (max-width: 768px) {
                .hero {
                    flex-direction: column;
                    align-items: center;
                }
                .mission-vision {
                    flex-direction: column;
                    gap: 1rem;
                }
                .mission, .vision {
                    max-width: 100%;
                    text-align: center;
                }
            }
            </style>
        `;
    }
    disconnectedCallback() {
        this.remove();
    }
}
customElements.define('info-dos', Informacion2);
