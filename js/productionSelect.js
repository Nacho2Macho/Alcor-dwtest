document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.details__information-list');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.details__information-item');
			const content = self.querySelector('.details__information-content');

			if (!self.classList.contains('open')) {
				closeAllAccordions(accordions);
				openAccordion(self, control, content);
			}
		});
	});

	function closeAllAccordions(accordions) {
		accordions.forEach(acc => {
			acc.classList.remove('open');
			acc.querySelector('.details__information-item').setAttribute('aria-expanded', 'false');
			acc.querySelector('.details__information-content').setAttribute('aria-hidden', 'true');
			acc.querySelector('.details__information-content').style.maxHeight = null;
		});
	}

	function openAccordion(accordion, control, content) {
		accordion.classList.add('open');
		control.setAttribute('aria-expanded', true);
		content.setAttribute('aria-hidden', false);
		content.style.maxHeight = content.scrollHeight + 'px';
	}
});
