document.addEventListener('DOMContentLoaded', () => {
    const bannerImage = document.getElementById('banner-image');
    const bannerTitle = document.getElementById('banner-title');
    const bannerText = document.getElementById('banner-text');
    const bannerPrev = document.getElementById('banner-prev');
    const bannerNext = document.getElementById('banner-next');

    const slides = [
        {
            image: 'img/photo-paris.avif',
            title: 'Paris com charme clássico',
            text: '7 dias com gastronomia, museus e a atmosfera da cidade luz.'
        },
        {
            image: 'img/photo-tokio.avif',
            title: 'Tóquio entre tradição e tecnologia',
            text: '10 dias para explorar templos, luzes urbanas e o Monte Fuji.'
        },
        {
            image: 'img/photo-newyork.avif',
            title: 'Nova York cheia de energia',
            text: '6 dias com Manhattan, Broadway e mirantes inesquecíveis.'
        },
        {
            image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
            title: 'Gramado com clima de serra',
            text: '5 dias de gastronomia, charme e paisagens acolhedoras.'
        }
    ];

    if (bannerImage && bannerTitle && bannerText && bannerPrev && bannerNext) {
        let currentSlide = 0;

        const renderSlide = (index) => {
            const slide = slides[index];
            bannerImage.src = slide.image;
            bannerImage.alt = slide.title;
            bannerTitle.textContent = slide.title;
            bannerText.textContent = slide.text;
        };

        const goToSlide = (direction) => {
            currentSlide = (currentSlide + direction + slides.length) % slides.length;
            renderSlide(currentSlide);
        };

        bannerPrev.addEventListener('click', () => goToSlide(-1));
        bannerNext.addEventListener('click', () => goToSlide(1));
        renderSlide(currentSlide);
    }
});
