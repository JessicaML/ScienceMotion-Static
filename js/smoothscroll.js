$(document).ready(function() {
  function smoothscroll() {
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

  smoothscroll();
});
