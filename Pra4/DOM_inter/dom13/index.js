/**
 * @param {string} name
 */
const setWelcomeMessage = (name) =>
  (document.querySelector(
    "#welcome-message"
  ).innerHTML = `Hello <strong> ${name} </strong>`);

// Sample usage - do not modify
console.log(setWelcomeMessage("Sam"));
console.log(setWelcomeMessage("Nahom"));
