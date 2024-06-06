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
            'address'
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
                margin: 20px 0;
                padding: 20px;
            }

            img {
                border-radius: 50%;
                margin-right: 20px;
            }

            .contact-info {
                flex: 1;
            }

            .contact-info h2 {
                margin-top: 0;
            }

            .contact-info p {
                margin: 5px 0;
            }
        </style>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('doctor-contact', DoctorContact);