"use strict";

/**
Task 1;
let myAlphabet = ['A', 'B', 'C', 'D','E','F', 'G'];
What is the length of the array?
Write a function called myAlphabetLength which console.logs the length of the array
Within the function also use an if-conditional statement that checks if the number of items within the array are less than 5
**/
/*let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
function myAlphabetLength() {
  let length = myAlphabet.length;
  if (length < 5) {
    return `Yes the ${length} is less than 5`;
  } else {
    return `Yes the ${length} is greater than 5`;
  }
}
console.log(myAlphabetLength());*/

/**
Task 2;
Declare a arrow function checkFunc that takes a string and a boolean as parameters
Call the function using 2 arguments
**/
/*const checkFun = (name, isNot) => (ele1,ele2) => name === type.string;

console.log(checkFun());*/

/**
Task 3;
Declare and initialize an array called Planets with 5 string values
console.log each item in the array
Also console.log the index in each iteration
**/
let planets = ["earth", "mars", "venus", "saturne", "jupiter"];
let newArray = [];

planets.filter((ele) => ele(index));
return planets;

console.log(newArray);

/**
Task 4:
Declare and initialize an array called wowDatatypes
The array must have 5 different data types (NOT objects)
Iterate over the array and console.log each item in the array + it’s index and data type in the array
**/

/**
Task 5:
console.log each item in this array WITHOUT using a for loop
   let myArr = [ 1, 2, 'One', true];
**/

/**
Task 6:
let student1Courses = ['Math', 'English', 'JSProgramming'];
let student2Courses = ['Geography', 'Spanish', 'JSProgramming'];
Loop over the 2 arrays and if there are any common courses, if so console.log them
**/

/*

Task 7:
let furniture = ['Table', 'Chairs','Couch'];
For each item in this array console.log the letters in each item
**/

//1
/*let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
function myAlphabetLength() {
  return myAlphabet.length;
}
console.log(myAlphabetLength());*/
//or in arrow function
/*let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
const myAlphabetLength = () => myAlphabet.length;
console.log(myAlphabetLength());*/

//6
/*let student1Courses = ["Math", "English", "JSProgramming"];
let student2Courses = ["Geography", "Spanish", "JSProgramming"];
const commonValue = student1Courses.filter((course) =>
  student2Courses.includes(course)
);
console.log(commonValue);*/
