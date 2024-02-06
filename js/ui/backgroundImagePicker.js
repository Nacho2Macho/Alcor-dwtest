const slideWrappers = document.querySelectorAll('.main__slide-wrapper');

slideWrappers.forEach(slide => {
    const slideMask = slide.querySelector('.main__slide-mask');
    const imageSrc = slideMask.getAttribute('data-image');
    slideMask.style.backgroundImage = `url(${imageSrc})`;
});
