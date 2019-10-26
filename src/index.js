import { header } from "./header.js";
import { about } from "./about.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

const content = document.querySelector("#content");

let currentTab = "aboutLink";

function renderContentSection() {
  if (currentTab == "aboutLink") {
    about();
  } else if (currentTab == "menuLink") {
    menu();
  } else if (currentTab == "contactLink") {
    contact();
  }
}

function updateHighlightedTab(e) {
  pageLinks.forEach(link => link.classList.remove("selectedPage"));

  const clickedTab = e.target;
  clickedTab.classList.toggle("selectedPage");
  currentTab = e.target.id;
}

function changePage(e) {
  // update Nav tab highlight
  updateHighlightedTab(e);

  // clear the content before new rendering
  const contentContainer = document.querySelector("#contentContainer");
  contentContainer.remove();

  const footer = document.querySelector("#footer");
  footer.remove();
}

// render the first page load
header();
about();

// Nav event listeners
const pageLinks = document.querySelectorAll(".navBar");
pageLinks.forEach(link =>
  link.addEventListener("click", e => {
    changePage(e);
    renderContentSection();
  })
);
