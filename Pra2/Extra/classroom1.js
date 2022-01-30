"use strict";

/**

For each of the exercises below only 11 simple excercises, assume you are starting with the following people array.

let people = ["Sergei", "Mariia", "Boris", "Abel"];

1. Using a loop, iterate through this array and console.log all of the people (also rewrite it using arrow function).
2. Write the command to remove "Sergei" from the array.
3. Write the command to remove "Abel" from the array.
4. Write the command to add "Mahalete" to the front of the array.
5. Write the command to add your name to the end of the array.
6. Write the command to make a copy of the array using slice. The copy should NOT include "Sergei" or "Mariia".
7. Write the command that gives the indexOf where "Mariia" is located.
8. Write the command that gives the indexOf where "Foo" is located (this should return -1).
9. Redefine the people variable with the value you started with. Using the splice command, remove "Boris" from the array and add "Rakhi" and "Yulia". Your array should look like this when you are done ["Sergei", "Mariia", "Rakhi", "Yulia", "Abel"].
10. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".

/**
 */

/**
 * @param {people[]} strings
 */

/*const people = ["Sergei", "Mariia", "Boris", "Abel"];
for (let i = 0; i <= people.length; i++) {
  console.log(` This are the people I know`);
}
console.log(people);*/
/*const people = ["Sergei", "Mariia", "Boris", "Abel"];

console.log(people.slice(1, 6));*/

/*const people = ["Sergei", "Mariia", "Boris", "Abel"];

console.log(people.splice(0, 3));*/
/*const people = ["Sergei", "Mariia", "Boris", "Abel"];

console.log(people.pop());*/
/*const people = ["Sergei", "Mariia", "Boris", "Abel"];

console.log(people.unshift("Book", "shoes"));
console.log(people);*/
/*const people = ["Sergei", "Mariia", "Boris", "Abel"];
people.unshift("Mahlet");
console.log(people);*/

/*const people = ["Sergei", "Mariia", "Boris", "Abel"];
people.push("Nahom");
console.log(people);*/

/*const people = ["Sergei", "Mariia", "Boris", "Abel"];
console.log(people.slice(2, 7));*/

/*const people = ["Sergei", "Mariia", "Boris", "Abel"];
console.log(people.indexOf("Mariia"));*/

/*const people = ["Sergei", "Mariia", "Boris", "Abel"];
console.log(people.indexOf("Foo"));*/

/*const people = ["Sergei", "Mariia", "Boris", "Abel"];
people.splice(2, 1, "Kebede", "Ababa");
console.log(people);*/
const num = [2, 5, 7, 89, 3, 4, 5, 535, 7445];
const people = ["Sergei", "Mariia", "Boris", "Abel"];
const withBob = people.concat(num, "Bob");
console.log(withBob);
