$(function(){
//----------------------

//-------메인슬라이더 바

var mS=$(".visual_slider").slick({
  autoplay:true,
  arrows:false,
  pauseOnHover:false,
});

$('.main_slider .sbar2 span').css({width:100});

mS.on('beforeChange', function(e,s,c,n){
    $('.main_slider .sbar2').removeClass('animation_active');
});
mS.on('afterChange', function(e,s,c){
    $('.main_slider .btn li').eq(c).addClass('animation_active')
    .siblings().removeClass('animation_active');

    $('.main_slider .sbar2 span').css({width:100*(c+1)})

});

$('#main_visual .btn li').on('click', function(){
    var idx=$(this).index();
    mS.slick('slickGoTo', idx)
});

//------------슬로건 슬라이더

var contentSlider01=$(".content_slider").slick({
  arrows:false,
  autoplay:true,
  autoplaySpeed:0,
  //pauseOnHover:false,
  pauseOnFocus:false,
  dots:false,
  speed:10000,
  centerMode: true,
  variableWidth: true,
  cssEase:"linear",
});  


var contentItem=$(".content_slider");
contentItem.eq(3).addClass("on")
contentSlider01.on("afterChange", function(event,slick,current){
  contentItem.eq(current+3).addClass("on").siblings().removeClass("on");
});



//-------- 어바웃 AOS 이벤트



AOS.init();

  




//----------- 모바일 다단메뉴

$('.mobile_open').on('click', function(){
  $(this).toggleClass('on');
  $('.gnb').toggleClass('on');
 });


 $('.gnb>ul>li>a').on('click', function(){
  if($('nav').hasClass('on')) {
    $(this).next().stop().slideToggle();
    $(this).parent().siblings().find('.depth02').slideUp();
  }
});



$(window).on('resize', function(){
  $('.depth02').removeAttr('style');
});




//----------- 서치메뉴
$('.right_menu .xi-search').on('click', function(){
  $('.search_background').show();
});

$('.search .xi-close').on('click', function(){
  $('.search_background').hide();
});

$('.right_menu .xi-search').on('click', function(){
  $('.search').toggleClass('on');
  $(this).toggleClass('on');
});

$('.xi-close').on('click', function(){
  $('.search').toggleClass('on');
  $(this).toggleClass('on');
});


$('.logo_slider').slick({
  arrows:false,
  autoplay:true,
  infinite: true,
  slidesToShow: 9,
  slidesToScroll: 1,
  autoplaySpeed:500,
  dots:false,
  pauseOnHover:false,
  pauseOnFocus:false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
  ]
});














//-----------------------

});