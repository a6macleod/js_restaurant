
const content = document.querySelector('#content');



const header = () => {

  function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    return header;
  }

  function createLogo () {
    const logo = document.createElement('h1');
    logo.classList.add('logo');
    logo.innerHTML = "Treat <br> Factory";
    return logo;
  }

  function createNav () {
    const nav = document.createElement('nav');
    nav.id = 'navContainer';
    header.appendChild(nav);

    // Nav links
    const about = document.createElement('div');
    about.id = 'aboutLink';
    about.classList.add('navBar');
    about.innerHTML = 'About';
    
    const menu = document.createElement('div');
    menu.id = 'menuLink';
    menu.classList.add('navBar');
    menu.innerHTML = 'Menu'
    
    const contact = document.createElement('div');
    contact.id = 'contactLink';
    contact.classList.add('navBar');
    contact.innerHTML = 'Contact';

    nav.appendChild(about);
    nav.appendChild(menu);
    nav.appendChild(contact);
  }

  const header = createHeader();
  content.appendChild(header);

  const logo = createLogo();
  header.appendChild(logo);

  // add menu to header
  const nav = createNav();
}



const footer = () => {
  const footer = document.createElement('footer');
  footer.id = 'footer';
  content.appendChild(footer);

  const credit = document.createElement('p');
  credit.id = 'credit';
  credit.innerHTML = 'Created by <br><a href="https://github.com/a6macleod/js_restaurant">Andrew MacLeod</a>'
  footer.appendChild(credit);
}

  export { header, footer }
