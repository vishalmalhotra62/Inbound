$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".nn").css("background", "#C97AEF");
      $(".nn a").css("color", "white");
    } else {
      $(".nn").css("background", "none");
      $(".nn a").css("color", "#0E0E0E");
    }
  });

  var c = true;
  $(".navbar-toggler").click(function () {
    if (c) {
      $(".navbar-toggler").html('<i class="fa-solid fa-xmark"></i>');
      $(".navbar").css({ backgroundColor: "#F4F4F4" });
      $(".navbar-brand").html('<img src="media/icons/logo_pruple.svg" alt="">');
      c = false;
    } else {
      $(".navbar-toggler").html('<img src="media/icons/menu.svg" alt="">');
      $(".navbar").css({ backgroundColor: "transparent" });
      $(".navbar-brand").html('<img src="media/icons/logo.svg" alt="">');

      c = true;
    }
  });

  var pre = 0;
  $(".slider")
    .slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      arrows: true,
      centerPadding: "60px",
      centerMode: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            centerPadding: "0px",

            infinite: true,
          },
        },
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: "80px",
            infinite: true,
          },
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: "21px",
            centerMode: true,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    })
    .on("setPosition", function () {
      resizeSlider();
      // $('.slick-slide').removeClass('slick-current');
      $(".slick-slide").each(function (i, e) {
        var pre = i - 1;
        if ($(e).hasClass("slick-current")) {
          var id = i - 1;

          $(".slick-slide").eq(id).addClass("slick-current");
          $(".slick-slide")
            .eq(id - 1)
            .removeClass("slick-current");
        }
      });
    });
  $(".slick-prev").html(
    '<i class="fas fa-angles-left" style="color:#0E0E0E"></i>'
  );
  $(".slick-next").html(
    '<i class="fas fa-angles-right" style="color:#0E0E0E"></i>'
  );
  $(window).on("resize", function (e) {
    resizeSlider();
  });

  var slickHeight = $(".slick-track").outerHeight();

  var slideHeight = $(".slick-track").find(".slick-slide").outerHeight();

  function resizeSlider() {
    $(".slick-track")
      .find(".slick-slide .slide-wrap")
      .css("height", slickHeight + "px");
  }
});
