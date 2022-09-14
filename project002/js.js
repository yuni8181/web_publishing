$(document).ready(function(){


    // 실행문
    // header의 높이,section의 높이를 윈도우의 높이랑 맞추어라. 
    // 화면이 리사이즈 되었을때 윈도우의 높이랑 맞추어라. 
   let ht= $(window).height();

   $('header').height(ht);
   $('section').height(ht-50)
   let secNum = $('section').size()
   
//    wrap의 높이를 섹션의 높이를 더한만큼 맞추어라.

$('#wrap').height(ht*secNum)


$(window).resize(function(){

    let ht= $(window).height();

    $('header').height(ht);
    $('section').height(ht-50)
    let secNum = $('section').size()
    
 //    wrap의 높이를 섹션의 높이를 더한만큼 맞추어라.
 
 $('#wrap').height(ht*secNum)
 console.log(ht)
 console.log(ht*secNum)
})














// trailer의 li를 클릭했을때 해당 순번을 찾고 
// bigImg 의 p가 해당 넘버에 맞게 보이고 
// title의 텍스트가 아래에서 위로 올라오면서 변한다.

$('.trailer li').click(function(){
    
    let i= $(this).index()
 
    $('.bigImg>div').css({'transform':'rotate('+ (-144+(72*i)) +'deg)'})
    
    $('.title>div').removeClass('on')
    $('.title>div').eq(i).addClass('on')

    $('.bigImg>div>p').removeClass('on')
    $('.bigImg>div>p').eq(i).addClass('on')

});






let a =0;


// left를 클릭했을때 a의 숫자는 올라가고 
// trailer가 cssleft의 위치를 바꾸어라. 

$('.thumnail .left').click(function(){


    if(a<2)a++;



    $('.trailer ul').css({'left':-120*a})
})


$('.thumnail .right').click(function(){


    if(a>0)a--;

 

    $('.trailer ul').css({'left':-120*a})
})

// header에서 마우스를 내렸을때 wrap의 위치로 scroll의 위치가 바뀌어라.

$('header').mousewheel(function(event,delta){
    let ht= $(window).height();
    let wrapTop = $('#wrap').offset().top


    if(delta<0){

        $('html,body').stop().animate({scrollTop:wrapTop},800)
    }



})

// 첫번째 섹션에서 마우스를 올릴때 스크롤탑이 0 으로 가라.

$('section').eq(0).mousewheel(function(event,delta){

    if(delta>0){
        $('html,body').stop().animate({scrollTop:0},800)

    }

    // 첫번째 섹션에서 마우스를 내렸을때 다음섹션으로 넘어가라. 
    if(delta<0){

        let sec2Num= $('section').eq(1).offset().top
        $('html,body').stop().animate({scrollTop:sec2Num},800)

    }



})


// sec01 imgBox 에서 마우스가 움직일때 span이 따라와라.

$('.sec01 .imgBox').mousemove(function(e){
    let posx = e.pageX;
    let secWd = $(this).width()
    $('.sec01 .imgBox').find('span').css({'left':(posx/secWd)*100})





})

// btn의i를 클릭했을때 해당 순번에 맞는 imgbox의 p와
// txtBox의 div에게 on 값을 부여해라. 

$('.btn i').click(function(){

    let bi=$(this).index()
    $('.con01 .imgBox p').removeClass('on')
    $('.con01 .imgBox p').eq(bi).addClass('on')


    $('.con01 .txtBox div').removeClass('on')
    $('.con01 .txtBox div').eq(bi).addClass('on')

})

// 스크롤의 값이 일정 크기의 값에 도달했을때 해당 div가 나타나라.

$(window).scroll(function(){


    let sc = $(this).scrollTop();
    let sec01 = $('section').eq(0).offset().top;
    let sec02 = $('section').eq(1).offset().top;


    if(sc>=sec01-300 && sc<sec02){

        $('section').eq(0).addClass('on')
    }else{
        $('section').eq(0).removeClass('on')
    }

    if(sc>=sec02-300){

        $('section').eq(1).addClass('on')
    }

})





})