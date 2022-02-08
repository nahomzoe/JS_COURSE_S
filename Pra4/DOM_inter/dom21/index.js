const button = document.querySelector("#app-button");

console.log("A");
button.addEventListener("click", () => {
  //button.setAttribute("disable", "disable");
  // callback every time the button is clicked
  //console.log("B");
  //button.textContent = "Loading...";
  setTimeout(() => {
    button.textContent = "Loading...";
  }, 2000);
});
console.log("C");
