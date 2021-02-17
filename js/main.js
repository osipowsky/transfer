new Swiper('.swiper-container-s2', {
   slidesPerView: 2,
   slidesPerGroup: 1,
   spaceBetween: 30,
});
new Swiper('.swiper-container-s4', {
   slidesPerView: 1,
   slidesPerGroup: 1,
   spaceBetween: 30,
});
new Swiper('.swiper-container-s3', {
   slidesPerView: 2,
   slidesPerGroup: 2,
   spaceBetween: 30,
});

new Swiper('.swiper-container', {
   slidesPerView: 3,
   slidesPerGroup: 3,
   // spaceBetween: 30,
   // navigation: {
   //    nextEl: '.swiper-button-next',
   //    prevEl: '.swiper-button-prev'
   // },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
         slidesPerGroup: 1,
      },
      900: {
         slidesPerView: 2,
         slidesPerGroup: 2,
      },
      1330: {
         slidesPerView: 3,
         slidesPerGroup: 3,
      },
   }
});


document.getElementById('header__menu-btn').onclick = function () {
   document.getElementById('header').classList.toggle('header--active');
};
document.getElementById('advantage__link').onclick = function () {
   document.getElementById('advantage__more-info').classList.toggle('advantage__more-info-active');
};
document.getElementById('service__link').onclick = function () {
   document.getElementById('service__no').classList.toggle('service__no--active');
};