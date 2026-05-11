// 1. CHỨC NĂNG ĐỔI MÀU GIAO DIỆN SÁNG/TỐI
const btn = document.getElementById('theme-toggle');
const body = document.body;

btn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    
    // Đổi icon
    btn.textContent = newTheme === 'dark' ? '🌙' : '☀️';
});

// 2. CHỨC NĂNG BẤM MỞ KỸ NĂNG (ACCORDION)
const accordions = document.querySelectorAll('.accordion-btn');

accordions.forEach(acc => {
    acc.addEventListener('click', function() {
        // Thay đổi class active để đổi dấu + thành -
        this.classList.toggle('active');
        
        // Lấy phần nội dung ngay bên dưới
        const content = this.nextElementSibling;
        
        // Đóng/Mở mượt mà
        if (content.classList.contains('show')) {
            content.classList.remove('show');
        } else {
            content.classList.add('show');
        }
    });
});
