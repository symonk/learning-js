//These following are browser specific.

// Alert the user of some action;
alert("This pops up an alert in the browser for the user to press OK on");

// Capture user input with a sensible default;
// This result can be the Null type if cancel/esc is pressed;
result = prompt("What is your name?", "George");


// Confirm with a logical boolean, similar to result
// OK = true; otherwise false;
let wasTrue = confirm("is it true?");