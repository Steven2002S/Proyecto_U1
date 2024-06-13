// Función que devuelve los estilos CSS
export function templateCss() {
    return `
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
            body {
                font-family: 'Nunito', sans-serif;
            }
            .page-header {
                position: relative;
                width: 100%;
                height: 50vh; /* Use full viewport height */
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                overflow: hidden;
            }

            .page-header img {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100%;
                height: auto;
                transform: translate(-50%, -50%);
                z-index: -1;
                opacity: 0;
                transition: opacity 1s ease-in-out;
            }

            .page-header img.active {
                opacity: 1;
            }

            .page-header::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.4)); 

            }

            .page-header .container {
                position: relative;
                z-index: 1;
            }

            .header-text {
                z-index: 2;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            }

            .header-text p {
                color: white;
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

// Función que devuelve el HTML dinámico sin join
export function templateHTML(imgSrcs) {
    let images = '';
    for (let src of imgSrcs) {
        images += `<img src="${src}" class="carousel-image" alt="Carrusel de Servicios">`;
    }

    return `
        <div class="page-header">
            ${images}
            <div class="container">
                <div class="d-flex flex-column align-items-center justify-content-center header-text">
                    <p class="m-0 text-uppercase font-bold text-white" style="font-size: 36px;">SERVICIOS</p>
                </div>
            </div>
        </div>
    `;
}
