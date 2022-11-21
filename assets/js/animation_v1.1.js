$(function(){

    //motion
    function ani(){
        winh = $(window).height();
        scrt = $(window).scrollTop();

        $(".motion, .motion-wrap").each(function(){                    
            se_t = $(this).offset().top
            if(scrt >= se_t - winh * 0.7){
                //스크롤된양이 객체높이 - 화면중간보다 클경우
                $(this).addClass("m-act")
            }else{
                $(this).removeClass("m-act")
            }//if else
        })//each
    };

    function bgcFn(){
        winh = $(window).height();
        scrt = $(window).scrollTop();

        $('.m-bg-c').each(function(){
            bg_t = $(this).offset().top;
            color = $(this).data('bgc');

            if(scrt >= bg_t - winh * 0.85){
                //스크롤된양이 객체높이 - 화면중간보다 클경우
                $('body').css("background-color", color);
            }
        });
    }

    ani();
    bgcFn();
    $(window).scroll(function(){
        ani();
        bgcFn();
    });
    $(window).resize(function(){
        ani();
        bgcFn();
    })
});