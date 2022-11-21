//menu-btn

function navhide(){
    $('.header-wrap nav.mover ul').removeClass('act');   
    setTimeout(function(){
        $('.header-wrap h1').removeClass('act');
        $('.header-wrap .btn-mnu').removeClass('act-color')
        $('.header-wrap nav.mover').removeClass('act');
        $('.navdummy').fadeOut(600);
    },1000);
}

$('.header-wrap .btn-mnu').click(function(){
    $(this).toggleClass('active')
    $(this).addClass('act-color')
    if($(this).hasClass('active')){
        $('.header-wrap h1').addClass('act');
        $('.header-wrap nav.mover').addClass('act')
        $('.header-wrap nav.mover ul').addClass('act')
        $('.navdummy').fadeIn(600);
    }else{
        navhide();
    }
});
$('.navdummy').click(function(){
    navhide();
    $('.header-wrap .btn-mnu').removeClass('active');
});


$(window).scroll(function(){
    var scrt = $(window).scrollTop();
    var headerh = $('header').innerHeight();
    
    if(scrt > headerh){
        $('header').addClass('scroll')
    }else{
        $('header').removeClass('scroll')
    }
});

$(window).resize(function(){
    var winw = $(window).width();

    if(winw > 600){
        $('.header-wrap h1').removeClass('act');
        $('.header-wrap .btn-mnu').removeClass('active');
        $('.header-wrap .btn-mnu').removeClass('act-color')
        $('.header-wrap nav.mover').removeClass('act');
        $('.header-wrap nav.mover ul').removeClass('act'); 
        $('.navdummy').fadeOut(600);
    }
});



//menu click
$(function(){

    function se_move(){
        let scrollTop = $(window).scrollTop();
        let arrSeTop = [];
        arrSeTop[0] = 0;
        arrSeTop[1] = $('.sec-profile').offset().top;
        arrSeTop[2] = $('.sec-portfolio').offset().top;
        arrSeTop[3] = $('.sec-contact').offset().top;
        // console.log(scrollTop)
        
        $('.header-wrap .gnb li').click(function(){
            var idx = $(this).index();
        
            $('html,body').stop().animate({
                scrollTop : arrSeTop[idx]
            });
    
            navhide()
            $('.header-wrap .btn-mnu').removeClass('active');
    
    
            // for(let k=0;k<4;k++){
            //     if(scrollTop>=arrSeTop[k]){
            //         $('.header-wrap .gnb li').eq(k).addClass('on').siblings().removeClass('on');
            //     }else if(scrollTop<arrSeTop[0]){
            //         $('.header-wrap .gnb li').removeClass('on');
            //     }
            // }  
        });
        
    }

    se_move();
    $(window).scroll(function(){
        se_move();
    });
    
});
