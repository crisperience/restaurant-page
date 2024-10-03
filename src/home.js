function loadHome() {
  const homeDiv = document.createElement("div");

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Our Restaurant!";
  homeDiv.appendChild(headline);

  const description = document.createElement("p");
  description.textContent =
    "The best food in town, made with love and fresh ingredients.";
  homeDiv.appendChild(description);

  return homeDiv;
}

export default loadHome;
