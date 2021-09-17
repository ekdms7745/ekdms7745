$(document).ready(function () {
    $(".btn1").click(function(){
      $(".img:nth-child(1)").css("opacity", 1);
      $(".img:nth-child(2)").css("opacity", 0);
      $(".img:nth-child(3)").css("opacity", 0);
    });
  
    $(".btn2").click(function(){
      $(".img:nth-child(1)").css("opacity", 0);
      $(".img:nth-child(2)").css("opacity", 1);
      $(".img:nth-child(3)").css("opacity", 0);
    });
  
    $(".btn3").click(function(){
      $(".img:nth-child(1)").css("opacity", 0);
      $(".img:nth-child(2)").css("opacity", 0);
      $(".img:nth-child(3)").css("opacity", 1);
    });
  
  
    $('.left_btn').click(function(){
      var imgFirst = $(".slide_box").find(".first").index(); //0
      var imgLen = $(".slide_box .img").length; //3
      
      $(".slide_box .img").eq(imgFirst).removeClass("first");
      $(".slide_box .img").eq(imgFirst).css("opacity", 0);
  
      imgFirst = imgFirst - 1;
  
      if(imgFirst < 0){
        $(".slide_box .img").eq(imgLen -1).css("opacity", 1);
        $(".slide_box .img").eq(imgLen -1).addClass("first");
      } else {
        $(".slide_box .img").eq(imgFirst).css("opacity", 1);
        $(".slide_box .img").eq(imgFirst).addClass("first");
      }
    });
  
    $('.right_btn').click(function(){
      var imgFirst = $(".slide_box").find(".first").index(); //0
      var imgLen = $(".slide_box .img").length; //3
      
      $(".slide_box .img").eq(imgFirst).removeClass("first");
      $(".slide_box .img").eq(imgFirst).css("opacity", 0);
  
      imgFirst = imgFirst + 1;
  
      if(imgFirst === imgLen){
        $(".slide_box .img").eq(0).css("opacity", 1);
        $(".slide_box .img").eq(0).addClass("first");
      } else {
        $(".slide_box .img").eq(imgFirst).css("opacity", 1);
        $(".slide_box .img").eq(imgFirst).addClass("first");
      }
    });
  });