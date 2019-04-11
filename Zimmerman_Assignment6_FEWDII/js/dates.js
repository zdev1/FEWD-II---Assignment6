/*eslint-env browser*/

//STEP 1
function part1() {
    "use strict";
 
    var userMonth = window.prompt("Enter the day of the month!");
    window.console.log(userMonth);


    var daysMonth = new Date(2018, userMonth, 5).getDate();
    window.console.log("There are " + daysMonth + " days in " + months[userMonth]);
}

//STEP 2
function part2() {
    "use strict";
    var datePicked = new Date(window.prompt("Enter a new date!"));
    console.log(months[datePicked.getDay()]);
}
//STEP 3
function part3() {
    "use strict";
    var datePicked = new Date(window.prompt("Enter a new date!"));
    if (datePicked.getDay() == 1 || datePicked.getDay() == 5) {
        console.log(datePicked + " is during the week")
    } else {
         console.log(datePicked + " is NOT during the week")
    }
}
//STEP 4
function part4() {
    "use strict";
    var tomorrow = new Date();

    console.log("Yesterday was " + days[today.getDay() -1 ]);
}

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
