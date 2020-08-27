$(document).ready(function () {
    var toggle = document.getElementById("toggle");
    toggle.addEventListener("click", toggleMenu);
    var divToggle = document.getElementsByClassName('div-toggle')[0]
    function toggleMenu() {
      // var sec = document.getElementById("sec");
      var nav = document.getElementById("navigation");
      var toggle = document.getElementById("toggle");
      $('.logo-mobile').toggleClass('active')
      $('.overlapblack').toggleClass('active')
      nav.classList.toggle("menu-active");
      toggle.classList.toggle("change-toggle");
      divToggle.classList.toggle('toggle-active')
    }
    // $('body').on({
    //     'touchmove': function (e) {
    //       if ($(this).scrollTop() > 0) {
    //         $('.div-toggle').addClass('active')
    //       } 
    //       if($(this).scrollTop() == 0) {
    //         $('.div-toggle').removeClass('active')
    //       }
    //     },
    //   });
});