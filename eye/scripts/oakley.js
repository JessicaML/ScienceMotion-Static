jQuery(document).ready(function($){



	$(window).scroll(function(){
		currentoffset = $(this).scrollTop();
		if (currentoffset<601) {

			thisoffset = currentoffset - 50*(currentoffset/600);
			scaleclouds = (currentoffset/700)+1;
			$("#cillary_muscle").css({top:thisoffset,transform:"scale("+scaleclouds+")"});

			thisoffset = currentoffset - 100*(currentoffset/300);
			thisrotation = -200*((currentoffset/1000));
			$("#lens").css({top:thisoffset,transform:"rotate("+thisrotation+"deg)"});

			thisoffset = currentoffset - 1000*(currentoffset/500);
			$("#cornea").css({top:thisoffset});

			thisoffset = currentoffset - 100*(currentoffset/300);
			thisrotation = 250*((currentoffset/1000));
			$("#fovea").css({top:thisoffset,transform:"rotate("+thisrotation+"deg)"});

			thisoffset = currentoffset - 100*(currentoffset/700);
			scalebit3 = (currentoffset/300)+1;

			$("#conjunctiva").css({top:thisoffset,transform:"scale("+scalebit3+")"});

		}
	});


              $('#top').hover(function() {
        $('#conjunctiva_label').fadeTo("fast",0.99);
        $('#cornea_label').fadeTo("slow",0.99);
        $('#lens_label').fadeTo("slow",0.99);
        $('#fovea_label').fadeTo("fast",0.99);
        $('#cillary_muscle_label').fadeTo("slow",0.99);
        $('#pupil_label').fadeTo("fast",0.99);


    });

});
