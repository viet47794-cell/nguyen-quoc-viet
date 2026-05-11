// 1. CHỨC NĂNG ĐỔI MÀU GIAO DIỆN SÁNG/TỐI (THEME TOGGLE)
const btn = document.getElementById('theme-toggle');
const body = document.body;

btn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    
    // Đổi icon mặt trời / mặt trăng cho ngầu
    btn.textContent = newTheme === 'dark' ? '🌙' : '☀️';
});

// 2. CHỨC NĂNG BẤM MỞ KỸ NĂNG (ACCORDION)
const accordions = document.querySelectorAll('.accordion-btn');

accordions.forEach(acc => {
    acc.addEventListener('click', function() {
        // Toggle class 'active' để đổi dấu + thành -
        this.classList.toggle('active');
        
        // Lấy phần tử nội dung ngay bên dưới nút bấm
        const content = this.nextElementSibling;
        
        // Toggle class 'show' để hiện/ẩn nội dung với hiệu ứng mượt
        if (content.classList.contains('show')) {
            content.classList.remove('show');
        } else {
            // Đóng các tab khác lại nếu muốn (Tùy chọn, hiện tại đang để mở nhiều tab cùng lúc được)
            content.classList.add('show');
        }
    });
});
