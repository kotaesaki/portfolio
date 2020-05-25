$(function(){
　$(window).scroll(function (){
    $('.fadein2').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight - 200){
            $(this).addClass('scrollin');
        }
    });
　});
});

window.onload = function() {
  scroll_effect();

  $(window).scroll(function(){
   scroll_effect();
  });

  function scroll_effect(){
   $('.fadein1').each(function(){
    var elemPos1 = $(this).offset().top;
    var scroll1 = $(window).scrollTop();
    var windowHeight1 = $(window).height();
    if (scroll1 > elemPos1 - windowHeight1){
     $(this).addClass('scrollin');
    }
   });
  }
};

