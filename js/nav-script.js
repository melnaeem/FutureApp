
$(document).ready(function(){
    $('.burger, .overlay').click(function(){
          $('.burger').toggleClass('clicked');
          $('.overlay').toggleClass('show');
          $('nav').toggleClass('show');
          $('body').toggleClass('overflow');
     //   $('.pop-cont').toggleClass('pop-hide');
    });
    
    $('.notifications > div a').click(function(){
        $(this).next().css( "display", "none");
    });
    
    $('.unread').click(function(){
        $(this).removeClass("unread");
    });
    
    $("#demo-2 input").focus(function(){
        $(this).parent().parent().css("z-index", "99");
        //console.log($(this).parent().parent());
    });
    
    $("#demo-2 input").blur(function(){
        $(this).parent().parent().css("z-index", "9");
     //   console.log($(this).parent().parent());
    });
    
    // Pop Up Function
    
    var flag = true;
    
    $(".mainx").click(function(){
        if(flag){
          // $('.mainx').html('<span>X</span>');
            $('.mainx').addClass('zO');
        
        
        $(".circle").animate({
            bottom: '140px',

            },500,"linear");

         $(".mark").animate({
            bottom: '215px',
             
   

            },500,"linear");     

            flag = false;

            $(".circle").removeClass("rotate");
    }
    else{
       // $('.mainx').html('<span>+</span>');
        
        $(".circle").removeClass("rotate");
        
        
        
        $(".circle").animate({
            bottom: '65px',
            
        },500);
   
        flag = true;
        
        $(".gd").addClass("rotate");
        $(".invite").addClass("rotate");
        
        window.setTimeout(function(){$(".mark").addClass("rotate");});
        
        $('.mainx').removeClass('zO');
        
    }
    
    });
    
        
    function fadeToggle(){
    var msgIcon = $("#messageIcon");
    var inviteIcon = $("#inviteIcon");
    var flagTwo = 1;
    
    setInterval(function(){
        
        if(flagTwo){
            msgIcon.fadeOut(500);
            inviteIcon.delay(500).fadeIn(500);
            flagTwo = 0;
        } else {
            inviteIcon.fadeOut(500);
            msgIcon.delay(500).fadeIn(500);
            flagTwo = 1;
        }

        
    }, 10000);
    
}

fadeToggle();
    
   
   
});