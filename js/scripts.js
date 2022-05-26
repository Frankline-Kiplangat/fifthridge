// User interface
$(document).ready(function() {
    $('.scroll-link').click(function(event) {
      $('body, html').animate({
        scrollTop: $("#gallery").offset().top
      }, 800);
  
    });
  });

  $(document).ready(function() {
    $('.nav-item').click(function(event) {
      $('body, html').animate({
        scrollTop: $("#about").offset().top
      }, 800);
  
    });
  });

// business logic
let myArray = [];

function choose(){
    myArray.length = 10;

    if(document.getElementById("djay").checked){
        myArray.push(20000)
        document.getElementById("system").innerHTML = ("Dj and System Ksh:20000")
    };

    if (document.getElementById("food").checked){
        myArray.push(30000)
        document.getElementById("fud").innerHTML = ("Food Ksh:30000")

    };
    if (document.getElementById("venue").checked){
        myArray.push(30000)
        document.getElementById("venu").innerHTML = ("Venue Ksh:30000")
    }
}

function basic(){
    alert("You have chosen the Basic package at ksh 35000")
    document.getElementById("base").disabled = true;
    document.getElementById("intermediate").disabled = true;
    document.getElementById("premium").disabled = true;
};
function inter(){
    alert("You have chosen the intermidiate package at ksh 65000")
    document.getElementById("base").disabled = true;
    document.getElementById("intermediate").disabled = true;
    document.getElementById("premium").disabled = true;
};
function prem(){
    alert("You have chosen the Premium package at ksh 85000")
    document.getElementById("base").disabled = true;
    document.getElementById("intermediate").disabled = true;
    document.getElementById("premium").disabled = true;
};
// user interface
$(document).ready(function () {
  $("form#custom").submit(function (event) {
    event.preventDefault();
    drinks = $("input[type=checkbox]:checked").map(function (_, sel) {
        return $(sel).val();
 })
      .get();

    if (drinks === undefined || drinks.length == 0) {
      alert("make selections please");
      return false;
    } else {
      $("#drinks").html("")
      drinks.forEach(drink => {
        $("#drinks").append("<li class='drink'>" + drink + "</li>");
      });
    };

    let security = $("#select option:selected").text();
    let securityCost = parseInt($("#select option:selected").val())

    $("#security").text(security);
    myArray.push(securityCost)

    let total = 0;

    myArray.forEach(n => {
      total += n
      $("#total").text(total)
    });
  });
  
});
