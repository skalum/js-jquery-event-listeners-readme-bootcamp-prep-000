function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", function() {
    $("img").addClass("tasty");
  })
}

function pressIt() {
  $("input").on("keydown", function(key) {
    if(parseInt(key.which) === 71) alert("Pressed G!");
  })
}

function submitIt() {
  $("form").on("submit", function () {
    alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){

});
