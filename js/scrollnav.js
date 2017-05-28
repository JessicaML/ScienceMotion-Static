$(document).ready(function() {
  function scrollNav() {
    $('#bs-example-navbar-collapse-1 a').click(function(){
      $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
      }, 800);
    });

    $('.scrollTop a').scrollTop();
  }

  scrollNav();

});
