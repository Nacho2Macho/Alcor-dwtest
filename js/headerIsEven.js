// //headerIsEven.js
// // Получаем элементы заголовка и логотипов
// const header = $('header');
// const logoImages = $('.header__logo-image');

// // Проверяем класс заголовка и скрываем/показываем соответствующие логотипы с плавной анимацией
// if (header.hasClass('light')) {
//     // Если заголовок имеет класс "light", скрываем первый логотип и показываем второй логотип
//     if (logoImages.length > 1) {
//         logoImages.eq(0).fadeOut();
//         logoImages.eq(1).fadeIn();
//     }
// } else if (header.hasClass('dark')) {
//     // Если заголовок имеет класс "dark", скрываем второй логотип и показываем первый логотип
//     if (logoImages.length > 0) {
//         logoImages.eq(0).fadeIn();
//         logoImages.eq(1).fadeOut();
//     }
// }