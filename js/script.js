$(function(){
    var btn=$('header').find('button');
    var nav=$('header').find('nav');
    var tabs=$('.menu').find('a');
    var panels=$('.panel');
    var lastTab=tabs.filter('.on');
    var lastPanel=$(lastTab.attr('href'));


    panels.hide(); 
    lastPanel.show();
    tabs.click(function(e){
        e.preventDefault();
        var thiswTab=$(this);
        var thisPanel=$(thisTab.attr('href'));
        lastTab.removeClass('on');
        thisTab.addClass('on');
        lastPanel.hide();
        thisPanel.show();
        lastTab=thisTab;
        lastPanel=thisPanel;
    });
        
    
btn.click(function(){
		if($(this).hasClass('on')){
			nav.stop().fadeOut(200);
			$(this).removeClass('on');
		}else{
			nav.stop().fadeIn(200);
			$(this).addClass('on');
		}
    $(this).next().stop().slideToggle(200);
      
	});
    
nav.find('a').click(function(){
		targetAnimate($(this));
		if($(window).width() < 1024){
			nav.fadeOut(200);
			btn.removeClass('on');
		}
	});
    
     $('.modal').magnificPopup({type:'image',gallery:{enabled:true}
        }).each(function(){
         $(this).appedn('<div class="title">'+
        $(this).attr('title')+'</div>');
     });
})

    