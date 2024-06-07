class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            ${this.templateCss()}
            ${this.templateHTML()}
        `;
    }

    templateHTML() {
        return `
        <div class="container-fluid bg-primary text-light footer py-1 px-sm-2 px-md-3">
            <div class="row justify-content-around">
                <div class="col-lg-5 col-md-5 mb-1">
                    <h5 class="text-light mb-3">Contáctanos</h5> <!-- Espacio adicional -->
                    <p><i class="fa fa-map-marker-alt mr-2"></i>123 Calle, Ciudad, País</p>
                    <p><i class="fa fa-phone-alt mr-2"></i>+123 456 7890</p>
                    <p><i class="fa fa-envelope mr-2"></i>info@example.com</p>
                    <div class="d-flex justify-content-start mt-1">
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-social mr-2" href="#"><img src="imgPrincipal/twitter.png" alt="Twitter" class="social-icon"></a>
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-social mr-2" href="#"><img src="imgPrincipal/facebook.png" alt="Facebook" class="social-icon"></a>
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-social mr-2" href="#"><img src="imgPrincipal/linkedin.png" alt="LinkedIn" class="social-icon"></a>
                        <a data-mdb-ripple-init class="btn btn-outline-light btn-social" href="#"><img src="imgPrincipal/instagram.png" alt="Instagram" class="social-icon"></a>
                    </div>
                </div>
                <div class="col-lg-5 col-md-5 mb-1">
                    <h5 class="text-light mb-3">Mapa</h5> <!-- Espacio adicional -->
                    <div class="ratio ratio-16x9" style="height: 200px;">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15907.221932829645!2d-79.37078101615434!3d-0.2534123025998522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d34ef1f00c0105%3A0x400bf6877c1e4c0!2sSanto%20Domingo%20de%20los%20Colorados%2C%20Ecuador!5e0!3m2!1ses!2ses!4v1672242444695!5m2!1ses!2ses" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid bg-primary text-light border-top py-1">
            <div class="row">
                <div class="col-md-12 text-center mb-1 mb-md-0">
                    <p class="m-0 text-light">&copy; <a class="text-light" href="#">VIDA SALUDABLE</a>. Todos los derechos reservados.<a class="text-light" href="#">2024</a></p>
                </div>
            </div>
        </div>
        `;
    }

    templateCss() {
        return `
        <style>
            @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
            .container-fluid {
                padding: 0.5rem 0; 
            }
            .footer {
                background: #4FC3F7;
                padding: 0.5rem 0; /* Ajusta este valor para hacer el footer más pequeño */
            }
            .footer a {
                color: #FFFFFF;
                transition: .3s;
            }
            .footer a:hover {
                color: #FFFFFF;
                text-decoration: none;
            }
            .btn-social {
                width: 25px;
                height: 25px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                color: #fff;
                transition: 0.3s;
                padding: 0;
                background-color: transparent;
                border: 1px solid #ffffff;
            }
            .btn-social img.social-icon {
                width: 16px;
                height: 16px;
                filter: invert(1); /* Hace que las imágenes se vean blancas */
            }
            .btn-social:hover {
                background: black;
                color: #fff;
                border-color: white;
            }
            .ratio {
                position: relative;
                width: 100%;
            }
            .ratio iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }

            @media (max-width: 768px) {
                .container-fluid.footer {
                    text-align: center;
                }
                .row > div {
                    margin-bottom: 1rem;
                }
                .d-flex {
                    justify-content: center !important;
                }
            }
        </style>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('footer-component', FooterComponent);
