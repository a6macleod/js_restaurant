const content = document.querySelector("#content");

const header = () => {
  function createNav() {
    const nav = document.createElement("nav");
    nav.id = "navContainer";
    header.appendChild(nav);

    // Nav links
    const about = document.createElement("div");
    about.id = "aboutLink";
    about.classList.add("navBar");
    about.classList.add("selectedPage");
    about.innerHTML = "About";

    const menu = document.createElement("div");
    menu.id = "menuLink";
    menu.classList.add("navBar");
    menu.innerHTML = "Menu";

    const contact = document.createElement("div");
    contact.id = "contactLink";
    contact.classList.add("navBar");
    contact.innerHTML = "Contact";

    nav.appendChild(about);
    nav.appendChild(menu);
    nav.appendChild(contact);
  }

  const header = document.createElement("header");
  header.classList.add("header");
  content.appendChild(header);

  const logo = document.createElement("h1");
  logo.classList.add("logo");
  logo.innerHTML = "Treat <br> Factory";
  header.appendChild(logo);

  // add menu to header
  const nav = createNav();
};

export { header };
