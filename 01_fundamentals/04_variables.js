/* Every javascript application will need variables, variables as always
are named storage for data, javascript has various different ways
to declare variables.  We won't cover 'scope' here, more on that later.  */

// Declare a variable with the name message.
let message;

// Assign a value to the name 'message'.
message = 'Hello';

// The string is now saved in memory associated with the name 'message'
// We can reference the data using the variable name.
console.log(message);

// It is possible to assign a variable to a value in one line also
let assigned = 'Assigned!';
console.log(assigned);

// We can also assign many variables, in a single line
let name = 'George',
  age = 20,
  description = 'A man called George.';

// However, the above is preferred to be written as such for readability:
let newName = 'George';
let newAge = 20;
let newDescription = 'A man called George.';

// In older javascript; you may encounter the 'var' keyword, it is ALMOST
// the same as 'let' we will cover that later.

// Reassigning variables is possible
let initial = 'foo';
initial = 'bar';
console.log(initial); // "Bar"

// Copying is also possible
let copyable = 'copy';
let receiver;
receiver = copyable;

// Redefining a variable with the same name, causes an error
let first = 'first';
// let first = "1st"; - This is not allowed.

/* There are two main limitations to variable naming in javascript
    1. The name must contain only letters, digits, or the symbols $ & _
    2. The first character must not be a digit.
*/
let thisIsOk1;
let thisisAlsoOk$;
let _this_$_is_ok_2;
let $ = 'allowed';
let _ = 'ok';
// let 2ThisIsNotOk;
// let this£isNot0K;

// As with most languages, there is a set of keywords which cannot be used
// let break = 10;
// let return = "not allowed";

// for constants that will not be re-assigned, the 'const' keyword is available
const GLOBAL_VARIABLE = 100;
// -> Not Allowed to be reassigned as such: GLOBAL_VARIABLE = 200;
