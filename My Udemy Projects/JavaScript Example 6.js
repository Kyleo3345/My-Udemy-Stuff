function maxNum(x, y, z) {
    let max = 0;
    if (x > y) {
      max = x;
    } else {
      max = y;
    }
    if (z > max) {
      max = z;
    }
    return max;
  }
  
  console.log(maxNum(1, 0, 1));
  console.log(maxNum(0, -10, -20));
  console.log(maxNum(1000, 510, 440)); 