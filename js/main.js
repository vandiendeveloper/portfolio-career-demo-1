$(document).ready(function () {
  if (window.scrollY > 0) {
    $('.menu-section').addClass('active')
    $('.jump-top a').addClass('active')
  } else {
    $('.menu-section').removeClass('active')
    $('.jump-top a').removeClass('active')
  }
  $(window).scroll(() => {
    if (window.scrollY > 0) {
      console.log('aaa');
      $('.menu-section').addClass('active')
      $('.jump-top a').addClass('active')
    } else {
      $('.menu-section').removeClass('active')
      $('.jump-top a').removeClass('active')
    }
  });
  $('body').on({
    'touchmove': function (e) {
      if ($(this).scrollTop() > 0) {
        $('.jump-top a').addClass('active')
      } 
    },
    'scroll' : function(e) {
      if($(this).scrollTop() == 0) {
        $('.jump-top a').removeClass('active')
      }
    }
  });
  $('ul .button').click(function () {
    console.log($(this));
    $(this).addClass('active').siblings().removeClass('active')
  })
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    resizable: true,
    layoutMode: 'masonry',
  });
  // bind filter button click
  $('.button').click(function () {
    var filterValue = '.' + $(this).attr('data-filter');
    if (filterValue === '.all') {
      $grid.isotope({ filter: '*' });
    } else {
      $grid.isotope({ filter: filterValue });
    }
  });
  $('.num').counterUp({ delay: 10})
  $('.sliders').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


});