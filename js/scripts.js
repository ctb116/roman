$(document).ready(function(){
  $("form#converter").submit(function(event) {
    event.preventDefault();

    var userinput = $("input#num").val();

    console.log(userinput);

  });
});
