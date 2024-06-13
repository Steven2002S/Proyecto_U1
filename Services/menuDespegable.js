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
        this.shadowDOM.innerHTML = `
            ${this.templateCss()}
            ${this.templateHTML()}
        `;
    }

    templateHTML() {
        return `
        <div id="menu">
            <div class="menu-item">
                <i class="fas fa-home"></i>
                <a class="menu-des" href="index.html">Inicio</a>
            </div>
            <div class="menu-item">
                <i class="fas fa-concierge-bell"></i>
                <a class="menu-des" href="servicios.html">Servicios</a>
            </div>
            <div class="menu-item">
                <i class="fas fa-envelope"></i>
                <a class="menu-des" href="contacto.html">Contacto</a>
            </div>
        </div>
        `;
    }

    templateCss() {
        return `
        <style>
            @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
            #menu {
                width: 100px;
                background-color: #ADD8E6; 
                border-radius: 10px;
                padding: 20px 8px;
                position: fixed;
                z-index: 100;
                left: -100px; /* Menú más escondido */
                top: 50%;
                transform: translateY(-50%);
                transition: left 0.4s ease, background-color 0.4s ease; /* Agregamos la transición para el color de fondo */
                box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
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
                this.shadowRoot.getElementById('menu').style.left = '-220px'; // Ocultar el menú
            }
        });
    }

    disconnectedCallback() {
        this.remove();
    }
}
window.customElements.define('menu-desplegable', MenuDesplegable);
