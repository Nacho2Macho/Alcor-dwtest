document.addEventListener('DOMContentLoaded', () => {
	const screenWidth = window.innerWidth;
	if (screenWidth >= 1241) {
		const accordions = document.querySelectorAll('.details__information-list');
		if (accordions.length > 0) {
			const firstAccordion = accordions[0];
			const firstControl = firstAccordion.querySelector('.details__information-item');
			const firstContent = firstAccordion.querySelector('.details__information-content');
			openAccordion(firstAccordion, firstControl, firstContent);
		}
		accordions.forEach(accordion => {
			accordion.addEventListener('click', (e) => {
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
			accordions.forEach(accordion => {
				accordion.classList.remove('open');
				toggleAriaAttributes(accordion, false);
				toggleMaxHeight(accordion, null);
			});
		}
		function openAccordion(accordion, control, content) {
			console
			accordion.classList.add('open');
			toggleAriaAttributes(accordion, true);
			toggleMaxHeight(accordion, content.scrollHeight + 'px');
		}
		function toggleAriaAttributes(accordion, expanded) {
			const control = accordion.querySelector('.details__information-item');
			const content = accordion.querySelector('.details__information-content');
			control.setAttribute('aria-expanded', expanded);
			content.setAttribute('aria-hidden', !expanded);
		}
		function toggleMaxHeight(accordion, value) {
			const content = accordion.querySelector('.details__information-content');
			content.style.maxHeight = value;
		}
	}
	else {
		const accordions = document.querySelectorAll('.details__information-list--tablet');
		if (accordions.length > 0) {
			const firstAccordion = accordions[0];
			const firstControl = firstAccordion.querySelector('.details__information-item--tablet');
			const firstContent = firstAccordion.querySelector('.details__information-content--tablet');
			openAccordion(firstAccordion, firstControl, firstContent);
		}
		accordions.forEach(accordion => {
			accordion.addEventListener('click', (e) => {
				const self = e.currentTarget;
				const control = self.querySelector('.details__information-item--tablet');
				const content = accordion.querySelector('.details__information-content--tablet');

				if (!self.classList.contains('open')) {
					closeAllAccordions(accordions);
					openAccordion(self, control, content);
				}
			});
		});
		function closeAllAccordions(accordions) {
			accordions.forEach(accordion => {
				accordion.classList.remove('open');
				toggleAriaAttributes(accordion, false);
				toggleMaxHeight(accordion, null);
			});
		}
		function openAccordion(accordion, control, content) {
			console
			accordion.classList.add('open');
			toggleAriaAttributes(accordion, true);
			toggleMaxHeight(accordion, content.scrollHeight + 'px');
		}
		function toggleAriaAttributes(accordion, expanded) {
			const control = accordion.querySelector('.details__information-item--tablet');
			const content = accordion.querySelector('.details__information-content--tablet');
			control.setAttribute('aria-expanded', expanded);
			content.setAttribute('aria-hidden', !expanded);
		}
		function toggleMaxHeight(accordion, value) {
			const content = accordion.querySelector('.details__information-content--tablet');
			content.style.maxHeight = value;
		}
	}
});