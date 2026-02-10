document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    let counter = 0;
    const totalSlides = slides.length;

    // Hàm để hiển thị ảnh theo chỉ số (index)
    function showSlide(index) {
        // Xóa class active ở tất cả các ảnh
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Thêm class active vào ảnh hiện tại
        slides[index].classList.add('active');
    }

    // Sự kiện nút Next (Qua phải)
    nextBtn.addEventListener('click', () => {
        counter++;
        if (counter >= totalSlides) {
            counter = 0; // Quay về ảnh đầu nếu đang ở ảnh cuối
        }
        showSlide(counter);
    });

    // Sự kiện nút Prev (Qua trái)
    prevBtn.addEventListener('click', () => {
        counter--;
        if (counter < 0) {
            counter = totalSlides - 1; // Nhảy tới ảnh cuối nếu đang ở ảnh đầu
        }
        showSlide(counter);
    });

    // Tự động chạy slide sau mỗi 5 giây (Tùy chọn, thích thì bỏ comment ra)
    // setInterval(() => { nextBtn.click(); }, 5000);
});
