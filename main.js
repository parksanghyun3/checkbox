$(document).ready(function(){

  // var leng = $('input:checkbox[name="menu"]:checked').length;

  
  var $allCheck = $(".all_check");
  var num = $('input:checkbox[name="checking"]:checked').length;
  console.log(num);
  $("input:checkbox[name=checking]").each(function(e){
      $(this).on("click", function(){
        if(this.checked) {
          alert(num);
        } else {
          alert(num);
        }
      }) 
  });
  
  // 전체선택
  $($allCheck).on("click", function(){
    if($allCheck.find("#check1").prop("checked")){
      $("input[type=checkbox]").prop("checked", false);
    } else {
      $("input[type=checkbox]").prop("checked", true);
      }
      
    }); 

});