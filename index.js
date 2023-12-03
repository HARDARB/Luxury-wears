
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
      centeredSlides: true,
      autoplay: {
      delay: 2500,
      disableOnInteraction: false,},
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

//   Breaking points 
breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


  // Scroll reveal for the whole body
  ScrollReveal({
    reset: true,
    distance: "150px",
    duration: 2500,
    delay: 400
  });
  

  ScrollReveal().reveal('.stagger',{delay: 300, origin: 'bottom', interval: 500});


  ScrollReveal().reveal('.from-right',{delay: 300, origin: 'right', });
  ScrollReveal().reveal('.from-left ',{delay: 400, origin: 'left',});
  ScrollReveal().reveal('.from-bottom ',{delay: 300, origin: 'bottom',});
  ScrollReveal().reveal('.from-top',{delay: 400, origin: 'top',});

  ScrollReveal().reveal('.graphics-text',{delay: 300, origin: 'right', });
  ScrollReveal().reveal('.graphicsstagger',{delay: 400, origin: 'left',});
  