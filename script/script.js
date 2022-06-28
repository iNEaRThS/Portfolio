$(document).ready(function(){

  //info_box .gotsite_btn 오버 효과
  $(".info_box li .gosite_btn").mouseenter(function(){
    $(".info_box li .gosite_btn i").animate({"margin-left":"20px"});
  });
  $(".info_box li .gosite_btn").mouseleave(function(){
    $(".info_box li .gosite_btn i").animate({"margin-left":"0px"});
  });

  //버튼 누르면 색상바뀌기
  $(".nav_btn>div").click(function(){
    
    $(".nav_btn>div").removeClass("style_active");
    $(".nav_btn>div").addClass("nav_btn_style");
    $(this).addClass("style_active");
    

    val=$(this).index();
    $(".info_box ul").animate({"left":-400*val+"px"});
    $(".display .display_show ul").animate({"margin-left":-830*val+"px"});

  });


  //items에 hover시 아래 박스 위로나오기
  $(".web_design_in .grid_item .items").mouseenter(function(){
    $(this).find(".hover_box").stop(true,true).animate({"marginBottom":"80px"},200);
  });

  $(".web_design_in .grid_item .items").mouseleave(function(){
    $(this).find(".hover_box").stop(true,true).animate({"marginBottom":"0px"},200);
  });

  var graphic_modals = $(".grid_item .items").index(); //items의 갯수
   // items클릭시 모달창
  $(".web_design_in .grid_item .items").click(function(){

    $(".g_page span:nth-child(1)").text(graphic_modals+1);
    $("html").css({overflowY:"hidden"});
    $(".graphic_modals>li").eq(graphic_modals).show();
    $("#graphic_modal").stop(true,true).fadeIn();
  });
  /*다음보기*/
  $(".g_btn .g_right_btn").click(function(){

    $("#graphic_modal").scrollTop(0); /*스크롤 상단으로 올리기*/      

    if(graphic_modals<7){
       $(".graphic_modals>li").eq(graphic_modals).stop(true,true).fadeOut(); 
       graphic_modals++;   

       $(".g_page span:nth-child(1)").text(graphic_modals+1); /*페이지 번호*/
       $(".graphic_modals>li").eq(graphic_modals).stop(true,true).fadeIn();         
    }

 });

  /*이전보기*/
 $(".g_btn .g_left_btn").click(function(){

    $("#graphic_modal").scrollTop(0); /*스크롤 상단으로 올리기*/

    if(graphic_modals>0){
       $(".graphic_modals>li").eq(graphic_modals).stop(true,true).fadeOut();
       graphic_modals--;         

       $(".g_page span:nth-child(1)").text(graphic_modals+1); /*페이지번호*/
       $(".graphic_modals>li").eq(graphic_modals).stop(true,true).fadeIn();
    }
 });

  /*오른쪽 상단 버튼-닫기*/
 $(".g_btn_close, .modal_back").click(function(){
    $("html").css({overflowY:"scroll"});
    $("#graphic_modal").stop(true,true).fadeOut();
    $(".graphic_modals>li").stop(true,true).hide();
 }); 



});