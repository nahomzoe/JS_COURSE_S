"use strict";

/**
Complete the addItemToShoppingList function such that it adds the (single) item it receives to the element
with id shopping-list as a new <li> element.
Every time this function is called, it should add a new item
to the existing list..
**/
const list = document.querySelector("#shopping-list");
const addItemToShoppingList = (item) => {
  list.insertAdjacentHTML("beforeend", `<li>${item}</li>`);
};

// Sample usage - do not modify
console.log(addItemToShoppingList("coffe")); // adds <li>Paper</li>
console.log(addItemToShoppingList("Orange")); // adds <li>Orange</li>
console.log(addItemToShoppingList("Peach")); // adds <li>Peach</li>
