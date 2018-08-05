
$(document).ready(function(){
    
    
    $('.head').height($(window).height());
     /* $('.table').height($(window).height() + 70); */
    /*$('.chars').height($(window).height() - 52);*/
   
    $(window).on('resize', function(){
        /* $('.head').height($(window).height()); */
    /*    $('.table').height($(window).height() + 70); */
        /*$('.chars').height($(window).height() - 52);
        
        new WOW().init();
        
        */
        
        
    });
    

    
    
    $(window).on('scroll', function() {
        if (Math.round($(window).scrollTop()) > 60) {
          $('.navbar').addClass('scrolled');
        } else {
          $('.navbar').removeClass('scrolled');
        }
      });
    
    
        $('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});
    
    $('.choose').on('click', function(){
        $('.info').fadeOut();
        $('.msgForm').delay(300).fadeIn();
        $('.titOne').fadeOut();
        $('.titTwo').delay(400).fadeIn();
    });
    
    $('.send').on('click', function(){
        $('.msgForm').fadeOut();
        $('.signup').delay(300).fadeIn();
        $('.titTwo').fadeOut();
        $('.titThree').delay(400).fadeIn();
    });
    
    
    $('.me').on('click', function(){
        $('.radioSon').delay(300).fadeIn();
        $('.friendInf').fadeOut();
    });
    
     $('.friend').on('click', function(){
        $('.radioSon').fadeOut();
        $('.friendInf').delay(300).fadeIn();
    });
    
});

function scrollToID(id, speed){
	var offSet = 53;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if (mainNav.hasClass("open")) {
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}
if (typeof console === "undefined") {
    console = {
        log: function() { }
    };
}


