// buisness logic
var numbers = [1, 5, 10, 50, 100, 500, 1000];
var numerals = ["I", "V", "X", "L", "C", "D", "M"];

    console.log(numerals[1]);

function convert(Num) {
  if (num = 5) {
    return numerals[1];
  }
}



// user interface
$(document).ready(function(){
  $("form#converter").submit(function(event) {
    event.preventDefault();

    var userInputNum = parseInt($("input#num").val());
    console.log(userInputNum);

    $("#output ul").append("<li>" + convert(userInputNum) + "</li>");

  });
});
