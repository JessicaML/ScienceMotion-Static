jQuery(document).ready(function($){





	$(window).scroll(function(){
		currentoffset = $(this).scrollTop();
		if (currentoffset<601) {

			thisoffset = currentoffset - 100*(currentoffset/1000);
			scalebit3 = (currentoffset/500)+1;
	
			$("#cillary_muscle").css({top:thisoffset,transform:"scale("+scalebit3+")"});


			
			thisoffset = currentoffset - 1*(currentoffset/1);
			scalebit3 = (currentoffset/1)+1;
	
			$("#cornea").css({top:thisoffset,transform:"scale("+scalebit3+")"});




			thisoffset = currentoffset - 100*(currentoffset/700);
			scalebit3 = (currentoffset/500)+1;
	
			$("#pupil2").css({top:thisoffset,transform:"scale("+scalebit3+")"});



			
			thisoffset = currentoffset - 100*(currentoffset/700);
			scalebit3 = (currentoffset/500)+1;
	
			$("#fovea").css({top:thisoffset,transform:"scale("+scalebit3+")"});
			



			/* BITS 1 */
			thisoffset = currentoffset - 100*(currentoffset/300);
			thisrotation = 25*((currentoffset/500));
			$("#lens").css({top:thisoffset,transform:"rotate("+thisrotation+"deg)"});




			/* BITS 3 */
			thisoffset = currentoffset - 100*(currentoffset/700);
			scalebit3 = (currentoffset/500)+1;
	
			$("#conjunctiva").css({top:thisoffset,transform:"scale("+scalebit3+")"});
		}
	});
});