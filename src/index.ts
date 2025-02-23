/**
 * Scroll Reveal Animation
 */
import ScrollReveal from 'scrollreveal';

const textContentItems: Array<string> = ['title', 'subtitle', 'btn'];

for (let i = 0; i < textContentItems.length; i++) {
	ScrollReveal().reveal(`.${textContentItems[i]}`, {
		reset: false,
		mobile: true,
		opacity: 0,
		origin: 'bottom',
		distance: '30%',
		easing: 'ease-in-out',
		duration: 1750,
		delay: i * 350,
	});
}
