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



class ContactComponent extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
        this.isRegistering = false;
    }

    connectedCallback() {
        this.render();
    }

    toggleForm() {
        this.isRegistering = !this.isRegistering;
        this.render();
    }

    render() {
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
