$(document).ready(function()) {
  $("form#trianglemeasure").submit(function(event)  {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var equilateral = "Equilateral";
    var isosceles = "Isosceles";
    var scalene = "Scalene";
    var nottriangle = "NOT A TRIANGLE";


    function triangle  (side1, side2, side3)

    if (side1===side2===side3){
      $("#real").text("This is an Equilateral Triangle");
    } else if (side1===side2 || side2===side3 || side1===side3) {
			$("#real").text("This is an Isosceles Triangle");
    } else if (side1!==side2!==side3 && side1+side2>side3 || side2+side3>side1 || side1+side3>side2)
			$("real").text("This is a scalene triangle");
    } else {
			$("real").text("NOT A TRIANGLE")
    }
  });
});
