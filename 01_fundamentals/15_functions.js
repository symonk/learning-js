/*
The grouping of statements together can be done with functions;
Functions are a staple is reducing code duplication and reusability.
*/

/*
The function keyword is used to denote a function
The name following the function builtin is the name of the function
function parameters follow inside the parenthesis
since this is vanilla javascript, we don't concern ourselves too much with types
and return types etc.
*/
function DoubleNumber(x) {
  // Double a number
  return x * 2;
}

const x = 'global scope';

function LocalVariables() {
  // functions declared inside a function are 'local' scoped;
  let x = 10;
  console.log('Printing a local variable', x);
  console.log('Even tho a global x exists; local x takes priority.', x);
}

// An important note with js is that values are
// pass by value, however in the case of objects
// the value is a reference.
function AdditionalParameters(name, age, height) {
  console.log(
    `Hello ${name}.  You are ${age} years old and ${height} centimetres tall.`,
  );
}

// oddly enough in javascript, if arguments are not provided
// to function calls, they are undefined.
function AllArgumentsAreOptional(weird) {
  console.log(weird);
}

// When arguments are omitted, default values can be set
function DefaultArgumentsIfOmitted(weird = 'foo') {
  // This will always be foo if not provided now
  // rather than undefined.
  // if 'undefined' is explicitly passed as the argument, foo is used.
  console.log(weird);
}

function Recalculate() {
  return Math.random();
}
// unlike other languages such as python, this default value is
// invoked every time the function is called without providing
// a value for auto, not evaluated once and binded.  This
// avoids a common error in python where using a default argument
// of an immutable etc can burn you.
function DefaultArgumentsExpressions(auto = Recalculate()) {
  console.log(auto);
}

console.log(DoubleNumber(10) === 20);
// Like we mentioned in type conversions; math operators are smart
// enough to handle other types; nothing magic on our side here.
console.log(DoubleNumber('15') === 30);

LocalVariables();
AdditionalParameters('George', 20, 150);
AllArgumentsAreOptional('foo');
AllArgumentsAreOptional();
DefaultArgumentsIfOmitted(); // 'foo'
DefaultArgumentsIfOmitted(undefined); // still 'foo'.

// The default auto is evaluated each time
for (let i = 0; i < 10; i++) {
  // do not pass auto to see the random each time.
  DefaultArgumentsExpressions();
}
