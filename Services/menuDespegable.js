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
                background: linear-gradient(to bottom, #4169E1, #7B68EE); /* Cambiar gradiente al hacer hover */
            }

            #menu a {
                color: #fff;
                text-decoration: none;
                transition: color 0.3s ease;
            }

            .menu-item {
                margin: 10px 0;
                display: flex;
                align-items: center;
                transition: transform 0.3s ease;
            }

            .menu-item i {
                margin-right: 10px;
                color: #fff;
                transition: color 0.3s ease;
            }

            .menu-des {
                line-height: 40px;
                display: inline-block;
                font-size: 1.1rem;
                transition: transform 0.3s ease, font-weight 0.3s ease;
            }

            .menu-item a:hover {
                font-weight: bold;
                color: #FFD700; /* Cambiar color del texto al hacer hover */
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
        document.addEventListener('click', this.handleOutsideClick);
        this.shadowRoot.getElementById('menu').addEventListener('mouseover', this.handleMouseOver.bind(this));
        this.shadowRoot.getElementById('menu').addEventListener('mouseout', this.handleMouseOut.bind(this));
    }

    disconnectedCallback() {
        document.removeEventListener('click', this.handleOutsideClick);
    }

    handleOutsideClick(event) {
        const menu = this.shadowRoot.getElementById('menu');
        if (!menu.contains(event.target)) {
            menu.style.left = '-220px'; // Ocultar el menú más al hacer clic fuera de él
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
