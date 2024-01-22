/* Most of the time in javascript, operators and functions automatically
convert the values given to them to the right types.
*/

function NumberConversion() {
  // conversion of numeric types
  console.log('6' / '2' === 3); // true!
  let cast = Number('100');
  console.log(cast); // 100!

  // no need to catch exceptions here; its implicitly
  // returned as NaN (not a number).
  console.log(Number('200ejejejwk'));

  // A few interesting takes
  console.log(Number(undefined) === NaN); // true!
  console.log(Number(null) === 0); // true!
  console.log(Number(true) === 1); // true!
  console.log(Number(false) === 0); // true!
}

function BooleanConversion() {
  // conversion of logical boolean types
  console.log(Boolean('true')); // true!
  console.log(Boolean('')); // false!
  console.log(Boolean(0)); // true!
  console.log(Boolean(1)); // true!

  // beware of the 'falsy' string
  console.log(Boolean('0') === true); // this is infact, true!
}

function StringConversion() {
  // conversion to primitive strings
  const foo = String(1);
  console.log(foo); // "1";
}

function Main() {
  NumberConversion();
  BooleanConversion();
  StringConversion();
}

Main();
