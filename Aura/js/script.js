document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        // Настройки
        loop: true, // Бесконечный цикл
        pagination: {
            el: '.swiper-pagination', // Пагинация
            clickable: true, // Кликабельные точки
        },
        navigation: {
            nextEl: '.swiper-button-next', // Кнопка "вперед"
            prevEl: '.swiper-button-prev', // Кнопка "назад"
        },
    });
});