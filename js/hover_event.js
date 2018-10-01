function mouseON(){
    $(this).addClass('mouseOver');
    var target = this;
//     for(var timer=100;timer+=20;timer>=300){
//         setTimeout(function(){
//             $(target).removeClass('mouseOver')},timer);
//         timer+=20;
//         setTimeout(function(){
//             $(target).addClass('mouseOver')},timer);
//     }
// }
    setTimeout(function(){
        $(target).removeClass('mouseOver')},100);
    setTimeout(function(){
        $(target).addClass('mouseOver')},120);
    setTimeout(function(){
        $(target).removeClass('mouseOver')},140);
    setTimeout(function(){
        $(target).addClass('mouseOver')},160);
    setTimeout(function(){
        $(target).removeClass('mouseOver')},180);
    setTimeout(function(){
        $(target).addClass('mouseOver')},200);
    setTimeout(function(){
        $(target).removeClass('mouseOver')},220);
    setTimeout(function(){
        $(target).addClass('mouseOver')},240);
    setTimeout(function(){
        $(target).removeClass('mouseOver')},260);
    setTimeout(function(){
        $(target).addClass('mouseOver')},280);
    setTimeout(function(){
        $(target).removeClass('mouseOver')},300);
    setTimeout(function(){
        $(target).addClass('mouseOver')},320);
    }
function mouseOFF(){
    $(this).removeClass('mouseOver')
    var aim = this;
    setTimeout(function(){
        $(aim).removeClass('mouseOver');},320);
}
$(document).ready(function(){
    $('.hover_menu a').hover(mouseON,mouseOFF);
    $('.hover_menu a').on('touchstart',mouseON);
    $('.ef').textillate();
});

