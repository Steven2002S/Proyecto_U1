// ------------------------------------------------------------------------------------------------------------- //
// -----------------------------------------TEMPLATE - PARAMETRIZADO-------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------- //
class BienvenidoCarousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.initCarousel();
    }

    getAttributeOrDefault(attributeName, defaultValue = '') {
        return this.getAttribute(attributeName) || defaultValue;
    }

    render() {
        const template = document.getElementById('bienvenido-carousel-template');
        if (!template) {
            console.error('Template not found!');
            return;
        }
        const templateContent = template.content.cloneNode(true);

        const title = this.getAttributeOrDefault('title');
        const message = this.getAttributeOrDefault('message');
        const images = this.getAttributeOrDefault('images').split(',');

        templateContent.querySelector('.bienvenido-text').textContent = title;
        templateContent.querySelector('.bienvenido-message').textContent = message;

        const carousel = templateContent.querySelector('.carousel');
        images.forEach((src, index) => {
            const item = document.createElement('div');
            item.classList.add('carousel-item');
            if (index === 0) {
                item.style.display = 'block';
            }
            const img = document.createElement('img');
            img.setAttribute('src', src);
            img.setAttribute('alt', `Imagen ${index + 1}`);
            item.appendChild(img);
            carousel.appendChild(item);
        });

        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(templateContent);
    }

    initCarousel() {
        const items = this.shadowRoot.querySelectorAll('.carousel-item');
        const prevButton = this.shadowRoot.querySelector('.carousel-control.prev');
        const nextButton = this.shadowRoot.querySelector('.carousel-control.next');
        let currentIndex = 0;

        const updateCarousel = () => {
            items.forEach((item, index) => {
                item.style.display = index === currentIndex || index === currentIndex + 1 ? 'block' : 'none';
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
        const nextButton = this.shadowRoot.querySelector('.carousel-control.next');
        const prevButton = this.shadowRoot.querySelector('.carousel-control.prev');

        nextButton.removeEventListener('click', this.showNextImages);
        prevButton.removeEventListener('click', this.showPrevImages);
    }
}

window.customElements.define('bienvenido-carousel', BienvenidoCarousel);


// ------------------------------------------------------------------------------------------------------------- //
// ---------------------------------------SHADOW DOM - PARAMETRIZADO-------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------- //
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
