/**
 * @param {string} name
 */
const setWelcomeMessage = (name) => {
  return (document.querySelector(
    "#welcome-message"
  )/*.innerHTML = `Hello <strong>${name}</strong>`)*/;
};

// Sample usage - do not modify
setWelcomeMessage("Sam");
setWelcomeMessage("<h2>You have been hacked</h2>");
