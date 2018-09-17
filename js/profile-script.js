

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
        
        var input = this;
        var reader = new FileReader();
        
        imageModal.modal('show');
        
        
        if (input.files && input.files[0]){
            reader.onload = function(e){
                imageModal.find('img').attr('src', e.target.result);
                
                if($(input).is("#inputProfilePic"))
                    imageModal.find('img').attr('title','pp');    
                else
                    imageModal.find('img').attr('title','cover');
            }
            reader.readAsDataURL(input.files[0])
        }
        
    });
    $(imageModal).find('#approve').click(function(){
        if(imageModal.find('img').attr('title') == 'pp')
            $('.profile').attr('src', imageModal.find('img').attr('src'));
        else
            $('.cover').attr('src', imageModal.find('img').attr('src')); 
    })
    
})
