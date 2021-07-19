new Swiper('.slider-slider', {
   autoplay: {
      //пауза между прокруткой
      delay: 1000,
      //закончить на последнем слайде
      stopLastSlide: true,
      //отключить после ручного переключения
      disableOnInteraction: false
   },
   //скорость
   speed: 1200,
   loop: true,
   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
   },
   grabCursor: true,
   slidesPerView: 3,
   autoHeight: true,
   breakpoints: {
      280: {
         slidesPerView: 1,
      },
      960: {
         slidesPerView: 2,
      },
      1440: {
         slidesPerView: 3,
      },
   },
});