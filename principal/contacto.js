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
                margin: 50px;
                padding: 20px;
                max-width: 400px;
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
        this.shadowDOM.innerHTML = `
            ${this.templateCss()}
            ${this.template()}
        `;

        const registerButton = this.shadowDOM.querySelector('.register-button');
        const cancelButton = this.shadowDOM.querySelector('.cancel-button');
        
        if (registerButton) {
            registerButton.addEventListener('click', () => this.toggleForm());
        }
        
        if (cancelButton) {
            cancelButton.addEventListener('click', () => this.toggleForm());
        }
    }

    template() {
        return this.isRegistering ? this.registrationTemplate() : this.contactTemplate();
    }

    contactTemplate() {
        return `
        <div class="contact-card">
            <div class="contact-info">
                <h2>Contacto</h2>
                <form>
                    <label for="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" required>

                    <label for="subject">Asunto</label>
                    <input type="text" id="subject" name="subject" required>

                    <label for="message">Mensaje</label>
                    <textarea id="message" name="message" required></textarea>
                    
                    <div class="button-container">
                        <button type="submit">Enviar</button>
                        <button type="button" class="register-button">Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
        `;
    }

    registrationTemplate() {
        return `
        <div class="contact-card">
            <div class="contact-info">
                <h2>Registro</h2>
                <form>
                    <label for="first-name">Nombre</label>
                    <input type="text" id="first-name" name="first-name" required>
                    
                    <label for="last-name">Apellidos</label>
                    <input type="text" id="last-name" name="last-name" required>

                    <label for="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" required>

                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" required>
                    
                    <div class="button-container">
                        <button type="button" class="cancel-button">Cancelar</button>
                        <button type="submit" class="accept-button">Aceptar</button>
                    </div>
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
                background-color: #f8f9fa;
                margin: 10px;
                padding: 20px;
                max-width: 800px;
                text-align: center;
                transition: opacity 0.5s ease-in-out;
                opacity: 1;
                flex: 1 1 100%;
                box-sizing: border-box;
            }

            .contact-info {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .contact-info h2 {
                margin-top: 0;
                font-size: 1.8em;
                color: #007bff;
                margin-bottom: 20px;
            }

            form {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                max-width: 500px;
            }

            label {
                margin: 10px 0 5px;
                font-size: 1.2em;
                color: #343a40;
                align-self: flex-start;
            }

            input, textarea {
                margin: 5px 0 20px;
                padding: 10px;
                width: 100%;
                box-sizing: border-box;
                border: 1px solid #ced4da;
                border-radius: 5px;
                font-size: 1em;
                font-family: inherit;
            }

            textarea {
                resize: vertical;
                min-height: 200px;
            }

            .button-container {
                width: 100%;
                display: flex;
                justify-content: space-between;
            }

            button {
                padding: 10px 20px;
                border: none;
                cursor: pointer;
                border-radius: 50px;
                transition: background-color 0.3s;
            }

            button[type="submit"] {
                background-color: #007bff;
                color: white;
            }

            button[type="submit"]:hover {
                background-color: #0056b3;
            }

            .register-button {
                background-color: #6c757d;
                color: white;
            }

            .register-button:hover {
                background-color: #5a6268;
            }

            .cancel-button {
                background-color: #dc3545;
                color: white;
            }

            .cancel-button:hover {
                background-color: #c82333;
            }

            .accept-button {
                background-color: #28a745;
                color: white;
            }

            .accept-button:hover {
                background-color: #218838;
            }

            @media (max-width: 768px) {
                .contact-card {
                    width: 100%;
                    max-width: none;
                    padding: 10px;
                }
                form {
                    padding: 10px;
                }
                .contact-info h2 {
                    font-size: 1.5em;
                }
                label {
                    font-size: 1em;
                }
                input, textarea {
                    font-size: 0.9em;
                }
                button {
                    font-size: 0.9em;
                }
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
        <div class="help-card container">
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
            @import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
            
            .help-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: Arial, sans-serif;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                overflow: hidden;
                background-color: #333;
                color: white;
                margin: 10px auto;
                padding: 10px;
                max-width: 1100px;
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
                color: #4fc3f7;
                text-decoration: none;
            }

            a:hover {
                text-decoration: underline;
            }

            @media (max-width: 768px) {
                .help-card {
                    width: 100%;
                }

                h2 {
                    font-size: 1.2em;
                }

                p {
                    font-size: 0.9em;
                }
            }
        </style>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('help-section', HelpSection);