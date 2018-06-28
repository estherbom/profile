$(function(){
    $('button').click(function(){
        $(this).next().stop().slideToggle(200);
    });
	$('.nav').find('a').click(function(){
		var target = $($(this).attr('href'));
		$('html,body').stop().animate({scrollTop:target.offset().top},2000);
	});
    
     $('.modal').magnificPopup({type:'image',gallery:{enabled:true}
        });
})

