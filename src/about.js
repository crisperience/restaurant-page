function loadAbout() {
  const aboutDiv = document.createElement("div");

  const headline = document.createElement("h1");
  headline.textContent = "About Us";
  aboutDiv.appendChild(headline);

  const description = document.createElement("p");
  description.textContent =
    "Founded in 1990, our restaurant has been serving delicious food for over 30 years.";
  aboutDiv.appendChild(description);

  return aboutDiv;
}

export default loadAbout;
