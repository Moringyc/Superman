$(function(){
var liElist=$('.banner>ul>li');
var spanList=$('.banner>.dot>span');
var timer;
var i=0;
    spanList.eq(0).css('background', '#fa670e').siblings().css('background', 'rgba(0, 0, 0, 0.7)'); 
function autoplay(){
    timer=setInterval(function(){
        var temp=i;
        if(i==7){
            i=-1;
        }
        i++;
        liElist.eq(temp).animate({"opacity":"0"},1000);
        liElist.eq(i).animate({"opacity":"1"},1000);
        spanList.eq(i).css('background', '#fa670e').siblings().css('background', 'rgba(0, 0, 0, 0.7)'); 

    },2000)
 } 

autoplay();

var mousePlay=document.querySelector('.banner>ul');
    mousePlay.onmouseover=function(){
    clearInterval(timer);
}
    mousePlay.onmouseout=function(){
    autoplay();
}

})