// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'

let menu = document.querySelector("#menu-sidebar");
let app = document.querySelector("#app-sidebar");

menu.addEventListener("click", () => {
  app.classList.add("show");
});
