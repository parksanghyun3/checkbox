$(document).ready(function(){
  $("input:checkbox[name=checking]").each(function(e){
    $(this).on("change", function(){
      var num = $('input:checkbox[name="checking"]:checked').not("#check1").length;
      var num2 = $('input:checkbox[name="checking"]').not("#check1").length;
      var marketing = $(".marketing_list").find('input:checkbox[name="checking"]:checked').length;

      // 체크박스가 해제되었을때
      if(num === num2) {
      $(".all_check").find("#check1").prop("checked", true);
      }
      else {
        $(".all_check").find("#check1").prop("checked", false);
      }

      // 마케팅 개별적으로 누를때
      if(marketing >= 1) {
        $(".marketing_all_check").find("#check4").prop("checked", true);
      } else {
        $(".marketing_all_check").find("#check4").prop("checked", false);
      }

    }) 

      // 전체선택
      $(".all_check").on("click", function(){
        if($(".all_check").find("#check1").prop("checked")){
          $("input[type=checkbox]").prop("checked", false);
        }
        else {
          $("input[type=checkbox]").prop("checked", true);
        }
      });

      //마케팅 전체선택
      $(".marketing_all_check").on("click", function(){
        if($(".marketing_all_check").find("#check4").prop("checked")) {
          $(".marketing_wrap").find("input[type=checkbox]").prop("checked", false);
        }
        else {
          $(".marketing_wrap").find("input[type=checkbox]").prop("checked", true);
        }
      });
  });
});