const imageGallery = [{
        fullSize: 'images/image1.jpg',
        thumbnail: 'images/image1.jpg',
        caption: 'A Gentleman in a Suit'
    },
    {
        fullSize: 'images/image2.jpg',
        thumbnail: 'images/image2.jpg',
        caption: 'A Good Fashionista Girl '
    },
    {
        fullSize: 'images/image3.jpg',
        thumbnail: 'images/image3.jpg',
        caption: 'A rose flower symbolizes love, beauty, and elegance.'
    },
];

document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const caption = document.querySelector('.caption');
    const closeBtn = document.querySelector('.close-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;

    imageGallery.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.thumbnail;
        imgElement.alt = image.caption;
        imgElement.classList.add('thumbnail');
        imgElement.dataset.index = index;
        galleryContainer.appendChild(imgElement);
    });

    // Open lightbox
    galleryContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('thumbnail')) {
            currentIndex = parseInt(event.target.dataset.index);
            showLightbox();
        }
    });

    function showLightbox() {
        const image = imageGallery[currentIndex];
        lightboxImg.src = image.fullSize;
        caption.textContent = image.caption;
        lightbox.classList.add('active');
        updateNavButtons();
    }

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < imageGallery.length - 1) {
            currentIndex++;
            showLightbox();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            showLightbox();
        }
    });

    function updateNavButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === imageGallery.length - 1;
    }
});