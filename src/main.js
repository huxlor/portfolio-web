require('bootstrap-grid');
require('./styles.scss');


(function($) {

	jQuery(document).ready(function($) {
        $('.slider-offers').slick({
            infinite: true,
            slidesToShow: 1,
            arrows: false,
            dots: true,
            slidesToScroll: 1,
          });

          $('.slider-brands').slick({
            infinite: true,
            slidesToShow: 7,
            arrows: true,
            dots: false,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  slidesToShow: 5
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  slidesToShow: 3
                }
              }
            ]
          });

          $('.slider-landing').slick({
            infinite: true,
            slidesToShow: 5,
            arrows: true,
            dots: false,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 800,
                settings: {
                  arrows: false,
                  slidesToShow: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  slidesToShow: 1
                }
              }
            ]
          });
    });

    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 300,
      percentPosition: true
    });

})(jQuery);

