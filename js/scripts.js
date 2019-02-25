function trianglemeasure(){
  var side1=parseInt(document.getElementById('side1').value);
  var side2=parseInt(document.getElementById('side2').value);
  var side3=parseInt(document.getElementById('side3').value);

  if(side1==side2 && side2==side3){
    alert("Equilateral Triangle");
  } else if (side1==side2 || side2 == side3 || side3 == side1) {
    alert("Isosceles Triangle");
  } else if(side1 !=side2 && side2 !=side3){
    alert("Scalene Triangle")
  } else {
    alert("Not a Triangle")
  }
}
