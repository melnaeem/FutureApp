

$(document).ready(function(){
    
    var msgReciverOption = $('.msg-receiver');
    var profileReciver = $('.profileReciver');
    
    var profileOwnerName = $('#profileOwnerName');
    var profileOwnerPP = $('img.profile').attr('src');
    
    var imgToShowReciver = $('.profileReciver').find('img');
    var spanToShowReciver = $('#reciverName');
    
    
    $('.createMsgModal').on('show.bs.modal', function (e) {
        var $trigger = $(e.relatedTarget);
        
        if($trigger.hasClass('send-btn')){
            msgReciverOption.css("display","none");
            profileReciver.css("display","block");
            
            imgToShowReciver.attr('src',profileOwnerPP);
            spanToShowReciver.html(profileOwnerName.text());
        }else{
            msgReciverOption.css("display","block");
            profileReciver.css("display","none");
        }
    });
    
    var inputImg = $('.info input[type="file"]');
    var imageModal = $('#changeImgModal');
    
    inputImg.change(function(){
        //console.log('change Happen');
        
        var input = this;
        
        imageModal.modal('show');
        
        var reader = new FileReader();
        if (input.files && input.files[0]){
            reader.onload = function(e){
                imageModal.find('img').attr('src', e.target.result);
                console.log($(input).is("#inputProfilePic"));
                /*
                if($(input).is("#inputProfilePic")){
                    imageModal.find('img').attr('title','pp'); 
                }
                */
            }
            reader.readAsDataURL(input.files[0])

        }
        
    });
    $(imageModal).find('#approve').click(function(){    
        console.log('approved');
    })
    /*
    $('#changeImgModal #approve').click(function(e){
            
            console.log('function fired');
            //console.log(input);
            flag = true;
            if (input.files && input.files[0] && flag){
                
                reader.onload = function(e){
                    console.log(imageModal.find('img'));
                    if($(input).attr('name') == 'coverInput'){
                        $('.cover').attr('src', e.target.result); 
                    }else if($(input).attr('name') == 'profilePicInput'){
                        $('.profile').attr('src', e.target.result);
                    }
            }
                reader.readAsDataURL(input.files[0])
            }
        })
      */  
    
    console.log(inputImg);
    
    
})
