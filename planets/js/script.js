jQuery(document).ready(function($) {
	var box=$(".box");
	var boxCenter=[box.offset().left+box.width()/2, box.offset().top+box.height()/2];

	$(document).mousemove(function(e){


		var angle = Math.atan2(e.pageX- boxCenter[0],- (e.pageY- boxCenter[1]) )*(180/Math.PI);

	    box.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});
	    box.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
	    box.css({ 'transform': 'rotate(' + angle + 'deg)'});

	});


});
