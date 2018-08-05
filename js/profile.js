$(document).ready(function(){

    
$('.caret').on('click', function(){
    
        $('.caret').toggleClass('caretopen');
        $('.menu').fadeToggle();
    
        $('.accordion').removeClass("unread");
        
    });
    

    
var flag = true;
$(".mainx").click(function(){
    if(flag){
      //  $('.mainx').html('<span>X</span>');
        $('.mainx').addClass('zO');
        
        
        
    $(".gd").animate({
            bottom: '110px',
        
        },500);
        
        
    
     $(".mark").animate({
            bottom: '190px',
            
        },500);
        
       
     
        
        flag = false;
         
        $(".gd").removeClass("rotate");
        $(".mark").removeClass("rotate");
        $(".invite").removeClass("rotate");
        
        $(".overlay").fadeToggle();
        
    }
    else{
       // $('.mainx').html('<span>+</span>');
        
        $(".gd").removeClass("rotate");
        $(".mark").removeClass("rotate");
        $(".invite").removeClass("rotate");
        
        
        $(".gd").animate({
            bottom: '25px',
            right: '25px'
        },500);
        
    
     $(".mark").animate({
            bottom: '25px',
            right: '25px'
        },500);
        
        $(".invite").animate({
            bottom: '25px',
            right: '25px'
        },500);
    
        flag = true;
        
        $(".gd").addClass("rotate");
        $(".invite").addClass("rotate");
        
        window.setTimeout(function(){$(".mark").addClass("rotate");});
        
        
        $('.mainx').removeClass('zO');
        
        $(".overlay").fadeToggle();
        
    }
    
    
    });
    
    $(".overlay").click(function(){
        
        $(".overlay").fadeToggle();
        
      //  $('.mainx').html('<span>+</span>');
        
        $(".gd").removeClass("rotate");
        $(".mark").removeClass("rotate");
        $(".invite").removeClass("rotate");
        
        
        $(".gd").animate({
            bottom: '25px',
            right: '25px'
        },500);
        
    
     $(".mark").animate({
            bottom: '25px',
            right: '25px'
        },500);
        
      
    
        flag = true;
        
        $(".gd").addClass("rotate");
        
        
        window.setTimeout(function(){$(".mark").addClass("rotate");});
        
        
        $('.mainx').removeClass('zO');
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

        
    }, 3000);
    
}

fadeToggle();



});
