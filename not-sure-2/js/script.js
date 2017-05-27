jQuery(document).ready(function($) {
	// why it doesn't work on firefox?
	var card = $(".gurprit");

	$(document).on("mousemove", function(e) {
		var ax = -($(window).innerWidth() / 2 - e.pageX) / 20;
		var ay = ($(window).innerHeight() / 2 - e.pageY) / 10;
		card.attr("style", "transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg);-webkit-transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg);-moz-transform: rotateY(" + ax + "deg) rotateX(" + ay + "deg)");
	});

});
