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
