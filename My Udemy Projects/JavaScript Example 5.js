
function cToF(celsius) {
    var c = celsius;
    var cCtF = c * 9 / 5 + 32;
    var message = c + '\xB0C is ' + cCtF + ' \xB0F.';
    console.log(message);
  }
  
  function fToC(fahrenheit) {
    var f = fahrenheit;
    var cFtC = (f - 32) * 5 / 9;
    var message = f + '\xB0F is ' + cFtC + '\xB0C.';
    console.log(message);
  }
  cToF(60);
  fToC(350); 