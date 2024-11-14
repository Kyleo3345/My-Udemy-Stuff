var t = new Date();
var day = t.getDay();
var daylist = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
console.log("Today is: " + daylist[day] + ".");

var h = t.getHours();
var m = t.getMinutes();
var s = t.getSeconds();

var prepand = (h >= 12) ? " PM " : " AM ";

h = (h >= 12) ? h - 12 : hour;

if (h === 0 && prepand === ' PM ') {
    if (m === 0 && s === 0) {
        h = 12;
        prepand = ' Noon';
    } else {
        h = 12;
        prepand = ' PM';
    }
}

console.log("Current Time: " + h + prepand + " : " + m + " : " + s); 
