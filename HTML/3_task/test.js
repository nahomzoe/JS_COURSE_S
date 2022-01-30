/*const grade = 15;
if (grade >= 10) {
  console.log("Passing grade");
} else {
  console.log("Failing grade");
}*/

/*const grade = 50;
if (grade >= 10) {
  console.log("Passing grade");
} else if (grade === 10) {
  console.log("Passing on the limite");
} else {
  console.log("Failing grade");
}*/

/*function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(canVote(10));*/

/*function canVote(age) {
    if (age >= 18) {
      return true;
    } 
      return false;
    
  }
  console.log(canVote(10));*/

/*function canVote(age) {
  return age >= 10;
}
console.log(canVote(67));*/
/*const grade = ["23", "34", "45", "76", "12"];
console.log(grade.indexOf("76"));*/
/*const grade = ["23", "34", "45", "76", "12"];
console.log(grade.push("100"));
console.log(grade);*/

/*const grades = [10, 23, 45, 67];
grades.forEach(function (x) {
  console.log(x);
});*/
/*let numbers = [3, 5, 78, 96, 3, 4, 15];
let numbersAboveTen = numbers.filter(function (number) {
  return number >= 10;
});
console.log(numbersAboveTen);*/
/*let years = [2010, 2011, 2020, 2009, 2021];
let yearsAboveTen = years.filter(function (year) {
  return year >= 2015;
});
console.log(yearsAboveTen);*/

/*let names = ["Toni", "Nahom", "Solomon", "Sonija"];
let result = names.find(function (name) {
  return name === "Nahom";
});
console.log(result);*/

/*let numbers = [9, 5, 14, 3, 11];
let firstNumberAboveTen = numbers.find(function (number) {
  return number > 10;
});
console.log(firstNumberAboveTen); // 14*/

let numbers = [9, 5, 14, 3, 11];
numbers.filter(function (num) {
  return num >= 12;
});
console.log(numbers);
