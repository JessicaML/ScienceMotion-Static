$(document).on("mousemove", function (event) {

  $("img.learn").css("width", event.pageX)
  $("img.learn").css("height", event.pageY)

  $("img.to").css("width", $('#top').width() - event.pageX)
  $("img.to").css("height", event.pageY)

  $("img.code").css("width", event.pageX)
  $("img.code").css("height", $('#top').height() - event.pageY)

  $("img.now").css("width", $('#top').width() - event.pageX)
  $("img.now").css("height", $('#top').height() - event.pageY)

})
