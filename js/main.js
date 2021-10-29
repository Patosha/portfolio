$(function () {

  jQuery(document).ready(function () {
    var menu = $('#menu');
    $(window).scroll(function () {
      if ($(window).scrollTop() > 70) {
        menu.addClass('header--show');
      } else {
        menu.removeClass('header--show');
      }
    });
  });

  $(".header__inner, .hero__content, .footer").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.burger, .menu__item').on('click', function () {
    $('.burger').toggleClass('burger--active');
    $('.menu').toggleClass('menu--active');

  });

  var mixer = mixitup('.portfolio__list');
});