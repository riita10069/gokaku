var getDevice = (function(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        return 'sp';
    }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
        return 'tab';
    }else{
        return 'other';
    }
})();

var winH = $(window).height();
$('.box').outerHeight(winH);
 
$(window).on('load',function(){
    setBack($('.fitImg'));
});
 
$(window).on('resize',function(){
    winH = $(window).height();
    $('.box').outerHeight(winH);
    setBack($('.fitImg'));
});
 
function setBack(object){
    //画像サイズ取得
    var imgW = object.width();
    var imgH = object.height();
 
    //ウィンドウサイズ取得
    var winW = $(window).width();
    var winH = $(window).height();  
 
    //幅・高さの拡大率取得
    var scaleW = winW / imgW;
    var scaleH = winH / imgH;
 
    //幅・高さの拡大率の大きいものを取得
    var fixScale = Math.max(scaleW, scaleH);
 
    //画像の幅高さを設定
    var setW = imgW * fixScale;
    var setH = imgH * fixScale;
 
    //画像の位置を設定
    var moveX = Math.floor((winW - setW) / 2);
    var moveY = Math.floor((winH - setH) / 2);
 
    //設定した数値でスタイルを適用
    
    object.css({
        'width': setW,
        'height': setH,
        'left' : moveX,
        'top' : moveY,
    });     
}