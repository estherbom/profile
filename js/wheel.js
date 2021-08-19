$(document).ready(function(){
    var li=$('li');
    function pageAni(target){
        $('html,body').stop().animate({scrollTop:target})
    }
    
    $(window).scroll(function(){
        var ht=$(this).height();
        var scrollT=$(this).scrollTop();
        for(var i=0; i<4; i++){
            if(scrollT >= ht*i && scrollT<ht*(i+1)){
                li.find('a').blur();
                li.removeClass('on');
                li.eq(i).addClass('on');
            }
        }
    });
    
    li.click(function(){
        var ht=$(window).height();
        var thisLi=$(this).index();//순서형
        var thisTop=ht*thisLi;
        pageAni(thisTop);
    })
});