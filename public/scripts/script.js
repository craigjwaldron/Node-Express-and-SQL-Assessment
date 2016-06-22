console.log("hey from script.js");

$( document ).ready( function(){
  $("#submitButton").on("click", function(){
    console.log("button works");
  var animalName = $("#animalName").val();
    console.log( animalName );
// Object -------------------------------------------------------------------------------------------------------
var animal = {
  "type" : animalName,
  "total" : 0
};
// sendObject( animal );

// Post -------------------------------------------------------------------------------------------------------
  $.ajax({
    type: "POST",
    url: "/animalKingdom",
    data: animal,
    success: function (data){
      getAnimals();
      }
    
    }); // End ajax
  }); // End of submitButton

// Append to DOM -------------------------------------------------------------------------------------------------------
function getAnimals(){
  $.ajax({
    type: "GET",
    url: "/animalData",
    success: function( data ){
    showAnimals ( data );
      }
    });
}
// ---------------------------------------------------------------------
    function showAnimals ( zoo ){
    console.log( 'in showUsers:' + zoo );
    for( i=0; i<zoo.length; i++ ){
      var userOut = "<p>" + zoo[i].type + "  total: " + zoo[i].total + "</p>";
          $('#outputDiv').append( userOut );
    } // End of loop

  }
  getAnimals();
}); // End jQuery
