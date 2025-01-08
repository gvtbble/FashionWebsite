(function ($) {

  "use strict";


  var initSearch = function () {
    $(".user-items .search-item").click(function () {
      $(".search-box").toggleClass('active');
      $(".search-box .search-input").focus();
    });
    $(".close-button").click(function () {
      $(".search-box").toggleClass('active');
    });

  };

  // init Chocolat light box
  var initChocolat = function () {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }

  var initProductQty = function () {

    $('.product-qty').each(function () {

      var $el_product = $(this);
      var quantity = 0;

      $el_product.find('.quantity-right-plus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($el_product.find('#quantity').val());
        $el_product.find('#quantity').val(quantity + 1);
      });

      $el_product.find('.quantity-left-minus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($el_product.find('#quantity').val());
        if (quantity > 0) {
          $el_product.find('#quantity').val(quantity - 1);
        }
      });

    });

  }


  var initSlider = function () {

    $('.product-carousel').each(function () {
      var sectionId = $(this).attr('id');
      var swiper = new Swiper("#" + sectionId + " .swiper", {
        slidesPerView: 4,
        spaceBetween: 24,
        navigation: {
          nextEl: '.swiper-arrow-right',
          prevEl: '.swiper-arrow-left',
        },
        pagination: {
          el: "#" + sectionId + " .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          999: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        },
      });
    })

    $('.trending-carousel').each(function () {
      var sectionId = $(this).attr('id');
      var swiper = new Swiper("#" + sectionId + " .swiper", {
        slidesPerView: 4,
        spaceBetween: 24,
        navigation: {
          nextEl: '.swiper-best-arrow-right',
          prevEl: '.swiper-best-arrow-left',
        },
        pagination: {
          el: "#" + sectionId + " .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          999: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        },
      });
    })



    // product single page
    var thumb_slider = new Swiper(".product-thumbnail-slider", {
      loop: true,
      slidesPerView: 3,
      autoplay: true,
      direction: "vertical",
      spaceBetween: 10,
    });

    var large_slider = new Swiper(".product-large-slider", {
      loop: true,
      slidesPerView: 1,
      autoplay: true,
      effect: 'fade',
      thumbs: {
        swiper: thumb_slider,
      },
    });


    var swiper = new Swiper('.review-swiper', {
      navigation: {
        nextEl: '.swiper-arrow-next',
        prevEl: '.swiper-arrow-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });



    var swiper = new Swiper(".swiper-carousel", {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-carousel .swiper-right',
        prevEl: '.swiper-carousel .swiper-left',
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });

    var swiper = new Swiper(".swiper-slideshow", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 700,
      loop: true,
      navigation: {
        nextEl: '.swiper-slideshow .swiper-right',
        prevEl: '.swiper-slideshow .swiper-left',
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

  };

  // init jarallax parallax
  var initJarallax = function () {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }

  // document ready
  $(document).ready(function () {
    initSearch();
    initSlider();
    initChocolat();
    initProductQty();
    initJarallax();

  }); // document ready

})(jQuery);