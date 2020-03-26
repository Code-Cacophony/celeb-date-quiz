$(document).ready(function(){
  $("form#user-info").submit(function(event) {
    var season = $("input:radio[name=season]:checked").val();
    var dog = $("input:radio[name=dog]:checked").val();
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    if (age <= 18 || age >= 16 && gender == male){

      $("#d1").show();     
    }
    else if (age > 18 && gender === male){
      $("#d2").show();
    }
    else if (age > 18 && dog === "doberman" || dog === "german-shep") {
      $("#d3").show();
    }
    else if (season == fall || winter){
      $("d4").show();
    }
    else if(season === spring || season === summer){
      $("d5").show();
    }
    event.preventDefault();
  });
});