$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    speed: 1500,
    cssEase: "linear",
  });
});
