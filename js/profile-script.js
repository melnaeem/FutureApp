

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
    
})
