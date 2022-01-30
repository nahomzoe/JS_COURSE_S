"use strict";

/**
Write a function named greaterNum that:
takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs, and log the output to make sure it works
(e.g. "The greater number of 5 and 10 is 10.").


/**
 * @param {numbers} 
 */

/*function greaterNum(num1, num2) {
  return num1 > num2
    ? `The greater number of ${num1} and ${num2} is ${num1}`
    : `The greater number of ${num1} and ${num2} is ${num2}`;
}
console.log(greaterNum(14, 10));*/

function greaterNum(num1, num2) {
  if (num1 > num2) {
    return `The greater number of ${num1} and ${num2} is ${num1}`;
  } else `The greater number of ${num1} and ${num2} is ${num2}`;
}
console.log(greaterNum(14, 10));
