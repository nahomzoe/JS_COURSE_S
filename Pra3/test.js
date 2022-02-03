/*let myArr = [1, 2, 0, 3, 48];
do {
  const mult = myArr.reduce((pre, cur) => pre * cur, 1);
} while (myArr[i] == 0);

console.log(mult);*/

/*const dim = [2, 5, 7];
const [one, two, three] = dim;
console.log(one);*/

/*const lat = [5.678];
const log = [6.89];
const point = [...lat, ...log];
console.log(point);*/

/*const items = ["Tissues", "Oranges"];
const otherItems = [...items, "Tomatoes"];
console.log(otherItems); // ["Tissues", "Oranges", "Tomatoes"]*/

/*const config = {
  id: 1,
  isAdmin: false,
  theme: {
    dark: false,
    accessibility: true,
  },
};
const { id, isAdmin, accessibility } = config;
console.log(id, isAdmin);
*/

const firstPerson = { name: "Sam", age: 18 };

const secondPerson = { age: 25, type: "admin" };
const mergedObjects = { ...firstPerson, ...secondPerson };
console.log(mergedObjects);
