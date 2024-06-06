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
                margin: 10px;
                padding: 10px;
                max-width: 400px; /* Establece el ancho máximo de la tarjeta */
            }

            img {
                border-radius: 50%;
                margin-right: 10px;
                width: 80px; /* Tamaño reducido para ocupar menos espacio */
                height: 80px; /* Tamaño reducido para ocupar menos espacio */
            }

            .contact-info {
                flex: 1;
            }

            .contact-info h2 {
                margin-top: 0;
                font-size: 1.2em; /* Tamaño de fuente ligeramente más grande */
            }

            .contact-info p {
                margin: 3px 0;
                font-size: 0.9em; /* Tamaño de fuente ligeramente más pequeño */
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
    }

    connectedCallback() {
        this.render();
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
            <div class="contact-info">
                <h2>Contacto</h2>
                <form>
                    <label for="name">Nombre</label>
                    <input type="text" id="name" name="name" required>
                    <label for="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" required>
                    <label for="message">Mensaje</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
        `;
    }

    templateCss() {
        return `
        <style>
            .contact-card {
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: Arial, sans-serif;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                overflow: hidden;
                background-color: white;
                margin: 10px;
                padding: 10px;
                width: 280%;
                height: 94%;
                min-height: 200px; /* Altura mínima del formulario */
                position: relative;
            }

            .contact-info {
                width: 100%;
                height: 100%;
            }

            .contact-info h2 {
                margin-top: 0;
                font-size: 1.5em;
                text-align: center;
            }

            form {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
            }

            label {
                margin: 10px 0;
                font-size: 1.2em;
            }

            input, textarea {
                margin: 10px 0;
                padding: 10px;
                width: 90%;
                max-width: 400px;
                box-sizing: border-box; /* Para asegurarse de que el padding no aumente el tamaño total */
            }

            textarea {
                resize: vertical; /* Permite redimensionar solo verticalmente */
            }

            button {
                margin-top: 20px;
                padding: 10px 20px;
                background-color: #304eb1;
                color: white;
                border: none;
                cursor: pointer;
                border-radius: 4px;
                width: 90%;
                max-width: 200px;
            }
        </style>
        `;
    }
}

customElements.define('contact-component', ContactComponent);



class HelpSection extends HTMLElement {
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
            ${this.template()}
        `;
    }

    template() {
        return `
        <div class="help-card">
            <h2>Ayuda</h2>
            <p>¿Tiene dudas? Llámenos o agende una cita:</p>
            <ul>
                <li>Teléfono: <a href="tel:+34123456789">+34 123 456 789</a></li>
                <li>Teléfono: <a href="tel:+34987654321">+34 987 654 321</a></li>
                <li><a href="https://example.com/agendar-cita">Agendar una cita</a></li>
            </ul>
        </div>
        `;
    }

    templateCss() {
        return `
        <style>
            .help-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                font-family: Arial, sans-serif;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                overflow: hidden;
                background-color: white;
                margin: 10px;
                padding: 10px;
                max-width: 400px; /* Establece el ancho máximo de la tarjeta */
                text-align: center;
            }

            h2 {
                margin-top: 0;
                font-size: 1.5em;
            }

            p {
                margin: 10px 0;
                font-size: 1em;
            }

            ul {
                list-style: none;
                padding: 0;
            }

            li {
                margin: 5px 0;
            }

            a {
                color: #304eb1;
                text-decoration: none;
            }

            a:hover {
                text-decoration: underline;
            }
        </style>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('help-section', HelpSection);
