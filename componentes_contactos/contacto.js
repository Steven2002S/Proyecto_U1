// Custom Element parametrizado usando Shadow DOM
class DoctorContact extends HTMLElement {
    constructor() {
        super();
        // Adjunta un Shadow DOM al elemento con el modo 'open', lo que permite que el Shadow DOM sea accesible desde el exterior.
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    // Método llamado cuando el elemento es añadido al DOM.
    connectedCallback() {
        this.mapComponentAttributes(); // Mapea los atributos del componente.
        this.render(); // Renderiza el contenido del componente.
    }

    // Mapea los atributos del componente para asegurarse de que existen.
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
            // Si el atributo no existe, se inicializa con un valor vacío.
            if (!this.attributes[key]) {
                this.attributes[key] = { value: '' };
            }
        });
    }

    // Renderiza el contenido del Shadow DOM.
    render() {
        this.shadowDOM.innerHTML = `
            ${this.templateCss()} 
            ${this.template()} 
        `;
    }

    // Define el HTML del componente.
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

    // Define el CSS del componente.
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

    // Método llamado cuando el elemento es eliminado del DOM.
    disconnectedCallback() {
        this.remove(); // Elimina el componente.
    }
}
// Define el nuevo elemento 'doctor-contact' y lo asocia con la clase 'DoctorContact'.
window.customElements.define('doctor-contact', DoctorContact);


// Componente de Formulario Dinámico - Shadow DOM y Plantilla HTML
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
        // Llama cuando el elemento se agrega al DOM
        // Renderiza el contenido inicial del componente

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
        const sharedStyles = document.getElementById('shared-styles');
        const template = document.getElementById(templateId);
        const content = template.content.cloneNode(true);
        const styles = sharedStyles.content.cloneNode(true);

        this.shadowDOM.innerHTML = '';
        this.shadowDOM.appendChild(styles);
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


    // Componente de tabla de asistencia
    class AttendanceTable extends HTMLElement {
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
                <table class="table table-bordered">
                    <thead class="thead-light">
                        <tr>
                            <th>Doctor</th>
                            <th>Día</th>
                            <th>Hora de Inicio</th>
                            <th>Hora de Fin</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nelson Barahona</td>
                            <td>Lunes</td>
                            <td>08:00</td>
                            <td>12:00</td>
                        </tr>
                        <tr>
                            <td>Dr. Juan Pérez</td>
                            <td>Martes</td>
                            <td>10:00</td>
                            <td>14:00</td>
                        </tr>
                        <tr>
                            <td>Dra. Ana García</td>
                            <td>Miércoles</td>
                            <td>09:00</td>
                            <td>13:00</td>
                        </tr>
                        <tr>
                            <td>Dr. Floril Quintero</td>
                            <td>Jueves</td>
                            <td>14:00</td>
                            <td>18:00</td>
                        </tr>
                    </tbody>
                </table>
            `;
        }

        templateCss() {
            return `
                <style>
                    .table {
                        width: 100%;
                        margin-bottom: 1rem;
                        color: #212529;
                    }
                    .table th,
                    .table td {
                        padding: 0.75rem;
                        vertical-align: top;
                        border-top: 1px solid #dee2e6;
                    }
                    .table thead th {
                        vertical-align: bottom;
                        border-bottom: 2px solid #dee2e6;
                    }
                    .table tbody + tbody {
                        border-top: 2px solid #dee2e6;
                    }
                    .table-bordered {
                        border: 1px solid #dee2e6;
                    }
                    .table-bordered th,
                    .table-bordered td {
                        border: 1px solid #dee2e6;
                    }
                    .table-bordered thead th,
                    .table-bordered thead td {
                        border-bottom-width: 2px;
                    }
                </style>
            `;
        }

        disconnectedCallback() {
            this.remove();
        }
    }

    window.customElements.define('attendance-table', AttendanceTable);
