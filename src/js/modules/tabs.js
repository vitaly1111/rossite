/* импортируем модули swiper */

import Swiper,{ Navigation,Autoplay,Controller } from 'swiper';

/* код переключения табов */
export const tabs=() => {

	const tabsHandlerElems=document.querySelectorAll('[data-tabs-handler]'); /* получаем массив полей указателей табов */
	const tabsContentElems=document.querySelectorAll('[data-tabs-field]') /* получем массив полей данных табов */;


	const handlerElems=[...tabsHandlerElems]

	
	for (let btn of handlerElems) {
		/* навешиваем события по клику на табы */
		btn.addEventListener('click',() => {

			/* меняем класс active указателей табов */

			tabsHandlerElems.forEach((item,i) => {

				item.classList.remove('tabs__handler-active');
				if (item.dataset.tabsHandler==btn.dataset.tabsHandler||item.dataset.tabsHandler==btn.dataset.linksHandler) {
					item.classList.add('tabs__handler-active');
				}

			})

			/* меняем класс visible полей данных */
			tabsContentElems.forEach(cont => {
				if (cont.dataset.tabsField===btn.dataset.tabsHandler) {
					cont.classList.add('tabs__field-visible')
				} else {
					cont.classList.remove('tabs__field-visible')
				}
			})

		})
	}

	/* инициализируем слайдер товаров на табах */

	Swiper.use([Navigation,Autoplay,Controller]);

	var goods=new Swiper('.goods__slider',{
		spaceBetween: 30,
		slidesPerView: 4,
		autoplay: true,
		observeParents: true,
		observer:true,
		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: '.goods-button-next',
			prevEl: '.goods-button-prev',
		},
		breakpoints: {
			// when window width is >= xxpx
			360: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			475: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			1366: {
				slidesPerView: 4,
				spaceBetween: 20
			}
		}
	}); 
}
