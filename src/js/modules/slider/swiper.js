import Swiper from "swiper";

/* DOC: https://swiperjs.com/demos */

/* Слайдер */
const swiper = (container, config) => {
  const SW = new Swiper(container, config);
}

export default swiper;

// new Swiper('.image-slider', {
// 	// navigation: {
// 	// 	// Стрелки
// 	// 	nextEl: '.swiper-button-next',
// 	// 	prevEl: '.swiper-button-prev'

// 	// },
// 	// pagination:{
// 	// 	el: '.swiper-pagination',
// 	// 	clickable: true,
// 	// 	dynamicBullets: true,
// 	// 	// type: 'fraction',
// 	// 	// renderFraction: function (currentClass, totalClass){
// 	// 	// 	return''
// 	// 	// }
// 	// },
// 	scrollbar: {
// 		el: '.swiper-scrollbar',
// 		draggable: true
// 	}
// });
