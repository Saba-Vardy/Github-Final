$(function(){
    $('.multiple-items').slick({
     infinite: true,
     slidesToShow: 3,
     autoplay: true,
     autoplaySpeed: 2400,
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
           breakpoint: 980,
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
	  if (scroll > 200) {
	    $(".nav").css("opacity" , "90%");
	  }

	  else{
		  $(".nav").css("opacity" , "100%");  	
	  }
  })
})

let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('navigation-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
})
