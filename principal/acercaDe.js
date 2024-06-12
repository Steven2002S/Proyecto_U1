import { acercaDeTexto } from './acercaDeTexto.js';

class AcercaDe extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
                .about-container {
                    max-width: 1200px;
                    margin: 40px auto;
                    padding: 0 20px;
                    font-family: 'Nunito', sans-serif;
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                    background-color: #F0F4F8;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                section {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                hr.styled-line {
                    border: none;
                    height: 1px;
                    background: linear-gradient(to right, rgba(0, 0, 0, 0), #D3D3D3, rgba(0, 0, 0, 0));
                    margin: 20px 0;
                }

                .img-container {
                    flex: 1;
                }

                .img-container img {
                    width: 100%;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .text-container {
                    flex: 2;
                    padding: 20px;
                    background-color: #FFFFFF;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .text-container h2 {
                    font-size: 1.75rem;
                    margin-bottom: 10px;
                    color: #333333;
                    border-bottom: 2px solid #007BFF;
                    display: inline-block;
                    padding-bottom: 5px;
                }

                .text-container p {
                    font-size: 1rem;
                    line-height: 1.6;
                    color: #555555;
                    margin-bottom: 20px;
                }

                @media (max-width: 768px) {
                    section {
                        flex-direction: column;
                    }

                    .text-container {
                        padding: 10px;
                    }

                    .text-container h2 {
                        font-size: 1.5rem;
                    }

                    .text-container p {
                        font-size: 0.9rem;
                    }
                }
            </style>
            <div class="about-container">
                ${this.createSection(acercaDeTexto.acercaDe)}
                <hr class="styled-line">
                ${this.createSection(acercaDeTexto.mission)}
                <hr class="styled-line">
                ${this.createSection(acercaDeTexto.vision)}
            </div>
        `;
    }

    createSection({ title, content, imgSrc, imgAlt }) {
        return `
        <section>
            <div class="img-container">
                <img src="${imgSrc}" alt="${imgAlt}">
            </div>
            <div class="text-container">
                <h2>${title}</h2>
                <p>${content}</p>
            </div>
        </section>
        `;
    }

    disconnectedCallback() {
        this.remove();
    }
}

window.customElements.define('acerca-section', AcercaDe);
