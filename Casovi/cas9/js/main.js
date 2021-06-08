function equalHeight() {
    $('.js-card').matchHeight();
}

function dropdown() {
    $('select').selectric();
}

function slider() {
    $('.js-slider').slick({
        infinite: true,
        slidesToShow: 3
    });
}

function sliderSwiper() {
    var swiper = new Swiper('.js-swiper', {
        // Optional parameters
        slidesPerView: 3,
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

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
}

$('.inp-btn').on('click', function() {
    $(this).parent().addClass('hide');
});

sliderSwiper();
slider();
dropdown();
equalHeight();