// SERVICIOS
class EncabezadoServicios extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            ${this.templateCss()}
            ${this.templateHTML()}
        `;
    }

    templateHTML() {
        return `
        <div class="page-header">
            <div class="container">
                <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 400px; margin-top: 50px;"> <!-- Ajuste del margen superior aquí -->
                    <p class="m-0 text-uppercase font-bold text-white" style="font-size: 36px;">SERVICIOS</p>
                </div>
            </div>
        </div>
        `;
    }

    templateCss() {
        return `
        <style>
            .page-header {
                background: url('img/imagen1.jpg') center center no-repeat;
                background-size: cover;
                position: relative;
                min-height: 400px;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
            }

            .page-header::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5); /* Oscurecer la imagen */
            }

            .page-header .container {
                position: relative;
                z-index: 1;
            }

            .page-header .d-inline-flex {
                z-index: 2;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra de texto */
            }

            .page-header .d-inline-flex a {
                color: white;
                text-decoration: none;
            }

            .page-header .d-inline-flex i {
                padding: 0 10px;
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
        this.remove();
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
        // Animación del acordeón al alternar la clase 'show'
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
                <img src="${this.getAttribute('img-src')}" class="card-img-top" alt="${this.getAttribute('img-alt')}" onclick="toggleDescription(this)">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="m-0">${this.getAttribute('title')}</h5>
                    <button class="btn btn-link" type="button">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
                <div class="collapse">
                    <div class="card-body">
                        ${this.getAttribute('description')}
                    </div>
                    <a href="${this.getAttribute('link')}" class="btn btn-primary">Adquirir Servicio <i class="fas fa-credit-card"></i></a>
                </div>
            </div>
        </div>
        `;
    }

    templateCSS() {
        return `
        <style>
            .card {
                transition: transform 0.3s;
            }
            
            .card.animated {
                transform: scale(1.05);
            }

            .card-img-top {
                width: 100%;
                height: 200px; /* Ajusta la altura según tus necesidades */
                object-fit: cover; /* Escalar la imagen manteniendo las proporciones */
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
        </style>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('servicio-hospital', ServicioHospital);

class ServicioLaboratorio extends HTMLElement {
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
                <img src="${this.getAttribute('img-src')}" class="card-img-top" alt="${this.getAttribute('img-alt')}" onclick="toggleDescription(this)">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="m-0">${this.getAttribute('title')}</h5>
                    <button class="btn btn-link" type="button">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
                <div class="collapse">
                    <div class="card-body">
                        ${this.getAttribute('description')}
                    </div>
                    <a href="${this.getAttribute('link')}" class="btn btn-primary">Adquirir Servicio <i class="fas fa-shopping-cart"></i></a>
                </div>
            </div>
        </div>
        `;
    }

    templateCSS() {
        return `
        <style>
            .card {
                transition: transform 0.3s;
            }
            
            .card.animated {
                transform: scale(1.05);
            }

            .card-img-top {
                width: 100%;
                height: 200px; /* Ajusta la altura según tus necesidades */
                object-fit: cover; /* Escalar la imagen manteniendo las proporciones */
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
        </style>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('servicio-laboratorio', ServicioLaboratorio);


class ServicioConsulta extends HTMLElement {
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
                <img src="${this.getAttribute('img-src')}" class="card-img-top" alt="${this.getAttribute('img-alt')}" onclick="toggleDescription(this)">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="m-0">${this.getAttribute('title')}</h5>
                    <button class="btn btn-link" type="button">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
                <div class="collapse">
                    <div class="card-body">
                        ${this.getAttribute('description')}
                    </div>
                    <a href="${this.getAttribute('link')}" class="btn btn-primary">Adquirir Servicio <i class="fas fa-shopping-cart"></i></a>
                </div>
            </div>
        </div>
        `;
    }

    templateCSS() {
        return `
        <style>
            .card {
                transition: transform 0.3s;
            }
            
            .card.animated {
                transform: scale(1.05);
            }

            .card-img-top {
                width: 100%;
                height: 200px; /* Ajusta la altura según tus necesidades */
                object-fit: cover; /* Escalar la imagen manteniendo las proporciones */
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
        </style>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('servicio-consulta', ServicioConsulta);

class ServicioCardiologo extends HTMLElement {
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
                <img src="${this.getAttribute('img-src')}" class="card-img-top" alt="${this.getAttribute('img-alt')}" onclick="toggleDescription(this)">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="m-0">${this.getAttribute('title')}</h5>
                    <button class="btn btn-link" type="button">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
                <div class="collapse">
                    <div class="card-body">
                        ${this.getAttribute('description')}
                    </div>
                    <a href="${this.getAttribute('link')}" class="btn btn-primary">Adquirir Servicio <i class="fas fa-credit-card"></i></a>
                </div>
            </div>
        </div>
        `;
    }

    templateCSS() {
        return `
        <style>
            .card {
                transition: transform 0.3s;
            }
            
            .card.animated {
                transform: scale(1.05);
            }

            .card-img-top {
                width: 100%;
                height: 200px; /* Ajusta la altura según tus necesidades */
                object-fit: cover; /* Escalar la imagen manteniendo las proporciones */
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
        </style>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('servicio-cardiologo', ServicioCardiologo);

class ServicioTraumatologia extends HTMLElement {
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
                <img src="${this.getAttribute('img-src')}" class="card-img-top" alt="${this.getAttribute('img-alt')}" onclick="toggleDescription(this)">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="m-0">${this.getAttribute('title')}</h5>
                    <button class="btn btn-link" type="button">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
                <div class="collapse">
                    <div class="card-body">
                        ${this.getAttribute('description')}
                    </div>
                    <a href="${this.getAttribute('link')}" class="btn btn-primary">Adquirir Servicio <i class="fas fa-credit-card"></i></a>
                </div>
            </div>
        </div>
        `;
    }

    templateCSS() {
        return `
        <style>
            .card {
                transition: transform 0.3s;
            }
            
            .card.animated {
                transform: scale(1.05);
            }

            .card-img-top {
                width: 100%;
                height: 200px; /* Ajusta la altura según tus necesidades */
                object-fit: cover; /* Escalar la imagen manteniendo las proporciones */
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
        </style>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('servicio-traumatologia', ServicioTraumatologia);

class ServicioDermatologia extends HTMLElement {
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
                <img src="${this.getAttribute('img-src')}" class="card-img-top" alt="${this.getAttribute('img-alt')}" onclick="toggleDescription(this)">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="m-0">${this.getAttribute('title')}</h5>
                    <button class="btn btn-link" type="button">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
                <div class="collapse">
                    <div class="card-body">
                        ${this.getAttribute('description')}
                    </div>
                    <a href="${this.getAttribute('link')}" class="btn btn-primary">Solicitar Consulta <i class="fas fa-calendar-check"></i></a>
                </div>
            </div>
        </div>
        `;
    }

    templateCSS() {
        return `
        <style>
            .card {
                transition: transform 0.3s;
            }
            
            .card.animated {
                transform: scale(1.05);
            }

            .card-img-top {
                width: 100%;
                height: 200px; 
                object-fit: cover; 
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
        </style>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('servicio-dermatologia', ServicioDermatologia);

