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

    // There are some special number constants for numbers, these are:
    // Infinity
    let infinity = 1 / 0;
    console.log(infinity);
    
    // negative infinity
    console.log(-Infinity);

    // NAN (not a number)
    let nan = "foo" / 10;
    console.log(nan);
}

// The BigInt data type
function BigIntegers() {
    // The number type system can store numbers that fit in a 64 bit storage
    // this equates to 2 to the power 53 minus 1

    // two number types exceeding the range
    const maximum = Math.pow(2, 53) - 1;
    let plusOne = maximum + 1;
    let plusTwo = maximum + 2;
    // They strictly equal the same, we fix this below
    console.log(plusOne === plusTwo)

    // Big integers have an 'n' suffix
    const bigNumber = 9999999999999999999999999999999999999999999999n;
    // `BigInt`
    console.log(typeof bigNumber);
}

// The string data type
function Strings() {
    // Single and Double quotes are largely the same
    // backticks offer additional functionality.
    let doubleQuoteString = "doubleQuoted";
    let singleQuoteString = 'singleQuoted';
    let backTicksString = `backTickString`;
    console.log(doubleQuoteString);
    console.log(singleQuoteString);
    console.log(backTicksString);

    // Backticks allow expression evaluation and interpolation into the string:
    const name = "George";
    let template = `Hello ${name}`;
    // Prints 'Hello George'.
    console.log(template);

    // Javascript does NOT have a char type for a single code point!
}

// The boolean data type
function Booleans() {
    let isTrue = true;
    let isFalse = false;
    console.log(isTrue);
    console.log(isFalse);
}


// The null data type
function Null() {
    // Unlike other languages, null in javascript is not a reference to a non existing object
    // or a null pointer like in some languages such as golang etc.
    let age = null;
    console.log(age);
}

// The underfined data type
function Undefined() {
    // Very similar to null, however a different meaning.
    // Something is undefined when its value has not been assigned.
    var age;
    console.log(age);
    console.log(typeof age == "undefined");
}

// User defined objects
function ObjectsAndSymols() {
    // Todo: Touch on this later once we've covered objects;
}

// The typeof builtin function
function TypeOf() {
    //The typeof builtin function returns the type of the operand.
    console.log(typeof "foo" === "string");
    console.log(typeof 0 === "number");
    console.log(typeof 0n === "bigint");
    console.log(typeof true === "boolean");
    // More on this later.
    console.log(typeof Symbol("id") === "symbol");
    console.log(typeof Math === "object");
    console.log(typeof null === "object");
    console.log(typeof ObjectsAndSymols === "function");

}



function Main() {
    Numbers();
    BigIntegers();
    Strings();
    Booleans();
    Null();
    Undefined();
    ObjectsAndSymols();
    TypeOf();
}


Main();