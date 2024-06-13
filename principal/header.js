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


