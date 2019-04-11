/*eslint-env browser*/

//STEP 1
function strings1() {
    "use strict";
    var name = window.prompt("Please state your name!");
    window.alert("Your name has " + name.length + " letters");
}
//STEP 2
function strings2() {
    "use strict";
    var name = window.prompt("What is your actual name?");
    window.alert("The letter " + number + " places from the beginning of your name is " + nameNum);
}
//STEP 3
function strings3() 
    "use strict";
    var name = window.prompt("What's your first name?") + " ";
    var lastName = window.prompt("What's your last name?");

//STEP 4
function strings4() {
    var text = "The quick brown fox jumps over the lazy dog";
    var foxIndex = text.indexOf("fox");
    alert("In the string: " + text + " \rThe first index at which 'fox' begins is " + foxIndex);
}
//STEP 5
function strings5() {
    var text = "The quick brown fox jumps over the lazy fox";
    var foxIndex = text.lastIndexOf("fox");
}
//STEP 6
function strings6() {
    var text = "The quick brown fox jumps over the lazy dog";
    var fullName = window.prompt("What's your full name?");
    alert(text.replace("the lazy dog", fullName));
}
