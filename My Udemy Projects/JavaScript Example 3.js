
var firstSide = 7; 
var secondSide = 6; 
var thirdSide = 4; 

var s = (firstSide + secondSide + thirdSide) / 2;

var area = Math.sqrt(s * ((s - firstSide) * (s - secondSide) * (s - thirdSide)));

console.log(area);