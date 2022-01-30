"use strict";

/**
Write a function named assignGrade that:
takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.

/**
 * @param {string}
 */

function assignGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score < 90 && score >= 80) {
    return "B";
  } else if (score < 80 && score >= 70) {
    return "C";
  } else if (score < 70 && score >= 60) {
    return "D";
  } else if (score < 60 && score >= 50) {
    return "F";
  } else {
    ("You do the course again");
  }
}

console.log("You got a " + assignGrade(95));
console.log("You got a " + assignGrade(50));
