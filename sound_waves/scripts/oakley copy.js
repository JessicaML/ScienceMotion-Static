jQuery(document).ready(function($){


// $("#conjunctiva").hover(function(){
// 	console.log("hover")
// 				$("#conjunctiva").css({top:thisoffset,transform:"scale("+scalebit3+")"});

// });



// $("#top").hover(function(e){
//    var parentOffset = $(this).parent().offset(); 
//    var relX = e.pageX - parentOffset.left;
//    var relY = e.pageY - parentOffset.top;

//    console.log (relX);
//    console.log (relY);

//   $("#conjunctiva").animate({left: relX, top: relY});

// });




	$(window).scroll(function(){
		currentoffset = $(this).scrollTop();
		if (currentoffset<601) {

			// /* BITS 3 */
			// thisoffset = currentoffset - 100*(currentoffset/700);
			// scalebit3 = (currentoffset/500)+1;
	
			// $("#cillary_muscle").css({top:thisoffset,transform:"scale("+scalebit3+")"});


			// 			/* BITS 3 */
			// thisoffset = currentoffset - 100*(currentoffset/700);
			// scalebit3 = (currentoffset/500)+1;
	
			// $("#lens").css({top:thisoffset,transform:"scale("+scalebit3+")"});

			// 			/* BITS 3 */
			// thisoffset = currentoffset - 100*(currentoffset/700);
			// scalebit3 = (currentoffset/500)+1;
	
			// $("#cornea").css({top:thisoffset,transform:"scale("+scalebit3+")"});


			/* EXTRA CLOUDS */
			thisoffset = currentoffset - 50*(currentoffset/600);
			scaleclouds = (currentoffset/4000)+1;
			$("#cillary_muscle").css({top:thisoffset,transform:"scale("+scaleclouds+")"});
			
			/* BOOM TEXT */
			thisoffset = currentoffset - 100*(currentoffset/500);
			$("#lens").css({top:thisoffset});

						/* BOOM TEXT */
			thisoffset = currentoffset - 100*(currentoffset/500);
			$("#cornea").css({top:thisoffset});

			
			/* BITS 1 */
			thisoffset = currentoffset - 100*(currentoffset/300);
			thisrotation = 25*((currentoffset/500));
			$("#fovea").css({top:thisoffset,transform:"rotate("+thisrotation+"deg)"});

			/* BITS 2 */
			thisoffset = currentoffset - 100*(currentoffset/700);
			$("#pupil2").css({top:thisoffset});

			/* BITS 3 */
			thisoffset = currentoffset - 100*(currentoffset/700);
			scalebit3 = (currentoffset/500)+1;
	
			$("#conjunctiva").css({top:thisoffset,transform:"scale("+scalebit3+")"});
		}
	});
});