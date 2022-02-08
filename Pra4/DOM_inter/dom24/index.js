// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'

let menu = document.querySelector("#menu-sidebar");
let app = document.querySelector("#app-sidebar");

menu.addEventListener("click", () => {
  /*if (app.classList.contains("show")) {
    app.classList.remove("show");
  } else {
    app.classList.add("show");
  }*/
  app.classList.toggle("show");
});
