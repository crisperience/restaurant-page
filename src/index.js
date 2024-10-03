import loadAbout from "./about";
import loadHome from "./home";
import loadMenu from "./menu";
import "./style.css"; // Import the CSS file

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

function loadTab(event) {
  clearContent();
  const content = document.getElementById("content");

  switch (event.target.id) {
    case "home":
      content.appendChild(loadHome());
      break;
    case "menu":
      content.appendChild(loadMenu());
      break;
    case "about":
      content.appendChild(loadAbout());
      break;
    default:
      content.appendChild(loadHome());
  }
}

// Ensure DOM is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("home").addEventListener("click", loadTab);
  document.getElementById("menu").addEventListener("click", loadTab);
  document.getElementById("about").addEventListener("click", loadTab);

  // Load the default Home tab on page load
  loadTab({ target: { id: "home" } });
});
