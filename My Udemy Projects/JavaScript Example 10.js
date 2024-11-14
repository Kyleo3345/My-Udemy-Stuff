function find_longest(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var res = array1[0];
  
    for (var x = 1; x < array1.length; x++) {
      if (res.length < array1[x].length) {
        res = array1[x];
      } 
    }
    return res;
  }
console.log(find_longest('Hey guys its tornado season in florida!'));