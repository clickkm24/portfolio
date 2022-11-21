//skill
$(function(){
    function skillFn(){
        $('.sec-profile .bar-list .cont').each(function(){
            var num = $(this).find('.bar').data('perc');
    
            $(this).find('.inner').stop().animate({
                height : num+'%',
                opacity : 1
            }, 1000);
        });
    }   

    $(window).scroll(function(){
        if($('.sec-profile .rgt').hasClass('m-act')){
            skillFn()
        }else{
            $('.sec-profile .rgt .bar-list .cont .bar .inner').css('height','0%')
        }
    });
});


//contact email
$(function(){
    $('.sec-contact button.copy').click(function(){
       // 화면에서 hidden 처리한 input box type을 text로 일시 변환
        $('#data-area').attr('type', 'text');
        
        // input에 담긴 데이터를 선택
        $('#data-area').select();
        
        //  clipboard에 데이터 복사
        var copy = document.execCommand('copy');
        
        // input box를 다시 hidden 처리
        $('#data-area').attr('type', 'hidden');
        
        // 사용자 알림
        if(copy) {
            alert("이메일 주소가 복사되었습니다.");
        }
    });
})


//cover scroll
$(function(){   

    $('.cover').on('wheel', function(event) {
        if (event.originalEvent.deltaY > 0) {
            $('body,html').animate({
                scrollTop : winh,
            },500)
            return false;
        }
    });

    // $('.sec-profile').on('wheel', function(event) {   
    //     var winw = $(window).width();

    //     if (event.originalEvent.deltaY > 0 && winw > 850) {
    //         $('body,html').animate({
    //             scrollTop : winh*2,
    //         },500)
    //         return false;
    //     }else if(event.originalEvent.deltaY < 0 && winw < 850.1){
    //         $('body,html').animate({
    //             scrollTop : 0,
    //         },500)
    //     }
    // });


    var startY,endY;        
    $(".cover").on('touchstart',function(event){
        startY = event.originalEvent.changedTouches[0].screenY;
    });
    $(".cover").on('touchend',function(event){
        endY=event.originalEvent.changedTouches[0].screenY;
        if(startY-endY>0){ //next, down
            $('body,html').animate({
                scrollTop : winh,
            },500)
            return false;
        }
    });

});


//마우스 포인터
$(function(){
    const cursor = document.querySelector("#cursor")

    let mouse = { x: -100, y: -100 }
    let pos = { x: 0, y: 0 }
    const speed = 0.1

    const updateCoordinates = (e) => {
        mouse.x = e.clientX
        mouse.y = e.clientY
    }

    window.addEventListener("mousemove", updateCoordinates)

    const updatePosition = () => {
        pos.x += (mouse.x - pos.x) * speed
        pos.y += (mouse.y - pos.y) * speed
        cursor.style.transform =
            "translate3d(" + pos.x + "px ," + pos.y + "px, 0)"
    }

    const loop = () => {
        updatePosition()
        requestAnimationFrame(loop)
    }

    requestAnimationFrame(loop)

    const cursorModifiers = document.querySelectorAll("[cursor-class]")

    cursorModifiers.forEach((cursorModifier) => {
        cursorModifier.addEventListener("mouseenter", function () {
            let attribute = this.getAttribute("cursor-class")
            cursor.classList.add(attribute)
        })
        
        cursorModifier.addEventListener("mouseleave", function () {
            let attribute = this.getAttribute("cursor-class")
            cursor.classList.remove(attribute)
        })
    })



    //모바일 기기
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // 모바일인 경우
        $('#cursor').hide();
    }
});