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

/*const firstPerson = { name: "Sam", age: 18 };

const secondPerson = { age: 25, type: "admin" };
const mergedObjects = { ...firstPerson, ...secondPerson };
console.log(mergedObjects);*/

/*const user = {
  details: {
    name: {
      firstName: "Sam",
    },
  },
  data: null,
};
console.log(user.details?.name?.firstName); // "Sam"user.data?.id; // ndefineduser.children?.names; // undefineduser.details?.parent?.firstName;*/

/*const data = {
  temperatures: [-3, 14, 4],
};
//let firstValue = undefined;
if (data.temperatures) {
  firstValue = data.temperatures[0];
}
const firstValue = data.temperatures?.[0];
console.log(firstValue);*/

/*const person = {
  age: 43,
  name: "Sam",
};
//let upperCasedName = person.name; // might be undefined
//if (person.name) {
 // upperCasedName = person.name.toUpperCase();
//}

const upperCasedName = person.name?.toUpperCase();*/
/*let p = new Promise((resolve, reject) => {
  reject(Error("This fails"));
});
p.catch((error) => console.log(error.message));
p.catch((error) => console.log(error.message));*/

/*let p = new Promise((resolve, reject) => {
  return promise.reject(Error("This fails"));
});
p.catch((error) => console.log(error.message));
p.catch((error) => console.log(error.message));*/
/*let p = new Promise((resolve, reject) => {
  reject(Error("This fails"));
})
  .catch((error) => console.log(error))
  .then((error) => console.log(error));*/

/*let p = new Promise((resolve, reject) => {
  reject(Error("This fails"));
})
  .catch((error) => console.log(error.message))
  .catch((error) => console.log(error.message));*/

/*let p = new Promise((resolve, reject) => {
  resolve("success");
})
  .then(() => {
    throw Error("Ih no");
  })
  .catch((error) => {
    return "actually,that works";
  })
 .catch((error) => console.log(error.message));*/
Promise.resolve("Success")
  .then((data) => {
    return data.toUpperCase();
  })
  .then((data) => {
    console.log(data);
  });
