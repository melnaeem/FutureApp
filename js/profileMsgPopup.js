$(document).ready(function(){
    
    $('.send-btn').on('click', function(){
   
     $('.acc').fadeIn();
     $('.accordion').addClass('active');
        
     
     var acc = document.getElementsByClassName("accordion");
     var panel = acc[0].nextElementSibling;
     panel.style.maxHeight = panel.scrollHeight + "px";
 });


$('.share').on('click', function(){
    $('.share-btns').fadeIn();
    $('.share-overlay').fadeIn();
});


$('.share-close').on('click', function(){
    $('.share-btns').fadeOut();
    $('.share-overlay').fadeOut();
});

$('.share-overlay').on('click', function(){
    $('.share-btns').fadeOut();
    $('.share-overlay').fadeOut();
});

/*  */

$('.msg-close-btn').on('click', function(){
    $('.acc').css("display" , "none");
});

var acc = document.getElementsByClassName("accordion");

var i, j;


for (i = 0; i < acc.length; i++) {
   // var Cpanel = acc[i].nextElementSibling;
    
   // Cpanel.classList.add("closed");
  
    //onmouseover Or onclick
    
    acc[i].onclick = function() {           /** Now You're In The click event */
        
        //console.log(this, j);
        
        this.classList.toggle("active");
        
        var panel = this.nextElementSibling;
        
        
        
        if (panel.style.maxHeight){             /** If It's Open Then close It **/
            panel.style.maxHeight = null;
            
            //panel.classList.remove("opened");
            
            
        } else {                                    /** If not Open It **/
          panel.style.maxHeight = panel.scrollHeight + "px";
            
           
            //panel.classList.add("opened");
            
            
        }
        
        for(j = 0;j < acc.length; j++){
            if(acc[j]!=this){
                //acc[j].nextElementSibling.classList.remove("opened");
                acc[j].nextElementSibling.style.maxHeight = null;
                acc[j].classList.remove("active");
            }
        }
        
        


    }
    
    
    
}



    
});


 
