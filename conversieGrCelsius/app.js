window.onload = function () {
  let c = document.getElementById("celsius");
  let f = document.getElementById("fahrenheit");
  c.oninput = function () {
    f.value = (c.value * 9) / 5 + 32;
  };
  f.oninput = function () {
    c.value = ((f.value - 32) * 5) / 9;
  };
};
