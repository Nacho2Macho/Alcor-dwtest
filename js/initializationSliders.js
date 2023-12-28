if (document.querySelector(".main")) {
    const header = document.querySelector('.header');
    const swiper = new Swiper(".main__swiper", {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        simulateTouch: false,
        slidesPerGroup: 1,
        spaceBetween: 30,
        speed: 800,
        pagination: {
            el: '.main__swiper-pagination',
            type: 'bullets',
            clickable: true,
            direction: 'vertical',
            renderBullet: function (index, className) {
                let slideText = this.slides[index].getAttribute("data-name-slide");
                return (
                    '<span class="' +
                    className +
                    '" data-name-slide="' +
                    slideText +
                    '">' +
                    '<span class="main__swiper-name-slide" data-name-slide="' + slideText + '"></span>' +
                    "</span>"
                );
            },
        },
        navigation: {
            nextEl: '.main__swiper-next',
            prevEl: '.main__swiper-prev',
        },
        hashNavigation: true,
        on: {
            slideChange: function () {
                let currentSlide = this.slides[this.activeIndex];
                let mainMenu = document.querySelector(".main__menu");
                if (currentSlide.getAttribute('data-hash') !== 'main-slide') {
                    mainMenu.style.opacity = '0';
                } else {
                    mainMenu.style.opacity = '1';
                }
            },
        },
    });
    // header.classList.add('light');
    // header.classList.add('light');
    swiper.on('slideChange', function () {
        const activeSlideIndex = this.activeIndex + 1;

        if (activeSlideIndex % 2 === 0) {
            header.classList.remove('light');
            header.classList.add('dark');
        } else {
            header.classList.remove('dark');
            header.classList.add('light');
        }
    });
}
if(document.querySelector(".about")) {
    const aboutSwiper = new Swiper(".about__wrapper-slider", {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        simulateTouch: false,
        slidesPerGroup: 1,
        spaceBetween: 30,
        speed: 800,
        navigation: {
            nextEl: '.about__swiper-next',
            prevEl: '.about__swiper-prev',
        },
    })
}
