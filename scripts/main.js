'use strict';

$(function(){
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    var menuSize = 0;

    if ($(window).innerWidth() < 978) {
      menuSize = $(".menu-trigger").height();
    }
    else {
      if ($(".section"+target).find(".header").length > 0) {
        menuSize = $(".menu").height();
      }
    }

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-menuSize
    }, 700, 'swing', function () {
        window.location.hash = target;
    });
  });

  fix_menu();
  active_links();
  hash_reference();
  responsive_menu_appearance();
});
