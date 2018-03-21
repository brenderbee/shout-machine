$(document).ready(function() {
  $("form").submit(function(event){
    var saysomethingInput = $("input#saysomething").val();

    $(".shout").text(saysomethingInput.toUpperCase());

    event.preventDefault();
  });

});
