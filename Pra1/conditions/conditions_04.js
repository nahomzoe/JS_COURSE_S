"use strict";

/**
Complete the function evenOrOdd such that it returns the string "even"
when the number parameter it receives is even and "odd" otherwise.

Tests
Implements evenOrOdd() for even numbers
Implements evenOrOdd() for odd numbers
/**
 * @param {string} number
 */
/*function evenOrOdd(number) {
  if (number < 0 && number % 2 == 0) {
    return "Even and Negative";
  } else if (number < 0 && number % 2 == 1) {
    return "Odd and n";
  } else if (number > 0 && number % 2 == 0) {
    return "Even and Posetive";
  } else return "Odd and Posetive";
}

console.log(evenOrOdd(-4));*/
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(5));
