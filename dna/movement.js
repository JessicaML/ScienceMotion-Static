$(document).on("mousemove", function (event) {

  $("img.t").css("width", event.pageX)
  $("img.t").css("height", event.pageY)

  $("img.c").css("width", $('#top').width() - event.pageX)
  $("img.c").css("height", event.pageY)

  $("img.a").css("width", event.pageX)
  $("img.a").css("height", $('#top').height() - event.pageY)

  $("img.g").css("width", $('#top').width() - event.pageX)
  $("img.g").css("height", $('#top').height() - event.pageY)

})
