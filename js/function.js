function quadraticEquation() {
  var a = document.data.a.value;
  var b = document.data.b.value;
  var c = document.data.c.value;
  var real = document.getElementById("rozvjazok");
  var d = b * b - 4 * a * c; // визначаю дискримінант
  var firstX;
  var secondX;
  var result;

  if (d < 0) {
    result = "Дискримінант < 0. Дійсних коренів нема.";
  }
  else {
    if (d === 0) {

      firstX = secondX = -b / (2 * a);
      result = "Корінь один (два однакових корені), <br>x<sub>1</sub> = x<sub>2</sub> = " + firstX;
    }
    else {
      firstX = (-b - Math.sqrt(d)) / (2 * a);
      secondX = (-b + Math.sqrt(d)) / (2 * a);
      result = "Два різні корені:<br>x<sub>1</sub> = " + firstX + ", <br>x<sub>2</sub> = " + secondX;
    }
  }
  real.innerHTML = result;


}
