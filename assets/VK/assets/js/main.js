$( document ).ready(function() {
    $('.center').slick({
        centerMode: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    centerMode: true,
                    variableWidth: false
                }
            },
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              variableWidth: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              variableWidth: false
            }
          }
        ]
      });
});