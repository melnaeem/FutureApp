
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
   
});