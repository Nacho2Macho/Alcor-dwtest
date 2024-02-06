let swiper = null;

function sliderThemeHandler(activeSlideIndex) {
  const header = document.querySelector(".header");
  const nextEl = document.querySelector('.main__swiper-next');
  const prevEl = document.querySelector('.main__swiper-prev');

  if (activeSlideIndex % 2 === 0) {
    header.classList.remove('light');
    header.classList.add('dark');
    nextEl.style.color = 'black';
    prevEl.style.color = 'black';
  } else {
    header.classList.remove('dark');
    header.classList.add('light');
    nextEl.style.color = 'white';
    prevEl.style.color = 'white';
  }
}

const initSwiper = () => {
  swiper = new Swiper(".main__swiper", {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    simulateTouch: false,
    slidesPerGroup: 1,
    spaceBetween: 30,
    speed: 800,
    hashNavigation: true,
    mousewheel: {
      sensetivity: 1,
    },
    pagination: {
      el: '.main__swiper-pagination',
      type: 'bullets',
      clickable: true,
      direction: 'vertical',
      renderBullet: function (index, className) {
        let slideText = this.slides[index].getAttribute("data-name-slide");
        return (
          '<span class="' + className + '" data-name-slide="' + slideText + '">' +
          '<span class="main__swiper-name-slide" data-name-slide="' + slideText + '"></span>' +
          "</span>"
        );
      },
    },
    navigation: {
      nextEl: '.main__swiper-next',
      prevEl: '.main__swiper-prev',
    },
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

  sliderThemeHandler(swiper.activeIndex + 1)

  swiper.on('slideChange', function () {
    const activeSlideIndex = this.activeIndex + 1;
    sliderThemeHandler(activeSlideIndex)
  });
};

const destroySwiper = () => {
  if (swiper !== null) {
    swiper.destroy(true, true);
    swiper = null;
  }
};

const handleResize = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 1240) {
    destroySwiper();
  } else {
    if (swiper === null) {
      initSwiper();
    }
  }
};

handleResize();
window.addEventListener('resize', handleResize);

if (document.querySelector(".about")) {
  const aboutSwiper = new Swiper(".about__wrapper-slider", {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    simulateTouch: true,
    grabCursor: true,
    slidesPerGroup: 1,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      nextEl: '.about__swiper-next',
      prevEl: '.about__swiper-prev',
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      745: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1241: {
        slidesPerView: 3,
      }
    }
  })
}

if (document.querySelector(".history")) {
  const historySwiper = new Swiper(".history__slider", {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    simulateTouch: false,
    grabCursor: false,
    slidesPerGroup: 1,
    spaceBetween: 0,
    speed: 800,
    navigation: {
      nextEl: '.history__swiper-next',
      prevEl: '.history__swiper-prev',
    },
    on: {
      init: function () {
        const activeIndex = this.activeIndex;
        const lineItems = document.querySelectorAll(".history__line-item");
        lineItems[activeIndex].classList.add("active");
      },
      slideChange: function () {
        const activeIndex = this.activeIndex;
        const lineItems = document.querySelectorAll(".history__line-item");
        lineItems.forEach(function (item) {
          item.classList.remove("active");
        });
        lineItems[activeIndex].classList.add("active");
        historySwiper.slideTo(activeIndex);
      }
    }
  });

  const lineItems = document.querySelectorAll(".history__line-item");
  lineItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      lineItems.forEach(function (item) {
        item.classList.remove("active");
      });
      item.classList.add("active");
      historySwiper.slideTo(index);
    });
  });
}

if (document.querySelector(".partners")) {
  const partnersSwiper = new Swiper(".partners__wrapper-slider", {
    observer: true,
    observeParents: true,
    slidesPerGroup: 6,
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerColumnFill: "column",
    autoHeight: false,
    simulateTouch: true,
    grabCursor: true,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      nextEl: '.partners__swiper-next',
      prevEl: '.partners__swiper-prev',
    },
    breakpoints: {
      360: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        slidesPerColumn: 2,
      },
      745: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        slidesPerColumn: 2,
      },
      1241: {
        slidesPerGroup: 6,
        slidesPerView: 3,
        slidesPerColumn: 2,
      }
    },
    grid: {
      rows: 2,
    }
  })
}
