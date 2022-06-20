$(document).ready(function(){

  $(".thumbs .thumb_web").mouseenter(function(){
    $(this).stop().animate({"width":"100%"},500);
    $(".thumbs .thumb_uiux").animate({"width":"0%"},200);
    $(".thumbs .thumb_uiux .uiux_text").css({"display":"none"});
  });

  $(".thumbs .thumb_web").mouseleave(function(){
    $(this).stop().animate({"width":"50%"},200);
    $(".thumbs .thumb_uiux").animate({"width":"50%"},500);
    $(".thumbs .thumb_uiux .uiux_text").css({"display":"block"});
  });

});