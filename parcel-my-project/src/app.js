import name from "./multipleFilies";
import { helloWorld } from "./helloWorld";
import { FetchWrapper } from "./fetch-wrapper";

console.log("hello parcel again", name);
console.log(helloWorld());

const API = new FetchWrapper(
  "https://firestore.googleapis.com/v1/projects/programmingjs-90a13/databases/(default)/documents/nahom6876"
);

API.get().then((data) => {
  console.log(data);
});
