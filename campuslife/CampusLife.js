function setBack(object){
    var winW = $(window).width();
    if(winW>500){
        object.css({
            'width':winW,
            'height':300 ,
        })
    }
    else{
        object.css({
            'width':winW,
            'height':200,
        })
    }
}


$(window).on('load',function(){
    setBack($('.headerImg'));
});
 
$(window).on('resize',function(){
    winH = $(window).height();
    $('.box').outerHeight(winH);
    setBack($('.headerImg'));
});