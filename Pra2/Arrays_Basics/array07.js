"use strict";

/**
Loop through array elements
Complete the function loopThroughElements such that it iterates over every item in the elements array it receives
and logs it to the console (using console.log).

/**
 * @param {array} elements
 */
function loopThroughElements(elements) {
  elements.forEach(function (ele) {
    console.log(ele);
  });
}

// Sample usage - do not modify
loopThroughElements(["Sam", "Charlie", "Alex"]); // should log every name to the console
