function substrings(str1) {
    var ar1 = [];
  
    for (var x = 0, y = 1; x < str1.length; x++, y++) {
      ar1[x] = str1.substring(x, y);
    }
  
    var c = [];
    var t = "";
    var total = Math.pow(2, ar1.length);
  
    for (var i = 0; i < total; i++) {
      t = "";
      for (var j = 0; j < ar1.length; j++) {
        if (i & Math.pow(2, j)) {
          t += ar1[j];
        }
      }
      if (t !== "") {
        c.push(t);
      }
    }
  console.log(c.join("\n"));
  }
  substrings("Main"); 