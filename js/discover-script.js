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
    if ($('#slideThree').is(':checked')){
        $('.reciverInfo').slideDown();
    }else{
        $('.reciverInfo').slideUp();
    }
});


function removeEmptyLines(text){

    while (text.indexOf('<br><br><br>') > -1){
        
        text = text.replace('<br><br><br>', '<br><br>');
        
    }
    
     while (text.indexOf('<br> ') > -1){
        
        text = text.replace('<br> ', '');
        
    }

    return text;
}

function editMsg(editBtn, flagx){
    
    var currentPost = $(editBtn).parent().parent().parent().parent().parent();
    var msgContent = currentPost.find('.postContent #content');
    var msgFullContent = currentPost.find('.postContent #fullContent');
    
    var editMsgTextarea = $('#editMsgTxtarea');
    var approveEditBtn = $('#editMsgModal').find('button#approve');
    
    
    
    //console.log( approveEditBtn );
    
    editMsgTextarea.val( msgFullContent.text() );
    
    approveEditBtn.click(function(){
        
        flagx = !flagx;
        
        console.log( flagx );
        
        if(flagx == true){
        
            if(editMsgTextarea.val().length > 300){

                var partOne = editMsgTextarea.val().substr(0, 300);
                var partTwo = editMsgTextarea.val().substr(300,editMsgTextarea.val().length);


                msgContent.text(partOne);
                msgContent.append("......<a title='أظهر المزيد' href='#' class='moreDescription'>&#40; المزيد &#41;</a>");

                msgFullContent.text( partOne + partTwo );
                msgFullContent.css("display","none" );
                msgContent.css("display","block");

                currentPost.find(".moreDescription").click(function(){

                    event.preventDefault();

                    msgContent.css("display","none");       

                    msgFullContent.css("display","block");

                });
            
            
            }else{

                msgFullContent.text(editMsgTextarea.val());
                msgContent.text('');
                msgContent.css("display","none" );
                msgFullContent.css("display","block");

            }
        }else{
            flagx = false;
        }
        
        
        
       // msgContent.text( editMsgTextarea.val() );
        //msgFullContent.text( editMsgTextarea.val() );
        
        //console.log(msgFullContent.text());
    })
    
    
}

 function deleteComment(commentToDelete, flag){
       
       console.log($(commentToDelete));
       
       commentToDelete = $(commentToDelete).parent().parent().parent();
       
            
                flag = !flag;
       
       commentToDelete.removeClass('slideInUp');
       commentToDelete.removeClass('animated');
                
                $('#deleteCommentModal #approve').click(function(){
                    
                    console.log(flag);
                    
                    if(flag == true){
                        
                        commentToDelete.addClass('removeComment')
                        commentToDelete.slideUp(600).delay(300);

                    }
                })
                
                $('#deleteCommentModal #cancel').click(function(){
                    
                    flag = false;
                    
                })
                
                //console.log(flag);
        
                return flag;
 
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
    
    
}

function removeReact(){
    
    $('.reactEmotions a svg').removeClass('emotionShow');
    $('.reactEmotions svg').parent().css('overflow','hidden');
    
}


// Upload Images Function

