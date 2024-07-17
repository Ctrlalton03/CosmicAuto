const swiper = new Swiper('.slider-wrapper', {
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        620: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
  

  });