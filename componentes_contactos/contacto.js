
//Custom Element parametrizado usando Shadow DOM
class DoctorContact extends HTMLElement {
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
            'img-width',
            'img-height',
            'name',
            'email',
            'phone',
            'address',
            'role'
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
        <div class="contact-card">
            <img id="doctor-image" src="${this.attributes['img-src'].value}" alt="Doctor Image" style="width: ${this.attributes['img-width'].value}; height: ${this.attributes['img-height'].value};">
            <div class="contact-info">
                <h2 id="doctor-name">${this.attributes.name.value}</h2>
                <p><strong>Rol:</strong> <span id="doctor-role">${this.attributes.role.value}</span></p>
                <p><strong>Email:</strong> <span id="doctor-email">${this.attributes.email.value}</span></p>
                <p><strong>Teléfono:</strong> <span id="doctor-phone">${this.attributes.phone.value}</span></p>
                <p><strong>Dirección:</strong> <span id="doctor-address">${this.attributes.address.value}</span></p>
            </div>
        </div>
        `;
    }

    templateCss() {
        return `
        <style>
            .contact-card {
                display: flex;
                align-items: center;
                font-family: Arial, sans-serif;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                overflow: hidden;
                background-color: white;
                margin: 20px;
                padding: 20px;
                max-width: 600px;
                flex: 1 1 100%;
            }

            img {
                border-radius: 50%;
                margin-right: 10px;
                width: 80px;
                height: 80px;
            }

            .contact-info {
                flex: 1;
            }

            .contact-info h2 {
                margin-top: 0;
                font-size: 1.2em;
            }

            .contact-info p {
                margin: 3px 0;
                font-size: 0.9em;
            }

            @media (max-width: 768px) {
                .contact-card {
                    flex-direction: column;
                    align-items: flex-start;
                }

                img {
                    margin: 0 auto 10px;
                }
            }
        </style>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}
window.customElements.define('doctor-contact', DoctorContact);


//Componente de Formulario Dinámico - Shadow DOM y Plantilla HTML
class ContactComponent extends HTMLElement {
    constructor() {
        // Inicializa el componente.
        // Adjunta el Shadow DOM con mode: 'open' para encapsular el estilo y el contenido
        // Define una propiedad isRegistering para controlar qué formulario mostrar

        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
        this.isRegistering = false;
    }

    connectedCallback() {
        //Llama cuando el elemento se agrega al DOM
        //Renderiza el contenido inicial del componente

        this.render();
    }

    toggleForm() {
        // Cambia el estado de isRegistering entre true y false
        // Llama al método render para actualizar el contenido del componente

        this.isRegistering = !this.isRegistering;
        this.render();
    }

    render() {

        // Selecciona la plantilla HTML adecuada basada en el estado de isRegistering
        // Clona el contenido de la plantilla seleccionada y lo agrega al Shadow DOM
        // Añade event listeners a los botones de registro y cancelación para alternar el formulario


        const templateId = this.isRegistering ? 'registration-template' : 'contact-template';
        const template = document.getElementById(templateId);
        const content = template.content.cloneNode(true);

        this.shadowDOM.innerHTML = '';
        this.shadowDOM.appendChild(content);

        const registerButton = this.shadowDOM.querySelector('.register-button');
        const cancelButton = this.shadowDOM.querySelector('.cancel-button');

        if (registerButton) {
            registerButton.addEventListener('click', () => this.toggleForm());
        }

        if (cancelButton) {
            cancelButton.addEventListener('click', () => this.toggleForm());
        }
    }
}

customElements.define('contact-component', ContactComponent);
