// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

//It's lexical scope is internal, meaning it has access to its own variables, the variables of the functions outside of it, and the global scope, but it would not have access to variables nested within it (if they present.)

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number){
  let counter = 0
  let number2 = number
  for(let i = 0; i < number2; i++){
    counter = number + counter;
    number--
  }
  return counter;
}
summation(4)

