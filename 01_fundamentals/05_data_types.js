/* A value in javascript always has a certain type.  For example
a string or a number.  There are 8 basic data types in the language,
all of these are outlined below */

"use strict";

// The numbers data type
function Numbers() {
    // Number types in javascript represent integers and floating point numbers
    const fixedNumber = 300;
    let variableNumber = 200;
    variableNumber = 900;
    console.log(variableNumber);
    console.log(fixedNumber);

    variableNumber = 10.20;
    console.log("We can assign a previous integer to a floating point number", variableNumber);
}



function Main() {
    Numbers()

}


Main();