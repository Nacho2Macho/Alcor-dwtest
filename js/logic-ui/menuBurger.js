function activateBurgerMenu() {
  const menuBurger = document.querySelector('.menu__burger');
  const mainBurgerWrapper = document.querySelector('.menu__burger-wrapper');
  const burgerShadow = document.querySelector('.menu__burger-shadow');
  const menuBurgerClose = document.querySelector('.menu__burger-close');
  const page = document.querySelector(".page");
  const screenWidth = window.innerWidth;

  function openMenu() {
    mainBurgerWrapper.classList.add('active');
    burgerShadow.classList.add('active');
    hiddenScroll()
  }

  function closeMenu() {
    mainBurgerWrapper.classList.remove('active');
    burgerShadow.classList.remove('active');
    showScroll()
  }

  function closeMenuOnOutsideClick(e) {
    if (!mainBurgerWrapper.contains(e.target) && !menuBurger.contains(e.target)) {
      closeMenu();
      showScroll()
    }
  }

  function hiddenScroll() {
    if (screenWidth <= 1240) {
      page.style.overflow = 'hidden';
    }
  }
  function showScroll() {
    if (screenWidth <= 1240) {
      page.style.overflow = 'auto';
    }
  }

  menuBurger.addEventListener('click', openMenu);
  menuBurgerClose.addEventListener('click', closeMenu);
  document.addEventListener('click', closeMenuOnOutsideClick);
}

document.addEventListener('DOMContentLoaded', activateBurgerMenu);
