var formatHeight = function(number1, number2){
  return number1 + "' " + number2;
}

var add = function(number1, number2){
  return number1 + number2;
}

$(document).ready(function(){
  $("form#form-height").submit(function(){
    event.preventDefault();
    var number1 = parseInt($("#height-f").val());
    var number2 = parseInt($("#height-i").val());
    // var display = formatHeight(number1, number2);
    // $("#output").text(display);
    var result = add(number1, number2);
    $("#output").text(result);
    $("#rides").show();

    if (result <= 12){
      $(".rides-short").effect("#highlight");
    }
    else {$(".rides-tall").toggle(".highlight-tall");}

  });
});