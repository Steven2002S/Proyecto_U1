// image-carousel.js

// Importar el template desde el DOM
const template = document.getElementById('carousel-template').content.cloneNode(true);

// Definir la clase ImageCarousel
export default class ImageCarousel extends HTMLElement {
    constructor() {
        super();

        // Crear un Shadow DOM para encapsular el componente
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template);

        // Obtener la lista de imágenes desde el atributo 'images'
        const imagesAttr = this.getAttribute('images');
        const images = imagesAttr.split(',');

        // Seleccionar el contenedor de imágenes dentro del template clonado
        this.carouselImagesContainer = this.shadowRoot.querySelector('.carousel-images');

        // Mostrar las imágenes
        images.forEach((imageSrc, index) => {
            const img = document.createElement('img');
            img.src = imageSrc.trim(); // Trim para eliminar espacios en blanco alrededor de la URL
            img.alt = `Image ${index + 1}`;
            if (index === 0) {
                img.classList.add('active'); // Añadir la clase 'active' a la primera imagen
            }
            this.carouselImagesContainer.appendChild(img);
        });

        // Inicializar el carrusel
        this.currentImageIndex = 0;
        this.images = this.carouselImagesContainer.querySelectorAll('img');
        this.images[this.currentImageIndex].classList.add('active');

        // Configurar intervalo para cambiar las imágenes cada 3 segundos
        setInterval(() => {
            this.nextImage();
        }, 3000);
    }

    // Método para mostrar la siguiente imagen
    nextImage() {
        this.images[this.currentImageIndex].classList.remove('active');
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.images[this.currentImageIndex].classList.add('active');
    }

    // Método para mostrar la imagen anterior (no se utiliza en este ejemplo, pero puedes implementarlo si lo deseas)
    prevImage() {
        this.images[this.currentImageIndex].classList.remove('active');
        this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        this.images[this.currentImageIndex].classList.add('active');
    }
}
