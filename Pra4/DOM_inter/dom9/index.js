const logLinksTexts = () => {
  let links = [...document.querySelectorAll("a")].map(
    (link) => link.textContent
  );
  return links;
};
// Sample usage - do not modify
console.log(logLinksTexts());
