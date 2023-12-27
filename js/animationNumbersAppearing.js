const animateValue = (element) => {
    const start = parseInt(element.dataset.start);
    const end = parseInt(element.dataset.end);
    const duration = parseInt(element.dataset.duration);

    if (start === end) return;

    let current = start;
    const increment = end > start ? 1 : -1;
    const range = Math.abs(end - start);
    const startTime = performance.now();

    const update = () => {
        const currentTime = performance.now();
        const elapsed = currentTime - startTime;
        current = start + Math.floor(Math.min((elapsed / duration) * range, range)) * increment;
        element.textContent = current;

        if ((increment > 0 && current < end) || (increment < 0 && current > end)) {
            requestAnimationFrame(update);
        } else {
            element.textContent = end;
        }
    };

    requestAnimationFrame(update);
};

const elements = document.querySelectorAll('.about__subtitle-text');
elements.forEach((element) => {
    animateValue(element);
});