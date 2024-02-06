const animateValue = (element) => {
    const start = parseInt(element.dataset.start);
    const end = parseInt(element.dataset.end);
    const duration = parseInt(element.dataset.duration);
    const slowdownFactor = 2;

    if (start === end) return;

    let current = start;
    const increment = end > start ? 1 : -1;
    const range = Math.abs(end - start);
    const startTime = performance.now();

    const update = () => {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        const progress = elapsed / duration;
        const slowedProgress = Math.pow(progress, slowdownFactor);
        current = start + Math.floor(slowedProgress * range) * increment;
        element.textContent = current;
        if ((increment > 0 && current < end) || (increment < 0 && current > end)) {
            requestAnimationFrame(update);
        } else {
            element.textContent = end;
        }
    };

    requestAnimationFrame(update);
};

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const handleIntersection = (entries, observer) => {

    const screenWidth = window.innerWidth;
    entries.forEach(entry => {
        const targetElements = entry.target.querySelectorAll('.about__subtitle-text');

        if (screenWidth <= 1241) {

            targetElements.forEach(element => {
                element.textContent = element.dataset.end;
            });
            return
        }


        if (entry.isIntersecting) {
            targetElements.forEach(animateValue);
        } else {
            targetElements.forEach(element => {
                setTimeout(() => {
                    element.textContent = element.dataset.start;
                }, 800)
            });
        }
    });
};

const observer = new IntersectionObserver(handleIntersection, options);

const slides = document.querySelectorAll('.main__slide-about');
slides.forEach(slide => {
    observer.observe(slide);
});
