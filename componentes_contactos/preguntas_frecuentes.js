import { faqChatData } from './faqChatData.js';

// Definición de la clase FaqChat que extiende HTMLElement
class FaqChat extends HTMLElement {
    constructor() {
        super();
        // Adjuntar el Shadow DOM en modo 'open'
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    // Método que se llama cuando el componente se añade al DOM
    connectedCallback() {
        this.render();
    }

    // Método para renderizar el contenido del componente
    render() {
        // Crear una plantilla HTML
        const template = document.createElement('template');
        template.innerHTML = `
            ${this.templateCss()}
            <div class="floating-ball">?</div>
            <div class="chat-window">
                <div class="chat-header">Preguntas Frecuentes</div>
                <div class="chat-content">
                    ${faqChatData.map((faq, index) => `
                        <p class="question" data-index="${index}">${faq.question}</p>
                    `).join('')}
                </div>
                <div class="chat-footer">
                    <button id="back-button" style="display: none;">Volver</button>
                </div>
            </div>
        `;
        // Adjuntar la plantilla al Shadow DOM
        this.shadowDOM.appendChild(template.content.cloneNode(true));
        this.addEventListeners();
    }

    // Método para añadir los event listeners
    addEventListeners() {
        this.shadowDOM.querySelector('.floating-ball').addEventListener('click', () => this.toggleChatWindow());
        this.shadowDOM.querySelectorAll('.question').forEach(item => {
            item.addEventListener('click', (event) => this.handleQuestionClick(event.target.dataset.index));
        });
        this.shadowDOM.querySelector('#back-button').addEventListener('click', () => this.showQuestions());
    }

    // Método para mostrar u ocultar la ventana de chat
    toggleChatWindow() {
        const chatWindow = this.shadowDOM.querySelector('.chat-window');
        chatWindow.style.display = chatWindow.style.display === 'none' || chatWindow.style.display === '' ? 'block' : 'none';
    }

    // Método para manejar el clic en una pregunta
    handleQuestionClick(index) {
        const faq = faqChatData[index];
        const chatContent = this.shadowDOM.querySelector('.chat-content');
        chatContent.innerHTML = `
            <p class="response"><strong>${faq.question}</strong><br>${faq.answer}</p>
        `;
        this.shadowDOM.querySelector('#back-button').style.display = 'block';
        this.removeQuestionEventListeners();
    }

    // Método para mostrar las preguntas
    showQuestions() {
        const chatContent = this.shadowDOM.querySelector('.chat-content');
        chatContent.innerHTML = faqChatData.map((faq, index) => `
            <p class="question" data-index="${index}">${faq.question}</p>
        `).join('');
        this.addQuestionEventListeners();
        this.shadowDOM.querySelector('#back-button').style.display = 'none';
    }

    // Método para añadir event listeners a las preguntas
    addQuestionEventListeners() {
        this.shadowDOM.querySelectorAll('.question').forEach(item => {
            item.addEventListener('click', (event) => this.handleQuestionClick(event.target.dataset.index));
        });
    }

    // Método para remover event listeners de las preguntas
    removeQuestionEventListeners() {
        this.shadowDOM.querySelectorAll('.question').forEach(item => {
            item.removeEventListener('click', (event) => this.handleQuestionClick(event.target.dataset.index));
        });
    }

    // Método para definir los estilos CSS
    templateCss() {
        return `
        <style>
            .floating-ball {
                position: fixed;
                bottom: 100px;
                right: 20px;
                width: 50px;
                height: 50px;
                background-color: #0000FF;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                font-size: 24px;
                cursor: pointer;
            }
            .chat-window {
                display: none;
                position: fixed;
                bottom: 160px;
                right: 20px;
                width: 300px;
                background: white;
                border: 1px solid #ccc;
                box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
                border-radius: 10px;
                overflow: hidden;
                max-height: 300px;
                display: flex;
                flex-direction: column;
            }
            .chat-header {
                background-color: #007bff;
                color: white;
                padding: 10px;
                text-align: center;
            }
            .chat-content {
                flex: 1;
                padding: 10px;
                overflow-y: auto;
            }
            .chat-content p {
                margin: 0;
                padding: 5px;
                border-bottom: 1px solid #ccc;
                cursor: pointer;
            }
            .chat-footer {
                background: #f1f1f1;
                padding: 10px;
                display: flex;
                justify-content: space-between;
            }
            .chat-footer button {
                background-color: #007bff;
                color: white;
                border: none;
                padding: 5px 10px;
                cursor: pointer;
                border-radius: 5px;
            }
            .response {
                margin-top: 10px;
                padding: 10px;
                background: #f1f1f1;
                border-radius: 5px;
            }
        </style>
        `;
    }

    // Método que se llama cuando el componente se desconecta del DOM
    disconnectedCallback() {
        this.remove();
    }
}

// Definir el nuevo elemento personalizado
window.customElements.define('faq-chat', FaqChat);
