function fix_menu(){
  $(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop(),
        presentation = $("#presentation").offset().top,
        windowSize = $(window).innerWidth();

    (scrollTop >= presentation && windowSize > 978) ? $(".menu").addClass("fixed") : $(".menu").removeClass("fixed");
  });
};

function active_links(){
  $(window).on("scroll", function(){
    $('.section').each(function(){
      var elem = $(this),
          sectionHeaderColor = elem.find(".header").css("background-color");

      if ((elem.offset().top - elem.find(".header").height() - $(".menu").height()/2) < window.pageYOffset) {
        var sectionID = elem.attr('id');

        if ($(window).innerWidth() > 978) {
          $(".section .header").removeClass("fixed");
          elem.find(".header").addClass("fixed");
        };

        $(".menu ul li").removeClass("active").find("a").css("border-color", "");
        $("a[href=#"+ sectionID +"]").css("border-color", sectionHeaderColor).parent("li").addClass("active");
      }
    });
  })
};

function hash_reference(){
  $(window).on("hashchange", function(){
    var dataPage = $(".menu > ul > li > a"),
        elem = $(this);

    $.each(dataPage, function(index, value){
      if(elem.attr("href") === window.location.hash) {
        elem.parent().addClass("active");
        elem.parent().siblings().removeClass("active");
      }
    });
  });
}

function responsive_menu_appearance() {
  $("html").on("click", function(){
    if ($(".menu").hasClass("is-visible")) {
      $(".menu").removeClass("is-visible");
      $(".menu-trigger").removeClass("menu-is-open");
    }
  });

  $(".menu-trigger").on("click", function(e){
    e.stopPropagation();
    $(this).toggleClass("menu-is-open");
    $(".menu").toggleClass("is-visible");
  });
}
