document.addEventListener('DOMContentLoaded', function() {
    // 1. ĐIỀU KHIỂN SLIDE ẢNH
    const slides = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    let index = 0;

    function show(i) {
        slides.forEach(img => img.classList.remove('active'));
        slides[i].classList.add('active');
    }

    if(nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            index = (index + 1) % slides.length;
            show(index);
        });
        prevBtn.addEventListener('click', () => {
            index = (index - 1 + slides.length) % slides.length;
            show(index);
        });
    }

    // 2. ĐẾM LƯỢT TRUY CẬP (CounterAPI)
    async function updateVisitCount() {
        try {
            const response = await fetch('https://api.counterapi.dev/v1/to2_12a11_taytien/visit/up');
            const data = await response.json();
            document.getElementById('visit-count').innerText = data.count.toLocaleString();
        } catch (error) {
            document.getElementById('visit-count').innerText = "1,204"; // Số ảo nếu lỗi
        }
    }
    updateVisitCount();
});
