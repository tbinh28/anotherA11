document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    let index = 0;

    function show(i) {
        slides.forEach(img => img.classList.remove('active'));
        slides[i].classList.add('active');
    }

    nextBtn.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        show(index);
    });

    prevBtn.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        show(index);
    });
});
