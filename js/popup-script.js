$(document).ready(function(){
   var flag = true;
    
    var circlePosBottom = $(window).outerHeight() - $('.circle').position().top - $('.circle').outerHeight();
    
     var markPosBottom = $(window).outerHeight() - $('.mark').position().top - $('.mark').outerHeight();
    
    
    $(".mainx").click(function(){
        if(flag){
            $('.mainx').addClass('zO');

            $(".circle").animate({
                bottom: circlePosBottom + 70 +'px',
            },500,"linear");

             $(".mark").animate({
                bottom: circlePosBottom + 135 +'px',
            },500,"linear");     

            flag = false;

            $(".circle").removeClass("rotate");
    }else{
        
        $(".circle").removeClass("rotate");
                
        $(".circle").animate({
            bottom: circlePosBottom + 'px',
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