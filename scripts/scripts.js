$(document).ready(function() {

  //submit function line
  $("form#capitalForm").submit(function(event) {
    
    //declare the HTML form input as a variable
    var uppercaseInput = $("#uppercase").val();

    //declare a variable that takes the HTML form input and capitalizes it
    var uppercase = uppercaseInput.toUpperCase();

      //append the capitalized text to the uppercase class
      $(".uppercase").text(uppercase);

      //show the hidden ID
      $("#hidden").show();

    //prevent the default action of the form submittal
    event.preventDefault();
  });
});
