/* импортируем модули swiper */

import Swiper,{ Navigation,Pagination,Thumbs,Controller, Autoplay, EffectFade} from 'swiper';

/* импортируем модули табов и бургер-меню */

import { tabs } from './modules/tabs';
import { heandlerBurger } from './modules/burger';

const headerBurger=document.querySelector('.header__burger')
const headerMenu=document.querySelector('.header__nav')

Swiper.use([Navigation,Pagination,Thumbs,Controller, Autoplay, EffectFade ]);

/* инициализируем слайдер hero */

var galleryTop=new Swiper('.gallery-top',{
	spaceBetween: 10,
	effect: "fade",
	
	fadeEffect: {
		crossFade: true
	},
	navigation: {
		nextEl: '.swiper__button-next',
		prevEl: '.swiper__button-prev',
	},

	loop: false,
	loopedSlides: 1
});
var galleryThumbs=new Swiper('.gallery-thumbs',{
	spaceBetween: 10,
	
	slidesPerView: 1,
	touchRatio: 0.2,
	slideToClickedSlide: true,
	loop: false,
	disableOnInteraction: true,
	loopedSlides: 1,
	autoplay: true,
	autoplay: {
		delay: 5000,
	},
	effect: "fade",
	fadeEffect: {
		crossFade: true
	},
	pagination: {
		el: ".swiper__pagination",
		clickable: true,
		renderBullet: function (index,className) {
			return '<span class="'+className+'">0'+(index+1)+"</span>";
		},
	},
});
galleryTop.controller.control=galleryThumbs;
galleryThumbs.controller.control=galleryTop;

/* вызываем функию табов */

tabs()

/* вызываем обработчик бургера */

heandlerBurger(headerBurger,headerMenu,'header__nav-active')






//# sourceMappingURL=main.js.map
