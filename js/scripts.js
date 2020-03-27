$(document).ready(function(){
  $("form#user-info").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("#age").val());
    var gender = parseInt($("#gender").val());

       if (age >= 18 && gender === 1){
        $("#d3").show();
      } else {
        $("#no-input").show();
      }
      
      
    

  });
});