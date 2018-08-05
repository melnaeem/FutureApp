

function addAnim(x) {
    $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated');
};


$('#myModal').on('show.bs.modal',function(e){
        
        addAnim('zoomIn');
    //$('#myModal').css("padding-right","0");
    
});

$('#myModal').on('hide.bs.modal',function(e){
        addAnim('zoomOut');
});


$('.slideThree label').click(function(){
    if ($('#slideThree').is(':checked')) {
        $('.reciverInfo').slideDown();
    }else{
        $('.reciverInfo').slideUp();
    }

});


function removeEmptyLines(string,S){
    
    
    var BR = '<br>'
    var firstLine = string.indexOf('<br>',S);   //S + 4
    
    var stt = string.slice(firstLine+4,string.length);
    
    
    while(stt.search("<br>") > 0){
        
        stt.replace('<br>','xxxx');
        
    }
	
    
    return console.log(stt.search('<br>'));

}



$('#emojiBtn').click(function(){
        
    event.preventDefault();
    
    $('.emojisContainer').fadeIn(300);
    $('#emojiBtn').addClass('active');
    
    $('body').click(function(){
        $('.emojisContainer').fadeOut(300);
        
        $('#emojiBtn').removeClass('active');
    });
    
    return false;
    
});

$('.emoji').click(function(){
    
    var msg = $('#msgContent').val() + $(this).html();
    
    $('#msgContent').val(msg);
    
});



//Show Add Reacts Emojis Animation

function showReact(){
    
    setTimeout(function(){$('.reactEmotions a:nth-of-type(1) svg').addClass('emotionShow')},100);
    setTimeout(function(){$('.reactEmotions a:nth-of-type(2) svg').addClass('emotionShow')},200);
    setTimeout(function(){$('.reactEmotions a:nth-of-type(3) svg').addClass('emotionShow')},300);
    setTimeout(function(){$('.reactEmotions a:nth-of-type(4) svg').addClass('emotionShow')},400);
    
    setTimeout(function(){$('.reactEmotions svg').parent().css('overflow','visible')},600);
    
    //console.log(emotion);
}

function removeReact(){
    
    $('.reactEmotions a svg').removeClass('emotionShow');
    $('.reactEmotions svg').parent().css('overflow','hidden');
    
}


// Upload Images Function

function previewMultiFiles() {
  var preview = document.querySelector('#multiImgPreview');
  var files   = document.querySelector('#inputMultiImg').files;
    
    //console.log(files);
    
    

  function readAndPreview(file) {

    // Make sure `file.name` matches our extensions criteria
    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
      var reader = new FileReader();

      reader.addEventListener("load", function () {
          
                var container = document.createElement('div');
                var overlay = document.createElement('div');
                var removeBtn = document.createElement('span');
                var image = new Image();


                container.classList = "uploadImgContainer";
                overlay.classList = "uploadImgOverlay";
                image.title = file.name;
                image.src = this.result;
                removeBtn.id = 'removeBtn';
                removeBtn.innerHTML = 'X';
                removeBtn.title = 'مسح';

                overlay.appendChild( removeBtn );
                container.appendChild( image );
                container.appendChild( overlay );
                preview.appendChild( container );
            
      }, false);

      reader.readAsDataURL(file);
    }

  }

  if (files){
    [].forEach.call(files, readAndPreview);
  }

}


function previewFile() {
    
    var i = 0;
    
      var preview = document.querySelector('#multiImgPreview');
      var files   = document.querySelector('#inputImg').files;


      function readAndPreview(file) {

        // Make sure `file.name` matches our extensions criteria
        if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
          var reader = new FileReader();

          reader.addEventListener("load", function () {

                var container = document.createElement('div');
                var overlay = document.createElement('div');
                var removeBtn = document.createElement('span');
                var image = new Image();


                container.classList = "uploadImgContainer";
                overlay.classList = "uploadImgOverlay";
                image.title = file.name;
                image.src = this.result;
                removeBtn.id = 'removeBtn';
                removeBtn.innerHTML = 'X';
                removeBtn.title = 'مسح';

                overlay.appendChild( removeBtn );
                container.appendChild( image );
                container.appendChild( overlay );
                preview.appendChild( container );
              
                
          }, false);

          reader.readAsDataURL(file);
        }

      }

      if (files){
        [].forEach.call(files, readAndPreview);
      }

        $('#previewImg').slideDown();
 
}

