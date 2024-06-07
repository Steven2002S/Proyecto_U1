// barra-navegacion.js
class BarraNavegacion extends HTMLElement {
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
        <div class="container-fluid nav-bar p-0">
            <div class="container-lg p-0 px-lg-3" style="z-index: 9;">
                <nav class="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                    <a href="#" class="navbar-brand">
                        <h1 class="text-primary m-0"><span class="text-dark">VIDA</span> SALUDABLE</h1>
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ml-auto">
                            <a href="index.html" class="nav-item nav-link active">Inicio</a>
                            <a href="servicios.html" class="nav-item nav-link">Servicios</a>
                            <a href="contacto.html" class="nav-item nav-link">Contacto</a>
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
            .navbar {
                padding: 1rem 0; 
                min-height: 80px; 
            }
            .navbar-brand h1 {
                margin: 0;
                font-size: 2rem;
                font-weight: bold;
            }
            .text-primary {
                color: #007bff !important;
            }
            .text-dark {
                color: #343a40 !important;
            }

            @media (max-width: 767px) {
                .navbar {
                    min-height: 60px; 
                }
                .navbar-brand h1 {
                    font-size: 1.5rem;
                }
            }
        </style>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}
window.customElements.define('barra-navegacion', BarraNavegacion);

// menu-desplegable.js
class MenuDesplegable extends HTMLElement {
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
                width: 150px;
                background-color: #007bff; 
                border-radius: 0px 60px 60px 0px;
                padding: 20px 20px 20px 8px;
                position: fixed;
                z-index: 100;
                left: -165px; /* Más oculto */
                top: 50%;
                transform: translateY(-50%);
                transition: left 0.3s ease;
            }

            #menu:hover {
                left: 0;
            }

            #menu a {
                color: white;
                text-decoration: none;
            }

            .menu-item {
                margin: 10px 0;
                display: flex;
                align-items: center;
            }

            .menu-item i {
                margin-right: 10px;
                color: white;
            }

            .menu-des {
                line-height: 70px;
                display: inline-block;
            }

            .menu-item a:hover {
                font-weight: bold;
                text-decoration: none;
                transition: text-decoration 0.3s ease;
            }

            @media (max-width: 767px) {
                #menu {
                    width: 150px;
                    padding: 15px 15px 15px 5px;
                    left: -160px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                .menu-des {
                    line-height: 50px;
                }
            }
        </style>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}
window.customElements.define('menu-desplegable', MenuDesplegable);