function previewMultiFiles() {
  var preview = document.querySelector('#multiImgPreview');
  var files   = document.querySelector('#inputMultiImg').files;    
    

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

function minifyMsg(){
    
}


/******  Post View More  *****/

$(".post").each(function(){
    
        var post = $(this);
        var postContent = $(this).find("#content");
        
    
        if(postContent.text().length > 300){
        
            var partOne = postContent.text().substr(0, 300);
            var partTwo = postContent.text().substr(300,postContent.text().length);
            
            postContent.text(partOne);
            postContent.append("......<a title='أظهر المزيد' href='#' class='moreDescription'>&#40; المزيد &#41;</a>");
            
            $(this).find("#fullContent").text( partOne + partTwo );
        
            //console.log( post );
            //console.log( postContent.text() );
        
       }
    
     post.find(".moreDescription").click(function(){
    
            event.preventDefault();

            postContent.css("display","none");       

            $(this).parent().parent().find("#fullContent").css("display","block");

        });
    
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
               
            }else if( postImgs.length == 3 ){
                
                $(this).find('.postImgs').addClass("threeImgs");
                     
            } else if(postImgs.length > 4){
                
                $(this).find('.postImgs').addClass("moreThanFour");
                
            }
    
    var commentToggle = 1;

    $(this).find('#addCommentBtn').click(function(){

        
        $(this).toggleClass('activeReactBtn');
    
        if(commentToggle){
            $(this).parent().parent().parent().find('.comments-section').slideDown();
            $(this).parent().parent().parent().find('.comments-section').css("background-color","#F3F6F8");
            
            post.find('#addCommentTextarea').focus(); 

        }else{

            $(this).parent().parent().parent().find('.comments-section').css("background-color","transparent");
            $(this).parent().parent().parent().find('.comments-section').slideUp();
        }

        commentToggle = !commentToggle;

    })

    //Function to set the time before hover

    var emoTimeoutId;

    $(this).find(".addReacts button.addReactsDrop").hover(function showDrops(){
        
        var thisBtn = $(this);
        
        if (!emoTimeoutId) {

            emoTimeoutId = window.setTimeout(function() {
                emoTimeoutId = null; 

                showReact();
                
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
           
            $(this).attr('rows',++commentAreaRowsCounter);
                 
        }
        if($(this).val() == 0){
                
            $(this).val() == "";
           // $(this).attr('rows',commentAreaRowsCounter=1);
            // $(this).val() = 0;
                
        }
        
        
    
           
        });
    
    /*
    $.prototype.colo = function(){
        $(this).css("");
        return $(this);
    }
    
    $("dsfds").colo();
    
    function color(element){
        $(this).css();
        return element;
    }
    
    color($("dsdf"));
    
    color($("#dddddd"));
    
    color();
    
    */
    
        var submitCommentBtn = $(this).find('#submitCommentBtn');
        var commentTxtArea = $(this).find('#addCommentTextarea');
        var commentSection = $(this).find('#commentsContainer');
        var commenterImgSrc = $(this).find('#commenterAvatar').attr('src');
        var commenterName = $(this).find('#commenterAvatar').parent().find('h5');
        var currentDate = new Date();
        var commentDate = currentDate.getDate() + '/' + parseInt(currentDate.getMonth()+1) + '/' + currentDate.getFullYear();


        var commentUpVoteCounter = '';  
        var upVoteIcon = '<svg viewBox="0 0 9.53 13.131"><path transform="translate(-4.174 12.631) rotate(-90)" d="M8.169,4.8a.43.43,0,1,0-.611.605l3.1,3.1H.428A.426.426,0,0,0,0,8.936a.431.431,0,0,0,.428.434h10.23l-3.1,3.094a.439.439,0,0,0,0,.611.428.428,0,0,0,.611,0L12,9.242a.421.421,0,0,0,0-.605Z"/></svg>';

        var commentDownVoteCounter = '';      //parseInt($('#downvoteCounter').text());
        var downVoteIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.142 12.579"><defs></defs><path d="M7.8.122A.411.411,0,0,0,7.214.7l2.959,2.959H.409A.407.407,0,0,0,0,4.068a.411.411,0,0,0,.409.414h9.764L7.214,7.436a.419.419,0,0,0,0,.584.409.409,0,0,0,.584,0L11.457,4.36a.4.4,0,0,0,0-.578Z" transform="translate(8.642 0.5) rotate(90)"/></svg>';

        var commentsVotes = '<div class="commentActions"><div class="votes"><button><span id="upvoteCounter">' + commentUpVoteCounter + '</span> ' + upVoteIcon + '</button><button><span id="downvoteCounter">' + commentDownVoteCounter + '</span>'+ downVoteIcon +'</button></div>';
    
    
    
        
        submitCommentBtn.click(function(e){
            
            e.preventDefault();     //!a.trim()
            
            var commentBody = commentTxtArea.val().trim().replace(/\n/g, "<br>"); //replace(/\n/g, "<br>")
            
            var postCommentTemp = '<div class="postComment animated slideInUp" style="display: none;"><div class="commenterDetails"><a href="#"><img src="' + commenterImgSrc + '"><h5>' + 'محمد عبدالنعيم' +'</h5></a><a href="#" class="commentDate"><h6>' + commentDate +'</h6></a></div><p>' + removeEmptyLines(commentBody) + '</p>' + commentsVotes  + '<div class="delete"><button id="deleteBtn" data-toggle="modal" data-target="#deleteCommentModal" onclick="deleteComment(this, false)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9.617 12.903"><g transform="translate(0)"><g transform="translate(0)"><path d="M74.476,108.607a.649.649,0,0,0,.649.622h6.062a.649.649,0,0,0,.649-.622l.433-9.139H74.043Zm5.051-6.869a.264.264,0,0,1,.264-.264h.422a.264.264,0,0,1,.264.264v5.221a.264.264,0,0,1-.264.264h-.422a.264.264,0,0,1-.264-.264Zm-1.846,0a.264.264,0,0,1,.264-.264h.422a.264.264,0,0,1,.264.264v5.221a.264.264,0,0,1-.264.264h-.422a.264.264,0,0,1-.264-.264v-5.221Zm-1.846,0a.264.264,0,0,1,.264-.264h.422a.264.264,0,0,1,.264.264v5.221a.264.264,0,0,1-.264.264H76.1a.264.264,0,0,1-.264-.264Z" transform="translate(-73.347 -96.326)"/><path d="M61.225.665h-2.8V.136A.136.136,0,0,0,58.293,0H55.356a.136.136,0,0,0-.136.136V.665h-2.8a.407.407,0,0,0-.407.408v1.28h9.617V1.072A.407.407,0,0,0,61.225.665Z" transform="translate(-52.016)"/></g></g></svg><span>مسح</span></button></div></div></div>';
            
            
            if( commentTxtArea.val() == 0 ) {             //!/^ *$/.test(this.newList)        
                
                return false;
                
            }else{
                
                $(postCommentTemp).appendTo(commentSection).show('slow');
                commentTxtArea.attr('rows',commentAreaRowsCounter=1);
                commentTxtArea.val("");
                
            }
            
           
        })
    
    
    
    
    
});


  
    
        
    
    
        $('.postComment').each(function(){
                    
            var commentToDelete = $(this);
            var deleteCommentBtn = $(this).find('#deleteBtn');
            //var comment = post.find('.postComment');
            var approveDeleteBtn = $('#deleteCommentModal #approve');
            var cancelDeleteBtn = $('#deleteCommentModal #cancel');
            var flag = false;
            

            deleteCommentBtn.click(function(){
                deleteComment($(this), flag);
                
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