$(document).ready(function(){

    $('#removeBtn').on( "click", function() {

        $(this).fadeOut();

    });
    
});


/******  Post View More  *****/

$(".post").each(function(){
    
        var post = $(this);
        var postContent = $(this).find("#content");
        
    
        if(postContent.text().length > 300){
        
        var partOne = postContent.text().substr(0, 300);
        var partTwo = postContent.text().substr(300,postContent.text().length);
            
        postContent.text(partOne);
        postContent.append("......<a title='أظهر المزيد' href='#' class='moreDescription'>&#40; المزيد &#41;</a>");
        
        
        $(this).find(".moreDescription").click(function(){
    
            event.preventDefault();

            postContent.css("display","none");       
            $(this).parent().parent().find("#fullContent").text(partOne + partTwo);

        });
        
       }
    
        var postImgs = $(this).find('.postImgs img');
        var postImgsPreviewSrc = [""];
        var X;


        for (X = 0; X < postImgs.length; X++) {
            
            postImgsPreviewSrc[X] = postImgs[X].src;
               
        }
    
        var previewImgModal = $('#previewImgModal');
        var modalImg = $('#modalImg');
        var span = $(".close");

        modalImg.addClass('animated');

       
        var nextImgPreview = $('#next');
        var prevImgPreview = $('#prev');

            $(this).on('load', function (){
                
            })

            

            $(this).find(postImgs).click(function(){
                
                var modalImgSrc = $(this).attr('src');
                var currentIndex = $(this).index();
                
                //getCurrentImg();
                
                modalImg.attr('src' , modalImgSrc);

                previewImgModal.fadeIn();
                $('html').css("overflow-y","hidden");
                modalImg.removeClass('bounceOutDown');
                    
                    
                prevImgPreview.click(function(){
                        
                    if(currentIndex == postImgsPreviewSrc.length - 1){
                        currentIndex = -1;
                    }
                        
                     modalImg.attr('src', postImgsPreviewSrc[++currentIndex]);
                        
                })
                    
                nextImgPreview.click(function(){
                        
                    if(currentIndex == 0){
                        currentIndex = postImgsPreviewSrc.length;
                    }
                        
                    modalImg.attr('src', postImgsPreviewSrc[--currentIndex]);
                        
                })
                    
                 if(postImgs.length == 1){
                    $('.changeImgsBtns').css("display","none");
                 } else {
                         $('.changeImgsBtns').css("display","block");
                 }  

            })
            
            $('.close').click(function(){
                    modalImg.removeClass('slideInUp');
                    modalImg.addClass('bounceOutDown');
                    $(this).parent().parent().fadeOut(200);
                    $('html').css("overflow-y","auto");
            })
            
            
            if(postImgs.length == 1){
                
                $(this).find('.postImgs').addClass("oneImg");
                
            }else if( postImgs.length == 2 ){
                
                $(this).find('.postImgs').addClass("twoImgs");    
               
                
            } else if(postImgs.length > 4){
                
                $(this).find('.postImgs').addClass("moreThanFour");
                
            }
    
    var commentToggle = 1;

    $(this).find('#addCommentBtn').click(function(){

       // console.log($(this).parent().parent().parent());
        
        $(this).toggleClass('activeReactBtn');

        if(commentToggle){
            $(this).parent().parent().parent().find('.comments-section').slideDown();
            $(this).parent().parent().parent().find('.comments-section').css("background-color","#F3F6F8");

        }else{

            $(this).parent().parent().parent().find('.comments-section').css("background-color","transparent");
            $(this).parent().parent().parent().find('.comments-section').slideUp();
        }

        commentToggle = !commentToggle;

    })

    //Function to set the time before hover

    var emoTimeoutId;

    $(this).find(".addReacts button.addReactsDrop").hover(function showDrops() {
        
        var thisBtn = $(this);
        
        if (!emoTimeoutId) {

            emoTimeoutId = window.setTimeout(function() {
                emoTimeoutId = null; 

                showReact();
                
                //console.log(thisBtn.parent().find('.reactEmotions'));
                
                thisBtn.parent().find('.reactEmotions').slideDown(300,function(){

                });

           }, 500);
        }
    },
    function hideDrops() {
        if (emoTimeoutId) {
            window.clearTimeout(emoTimeoutId);
            emoTimeoutId = null;
        }
        else {
           post.find('.addReacts button').parent().mouseleave(function(){
                $(this).parent().find('.reactEmotions').slideUp(500);
                    removeReact();
                })
        }
    });
    
    
    
    var commentAreaRowsCounter = 1;
  //  var BreakLinesPositions = [];
  //  var EnterPressed = false;
     
             
    post.find('.addComment').find('textarea').keyup(function(e){
            
            
        if(e.keyCode == 13){
            
            //console.log($(this));
           
            $(this).attr('rows',++commentAreaRowsCounter);
                 
        }
        if($(this).val() == 0){
                
            $(this).val() == "";
           // $(this).attr('rows',commentAreaRowsCounter=1);
            // $(this).val() = 0;
                
        }
        
        
    
           
        });
    
    var submitCommentBtn = $(this).find('#submitCommentBtn');
    var commentTxtArea = $(this).find('#addCommentTextarea');
    var commentSection = $(this).find('#commentsContainer');
    var commenterImgSrc = $(this).find('#commenterAvatar').attr('src');
    var commenterName = $(this).find('#commenterAvatar').parent().find('h5');
    var currentDate = new Date();
    var commentDate = currentDate.getDate() + '/' + parseInt(currentDate.getMonth()+1) + '/' + currentDate.getFullYear();
    
    
    var commentUpVoteCounter = parseInt($('#upvoteCounter').text());  
    var upVoteIcon = '<svg viewBox="0 0 9.53 13.131"><path transform="translate(-4.174 12.631) rotate(-90)" d="M8.169,4.8a.43.43,0,1,0-.611.605l3.1,3.1H.428A.426.426,0,0,0,0,8.936a.431.431,0,0,0,.428.434h10.23l-3.1,3.094a.439.439,0,0,0,0,.611.428.428,0,0,0,.611,0L12,9.242a.421.421,0,0,0,0-.605Z"/></svg>';
    
    var commentDownVoteCounter = parseInt($('#downvoteCounter').text());
    
    var commentsVotes = '<div class="commentVotes"><button><span id="upvoteCounter">' + commentUpVoteCounter + '</span> ' + upVoteIcon + '</button></div>';
    
        
        submitCommentBtn.click(function(e){
            
            e.preventDefault();     //!a.trim()
            
            //!/^ *$/.test(commentTxtArea.val())
            
            var commentBody = commentTxtArea.val().trim().replace(/\n/g, "<br>") ;
            
            //console.log(commentBody.indexOf("<br>"));
            //console.log(commentBody.lastIndexOf("<br>"));
            
            removeEmptyLines(commentBody);
            
            
            if( commentTxtArea.val() == 0 ) {             //!/^ *$/.test(this.newList)
               // console.log('Empty');
                
                return false;
                
            }else{
                commentSection.append('<div class="postComment"><div class="commenterDetails"><a href="#"><img src="' + commenterImgSrc + '"><h5>' + 'محمد عبدالنعيم' +'</h5></a><a href="#" class="commentDate"><h6>' + commentDate +'</h6></a></div><p>' + commentBody + '</p>' + commentsVotes  + '</div>');
            
                //console.log(commentTxtArea.val()[0]);
                
                
                
                commentTxtArea.attr('rows',commentAreaRowsCounter=1);

                commentTxtArea.val(""); // Clear Txt area   
            }
            
           /* 
            $(this).parent().find('#commentBody').find('br').each(function(){
                
                console.log("br");
                
            })
            */
        })
        
        
        

});




$('.viewMsgContainer .viewMsg').click(function(){
    
    $('.msgContent').slideToggle();
    
    if($(this).find('svg').hasClass('rotateMe')){
        
        $(this).find('svg').removeClass('rotateMe');
        $(this).find('svg').addClass('unRotateMe');
        
    }else{
        $(this).find('svg').addClass('rotateMe');    
        $(this).find('svg').removeClass('unRotateMe');
    }
    
})



