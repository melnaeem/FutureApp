function addAnim(x) {
    $('#myModal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated');
}

$('#myModal').on('show.bs.modal',function(e){
        addAnim('zoomIn');
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
