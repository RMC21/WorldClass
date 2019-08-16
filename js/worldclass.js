$( document ).ready(function() {

  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 0)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("nav-cambio");
      $(".wc").removeClass("oculto");
      barra();
    } else {
      $("#mainNav").removeClass("nav-cambio");
      $(".wc").addClass("oculto");
      barra();
    };
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse); 

  $('#destinos').on('click', 'a', function() {
    $('.destinos').removeClass('active');
    var selected = $(this);
    selected.toggleClass('active');
    });

  $('#secnav').on('click', 'a', function() {
    $('.navpromo, .navnac, .navinter, .navpaq').removeClass('active');
    var selected = $(this);
    selected.addClass('active');
    });

  $('.s-navpromo').on('click', function() {
    $('.navpromo, .navnac, .navinter, .navpaq').removeClass('active');
    $('.navpromo').addClass('active');
    });

  $('.s-navnac').on('click', function() {
    $('.navpromo, .navnac, .navinter, .navpaq').removeClass('active');
    $('.navnac').addClass('active');
    });

  $('.s-navinter').on('click', function() {
    $('.navpromo, .navnac, .navinter, .navpaq').removeClass('active');
    $('.navinter').addClass('active');
    });

  $('.s-navpaq').on('click', function() {
    $('.navpromo, .navnac, .navinter, .navpaq').removeClass('active');
    $('.navpaq').addClass('active');
    });

$('.call').on('click', function() {
    $('.full-section').toggleClass('aparece');
    $('#pagina').toggleClass('noscroll');
    $('.b-nosotros').trigger('click');
    });

function barra() {
  if ($('.navowl').hasClass('active')) {
    $('#secnav').addClass('mostrar');
  } else {
    $('#secnav').removeClass('mostrar');
  };
}

$('.owl-carousel').owlCarousel({
  loop:false,
  margin:3,
  dots:false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      768:{
          items:2,
          nav:false
      },
      992:{
          items:4,
          nav:true,
          loop:false
      }
  }
});

})(jQuery); // End of use strict


