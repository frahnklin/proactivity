// JavaScript code to make div element draggable
$( function() {
  $( ".draggable" ).draggable({
    containment: "window",
    scroll: false
  });
});