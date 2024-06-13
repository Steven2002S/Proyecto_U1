//--------------------------------------------------------------------------------------------------------//
//-------------------------------SHADOW DOM ---- BARRA NAVEGACION-----------------------------------------//
//--------------------------------------------------------------------------------------------------------//
class BarraNavegacion extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    addEventListeners() {
        const toggler = this.shadowDOM.querySelector('.navbar-toggler');
        const collapse = this.shadowDOM.querySelector('#navbarCollapse');

        toggler.addEventListener('click', () => {
            collapse.classList.toggle('show');
        });
    }

    render() {
        this.brandTitle = this.getAttribute('brand-title') || 'Mi Sitio Web';
        this.link1Href = this.getAttribute('link1-href') || '#';
        this.link1Text = this.getAttribute('link1-text') || 'Link 1';
        this.link2Href = this.getAttribute('link2-href') || '#';
        this.link2Text = this.getAttribute('link2-text') || 'Link 2';
        this.link3Href = this.getAttribute('link3-href') || '#';
        this.link3Text = this.getAttribute('link3-text') || 'Link 3';

        this.shadowDOM.innerHTML = `
            ${this.templateCss()}
            ${this.templateHTML()}
        `;
    }

    templateHTML() {
        return `
        <div class="container-fluid nav-bar p-0">
            <div class="container-lg p-0 px-lg-3" style="z-index: 9;">
                <nav class="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                    <a href="#" class="navbar-brand">
                        <h1 class="text-primary m-0"><span class="text-dark">${this.brandTitle.split(' ')[0]}</span> ${this.brandTitle.split(' ')[1]}</h1>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ml-auto">
                            <a href="${this.link1Href}" class="nav-item nav-link">${this.link1Text}</a>
                            <a href="${this.link2Href}" class="nav-item nav-link">${this.link2Text}</a>
                            <a href="${this.link3Href}" class="nav-item nav-link">${this.link3Text}</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        `;
    }

    templateCss() {
        return `
        <style>
            @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
            @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

            .nav-bar {
                background-color: #f8f9fa;
                font-family: 'Nunito', sans-serif;
            }

            .navbar {
                padding: 1rem 0;
                min-height: 80px;
                transition: background-color 0.3s, min-height 0.3s;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }

            .navbar-brand h1 {
                margin: 0;
                font-size: 2rem;
                font-weight: bold;
                transition: font-size 0.3s;
            }

            .text-primary {
                color: #007bff;
            }

            .text-dark {
                color: #343a40;
            }

            .navbar-nav .nav-link {
                color: #343a40;
                transition: color 0.3s, background-color 0.3s, transform 0.3s;
                padding: 0.5rem 1rem;
                border-radius: 5px;
                font-weight: 700;
            }

            .navbar-nav .nav-link.active {
                color: #007bff;
            }

            .navbar-nav .nav-link:hover {
                color: #ffffff;
                background-color: #007bff;
                transform: scale(1.05);
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }

            @media (max-width: 767px) {
                .navbar {
                    min-height: 60px;
                }
                .navbar-brand h1 {
                    font-size: 1.5rem;
                }
            }

            .collapse.show {
                display: block;
            }
        </style>
        `;
    }

    disconnectedCallback() {
        this.removeEventListeners();
    }

    removeEventListeners() {
        const toggler = this.shadowDOM.querySelector('.navbar-toggler');
        const collapse = this.shadowDOM.querySelector('#navbarCollapse');
        toggler.removeEventListener('click', () => {
            collapse.classList.toggle('show');
        });
    }
}
window.customElements.define('barra-navegacion', BarraNavegacion);



//--------------------------------------------------------------------------------------------------------//
//-------------------------------SHADOW DOM ---- MENU DESPLEGABLE-----------------------------------------//
//--------------------------------------------------------------------------------------------------------//

class MenuDesplegable extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.setupListeners();
    }

    render() {
        this.menuItems = [
            { icon: 'fas fa-home', text: this.getAttribute('link1-text') || 'Inicio', href: this.getAttribute('link1-href') || 'index.html' },
            { icon: 'fas fa-concierge-bell', text: this.getAttribute('link2-text') || 'Servicios', href: this.getAttribute('link2-href') || 'servicios.html' },
            { icon: 'fas fa-envelope', text: this.getAttribute('link3-text') || 'Contacto', href: this.getAttribute('link3-href') || 'contacto.html' }
        ];
        this.shadowDOM.innerHTML = `
            ${this.templateCss()}
            ${this.templateHTML()}
        `;
    }

    templateHTML() {
        return `
        <div id="menu">
            ${this.menuItems.map(item => `
                <div class="menu-item">
                    <i class="${item.icon}"></i>
                    <a class="menu-des" href="${item.href}">${item.text}</a>
                </div>
            `).join('')}
        </div>
        `;
    }

    templateCss() {
        return `
        <style>
            @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
            #menu {
                width: 220px;
                background: linear-gradient(to bottom, #0000FF, #8A2BE2); /* Gradiente de azul a violeta */
                border-radius: 10px;
                padding: 20px;
                position: fixed;
                z-index: 100;
                left: -220px; /* Menú más escondido */
                top: 50%;
                transform: translateY(-50%);
                transition: left 0.4s ease, background-color 0.4s ease; /* Agregamos la transición para el color de fondo */
                box-shadow: 0 0 15px rgba(0, 0, 0, 0.3), 0 0 15px rgba(138, 43, 226, 0.3), 0 0 15px rgba(0, 0, 255, 0.3); /* Sombra con azul y violeta */
                color: #fff; /* Color de texto blanco */
            }

    #menu:hover {
        left: 0; /* Mostrar completamente al hacer hover */
        background-color: #8ac6d1; /* Cambiar el color de fondo al hacer hover */
    }

    #menu a {
        color: black;
        text-decoration: none;
    }

            .menu-item {
                margin: 10px 0;
                display: flex;
                align-items: center;
                transition: transform 0.3s ease;
            }

    .menu-item i {
        margin-right: 5px;
        color: black;
    }

    .menu-des {
        line-height: 40px;
        display: inline-block;
        transition: transform 0.3s ease;
    }

    .menu-item a:hover {
        font-weight: bold;
        text-decoration: none;
        transition: text-decoration 0.3s ease;
    }

            /* Animación */
            @keyframes wings-flap {
                0% {
                    transform: rotate(0deg);
                }
                50% {
                    transform: rotate(10deg);
                }
                100% {
                    transform: rotate(0deg);
                }
            }

    .menu-item:hover {
        animation: wings-flap 0.5s ease infinite;
    }
        </style>
        `;
    }

    setupListeners() {
        document.addEventListener('click', (event) => {
            if (!this.contains(event.target)) {
                this.shadowRoot.getElementById('menu').style.left = '-220px'; // Ocultar el menú más al hacer clic fuera de él
            }
        });
    }

    disconnectedCallback() {
        document.removeEventListener('click', this.handleOutsideClick);
    }

    handleOutsideClick(event) {
        const menu = this.shadowRoot.getElementById('menu');
        if (!menu.contains(event.target)) {
            menu.style.left = '-220px'; // Ocultar el menú 
        }
    }

    handleMouseOver() {
        this.shadowRoot.getElementById('menu').style.left = '0';
    }

    handleMouseOut() {
        this.shadowRoot.getElementById('menu').style.left = '-220px';
    }
}
window.customElements.define('menu-desplegable', MenuDesplegable);



