import name from "./multipleFilies";
import { helloWorld } from "./helloWorld";
import { FetchWrapper } from "./fetch-wrapper";
import simple_number_formatter from "@skalwar/simple_number_formatter";
import snackbar from "snackbar";
import "snackbar/dist/snackbar.min.css";
import Chart from "chart.js/auto";

console.log("hello parcel again", name);
console.log(helloWorld());

let fat = 10;
let protein = 12;
let carbs = 11;
let foodname = "foodtrackertest";

let body = {
  fields: {
    fat: {
      integerValue: fat,
    },
    protein: {
      integerValue: protein,
    },
    carbs: {
      integerValue: carbs,
    },
    foodname: {
      stringValue: protein,
    },
  },
};
const API = new FetchWrapper(
  "https://firestore.googleapis.com/v1/projects/programmingjs-90a13/databases/(default)/documents/"
);
//posting data to thr firebase API
console.log(API.post("nahom6876", body));
//get the data back from firebase API
let json = API.get("nahom6876");
API.get().then((data) => {
  localStorage;
  console.log(data);
});
let result = simple_number_formatter(6877);
console.log(result);
snackbar.show(result);

const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
