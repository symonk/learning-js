/*
javascript offers traditional for and while loops aswell as many others.
We touch on all variations of loops here.  Each example shows how to
loop 1 through 10 and print the value.
*/
function WhileLoop() {
  console.log('The while loop');
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
  }
}

function DoWhileLoop() {
  console.log('The do while loop');
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 10);
}

function ForLoop() {
  console.log('The for loop');
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

function ContinueAndBreak() {
  let i = 0;
  while (i < 10) {
    if (i % 2 === 0) {
      i++;
      continue;
    }
    // print odd numbers only.
    console.log(i);
    if (i === 5) {
      console.log('terminating the loop');
      break;
    }
    i++;
  }
}

function NestedBreaksAndLabels() {
  // One cool feature of javascript is the use of labels in for loops.
  // This can allow nested breaking with ease.
  // In this example, we break out of a nested for loop with a single
  // break statement.
  console.log('Nested Breaking Example!');
  outer: for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      console.log(i, j);
      if (j === 5) {
        break outer;
      }
    }
    i++;
  }
  console.log('Finished!');
}

function Main() {
  WhileLoop();
  DoWhileLoop();
  ForLoop();
  ContinueAndBreak();
  NestedBreaksAndLabels();
}

Main();
