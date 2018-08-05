
$(document).ready(function(){
    
    $('section').height($(window).height() + 40);
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






/* 

for(j = 0; j<acc.length;j++){
                if(j === i){
                    continue;
                }
    else{
        acc[j].classList.remove("active");
                    console.log(acc[j]);
                    
    }
        
            }
        
            */

/** for (j = 0; j < acc.length; j++) {
                
                if(this.classList.contains('active')){          
                    var Cpanel = acc[j].nextElementSibling;
                    console.log(Cpanel);
                    
                }
                
            }
            */

/*

    var j = 0;
    var Opanel = acc[j].nextElementSibling;
    
    while(j<acc.length){
        if(Opanel.classList.contains("opened")){
            continue;
        }else{
               panel.style.maxHeight = null;
        }
        j++;
    }

*/
