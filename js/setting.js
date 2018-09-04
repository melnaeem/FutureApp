
$(document).ready(function(){
        
    $('.pass').each(function(){
        var togglePassBtn = $(this).find('.togglePassBtn');
        var inputField = $(this).find('input');
        var showPassword = false;
        
        
        $(togglePassBtn).click(function(e) {
            e.preventDefault();
            
            showPassword = !showPassword;
            
            if(showPassword){
                inputField.attr("type","text");
                
                $(this).html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.218 24.749"><defs><style>.aq,.bq{fill:#b1b1b1;}.bq{stroke:#fff;}.cq{stroke:none;}.dq{fill:none;}</style></defs><g transform="translate(-482.816 -558.626)"><g transform="translate(482.816 463.698)"><path class="aq" d="M13.609,98.725c-5.2,0-9.916,2.845-13.4,7.466a1.077,1.077,0,0,0,0,1.286c3.48,4.627,8.2,7.472,13.4,7.472s9.916-2.845,13.4-7.466a1.077,1.077,0,0,0,0-1.286C23.525,101.57,18.809,98.725,13.609,98.725Zm.373,13.825a5.725,5.725,0,1,1,5.339-5.339A5.728,5.728,0,0,1,13.982,112.55Zm-.173-2.639a3.083,3.083,0,1,1,2.879-2.879A3.077,3.077,0,0,1,13.809,109.911Z" transform="translate(0 0)"/></g><g class="bq" transform="translate(506.753 558.626) rotate(45)"><rect class="cq" width="3" height="32" rx="1.5"/><rect class="dq" x="0.5" y="0.5" width="2" height="31" rx="1"/></g></g></svg>');
            }else{
                inputField.attr("type","password");
                
                $(this).html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.218 16.224"><g transform="translate(0 -98.725)"><path d="M13.609,98.725c-5.2,0-9.916,2.845-13.4,7.466a1.077,1.077,0,0,0,0,1.286c3.48,4.627,8.2,7.472,13.4,7.472s9.916-2.845,13.4-7.466a1.077,1.077,0,0,0,0-1.286C23.525,101.57,18.809,98.725,13.609,98.725Zm.373,13.825a5.725,5.725,0,1,1,5.339-5.339A5.728,5.728,0,0,1,13.982,112.55Zm-.173-2.639a3.083,3.083,0,1,1,2.879-2.879A3.077,3.077,0,0,1,13.809,109.911Z" transform="translate(0 0)"/></g></svg>');
            }
        })
        
        
    })
    
})
