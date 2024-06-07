
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
    }

    handleMouseOver() {
        this.shadowDOM.querySelector('.card').classList.add('animated');
    }

    handleMouseOut() {
        this.shadowDOM.querySelector('.card').classList.remove('animated');
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
                <img src="img/imagen2.jpg" class="card-img-top" alt="Servicio Hospitalario" onclick="toggleDescription(this)">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="m-0">Servicio Hospitalario</h5>
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#servicioHospital" aria-expanded="true" aria-controls="servicioHospital">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
                <div class="collapse" id="servicioHospital">
                    <div class="card-body">
                        El Servicio Hospitalario ofrece atención médica especializada las 24 horas del día, los 7 días de la semana. Nuestro equipo de profesionales altamente capacitados está dedicado a brindar atención compasiva y de alta calidad a nuestros pacientes. Desde servicios de emergencia hasta intervenciones quirúrgicas y cuidados intensivos, nuestro hospital se compromete a proporcionar el mejor cuidado posible para su salud y bienestar.
                    </div>
                    <a href="compra.html" class="btn btn-primary">Adquirir Servicio <i class="fas fa-credit-card"></i></a>
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
    }

    handleMouseOver() {
        this.shadowDOM.querySelector('.card').classList.add('animated');
    }

    handleMouseOut() {
        this.shadowDOM.querySelector('.card').classList.remove('animated');
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
                <img src="img/imagen3.jpg" class="card-img-top" alt="Servicio de Laboratorio" onclick="toggleDescription(this)">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="m-0">Servicio de Laboratorio</h5>
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#servicioLaboratorio" aria-expanded="true" aria-controls="servicioLaboratorio">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
                <div class="collapse" id="servicioLaboratorio">
                    <div class="card-body">
                        El Servicio de Laboratorio ofrece una amplia gama de pruebas diagnósticas y análisis clínicos para ayudar a identificar enfermedades y monitorear la salud de nuestros pacientes. Nuestro equipo de técnicos y especialistas trabaja con tecnología de vanguardia para garantizar resultados precisos y oportunos. Ya sea que necesite análisis de sangre, pruebas de imagenología o evaluaciones genéticas, nuestro laboratorio está aquí para brindarle resultados confiables y de alta calidad.
                    </div>
                    <a href="compra.html" class="btn btn-primary">Adquirir Servicio <i class="fas fa-shopping-cart"></i></a>
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
    }

    handleMouseOver() {
        this.shadowDOM.querySelector('.card').classList.add('animated');
    }

    handleMouseOut() {
        this.shadowDOM.querySelector('.card').classList.remove('animated');
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
                <img src="img/imagen4.jpg" class="card-img-top" alt="Servicio de Consulta" onclick="toggleDescription(this)">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="m-0">Servicio de Consulta</h5>
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#servicioConsulta" aria-expanded="true" aria-controls="servicioConsulta">
                        <i class="fas fa-chevron-down"></i>
                    </button>
                </div>
                <div class="collapse" id="servicioConsulta">
                    <div class="card-body">
                    Nuestro Servicio de Consulta ofrece atención médica personalizada y preventiva para pacientes de todas las edades. Desde exámenes físicos de rutina hasta el manejo de enfermedades crónicas, nuestros médicos están comprometidos a proporcionar atención integral y compasiva. Además, nuestro equipo ofrece asesoramiento sobre nutrición, programas de ejercicios y estrategias de estilo de vida saludable para ayudarlo a alcanzar y mantener su bienestar óptimo.
                    </div>
                    <a href="compra.html" class="btn btn-primary">Adquirir Servicio <i class="fas fa-shopping-cart"></i></a>
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
        </style>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('servicio-consulta', ServicioConsulta);

                       
