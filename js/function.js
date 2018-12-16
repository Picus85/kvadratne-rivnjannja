function data_equation() {
  var a = document.data.a.value;
  var b = document.data.b.value;
  var c = document.data.c.value;
  var real = document.getElementById("rozvjazok");
    var d = b * b - 4 * a * c; // визначаю дискримінант
  var firstX;
  var secondX;
  var rezultat;

  if (d < 0) {
    rezultat = "Дискримінант < 0. Дійсних коренів нема.";
  }
  else {
    if (d == 0) {
      rezultat = "Корінь один (два однакових корені), кратності 2<br>x<sub>1</sub> = x<sub>2</sub> = ";
      firstX = secondX = -b / (2 * a);
      rezultat += firstX;
    }
    else {
      firstX = -b / (2 * a) - Math.sqrt(d) / (2 * a);
      secondX = -b / (2 * a) + Math.sqrt(d) / (2 * a);
      rezultat = "Два різні корені:<br>x<sub>1</sub> = " + firstX + ", <br>x<sub>2</sub> = " + secondX;
    }
  }
  real.innerHTML = rezultat;

}
