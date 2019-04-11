/*eslint-env browser*/

//STEP 1
function java1() {
    "use strict";
    var array = arg.split("");
    array = argArray.sort("");
    var wordString = Array.join("");
    return wordString;
    window.console.log(wordString);
}
//STEP 2
function java2(arg) {
    "use strict";
    var argArray = arg.split(" ");
    for (var i = 1; i < argArray.length; i++) {
        argArray[i] =  argArray[i].toUpperCase() + argArray[i];
    }
    return arg;
}
//STEP 3
function java3(arg) {
    "use strict";
    var argArray = arg.split("");
    var counter = 0;
    for (var i = 0; i < argArray.length; i++) 
    }
    return counter;

//STEP 4
function java4(arg) {
    "use strict";
    var randomString = "";
    for (var i = 0; i < arg; i++) {
        randomString = randomString + String.fromCharCode(Math.round(Math.random() * 93) + 33);
    }
    return randomString;
}
//STEP 5
function java5(arg) {
    "use strict";
    var name = argArray[0];

    for (var i = 0; i < argArray.length; i++) {
        if (argArray[i].length > longestCountryName.length) {
            name = argArray[i];
        }
    }
    return name;
}