console.log('this is the HeaderFooter page');

const content = document.querySelector('#content');


const header = () => {

  function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    content.appendChild(header);
    //return header;
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
    
    return nav;
  }

  const header = createHeader();
  

  const logo = createLogo();
  header.appendChild(logo);

  // add menu to header
  const nav = createNav();
}


// Photo by Petr Sevcovic on Unsplash (cafe)



// create footer
  // Website created by (link to github https://github.com/a6macleod/js_restaurant)

  export { header }
