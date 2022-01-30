"use strict";

/**
Complete the function getProductDetails such that it returns an object with the following properties:

id: a number representing the id of the product.
title: a string representing the title of the product.
inStock: a boolean representing whether the product is in stock or not.
Give these properties any value you'd like, as long as it fits the expected return type.

**/

function getProductDetails() {
  const car = {
    id: 1,
    carModel: "BMW",
    carType: "Hatchback",
    carYear: 2022,
    inStock: true,
  };
  return car;
}

// Sample usage - do not modify
console.log(getProductDetails()); // the object you define
