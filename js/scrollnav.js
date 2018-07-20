$(document).ready(function() {
  function scrollNav() {
    $("#smoothscroll a").click(function() {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($(this).attr("href")).offset().top - 160
          },
          800
        );
    });

    $(".scrollTop a").scrollTop();
  }

  scrollNav();
});
