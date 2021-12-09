$(function(){
    $('.multiple-items').slick({
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     arrows: true,
     responsive: [
         {
           breakpoint: 1417,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
     ]
   });    
 });

 $(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $(".nav").css("opacity" , "90%");
	  }

	  else{
		  $(".nav").css("opacity" , "100%");  	
	  }
  })
})
