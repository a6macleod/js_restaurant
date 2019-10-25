
import { footer } from './footer.js'

const content = document.querySelector('#content');

const menu = () => {

// create the body
  const menuContainer = document.createElement('div');
  menuContainer.id = 'contentContainer';
  menuContainer.classList.add('contentArea');
  content.appendChild(menuContainer);
  
  // Scone and coffee photo by Jordan Christian on Unsplash
  const sconeImage = document.createElement('img');
  sconeImage.src = 'images/jordan-christian-Tl6vDa-JRaE-unsplash.jpg';
  sconeImage.setAttribute('alt', "A scone and lattee")
  sconeImage.classList.add('backgroundImage');
  menuContainer.appendChild(sconeImage);
  
  // coffee Section
  const coffeeContainer = document.createElement('div');
  coffeeContainer.id = 'coffeeSection';
  coffeeContainer.classList.add('menuSection')
  menuContainer.appendChild(coffeeContainer);

  const coffeeTitle = document.createElement('h2');
  coffeeTitle.classList.add('sectionTitle');
  coffeeTitle.innerHTML = 'Coffee';
  coffeeContainer.appendChild(coffeeTitle);
  
  // coffee 1
  const pourOver = document.createElement('h3');
  pourOver.classList.add('menuItem');
  pourOver.innerHTML = 'Pour Over $3';
  coffeeContainer.appendChild(pourOver);

  // coffee 2
  const cappucino = document.createElement('h3');
  cappucino.classList.add('menuItem');
  cappucino.innerHTML = 'Cappucino $4';
  coffeeContainer.appendChild(cappucino);



  // cookies
  const cookieContainer = document.createElement('div');
  cookieContainer.id = 'cookieSection';
  cookieContainer.classList.add('menuSection');
  menuContainer.appendChild(cookieContainer);

  const cookieTitle = document.createElement('h2');
  cookieTitle.classList.add('sectionTitle');
  cookieTitle.innerHTML = 'Cookies';
  cookieContainer.appendChild(cookieTitle);

  // cookie 1
  const oatMeal = document.createElement('h3');
  oatMeal.classList.add('menuItem');
  oatMeal.innerHTML = 'Oatmeal Chocolate Walnut $2';
  cookieContainer.appendChild(oatMeal);

  // cookie 2
  const candyCookie = document.createElement('h3');
  candyCookie.classList.add('menuItem');
  candyCookie.innerHTML = 'M&M Sugar Cookie     $2';
  cookieContainer.appendChild(candyCookie);



  // scones
  const sconeContainer = document.createElement('div');
  sconeContainer.id = 'sconeSection';
  sconeContainer.classList.add('menuSection');
  menuContainer.appendChild(sconeContainer);

  const sconeTitle = document.createElement('h2');
  sconeTitle.classList.add('sectionTitle');
  sconeTitle.innerHTML = 'Scones';
  sconeContainer.appendChild(sconeTitle);

  // scones 1
  const cheeseScone = document.createElement('h3');
  cheeseScone.classList.add('menuItem');
  cheeseScone.innerHTML = 'Cheese Scone $3';
  sconeContainer.appendChild(cheeseScone);

  // scones 2
  const orangeScone = document.createElement('h3');
  orangeScone.classList.add('menuItem');
  orangeScone.innerHTML = 'Orange Scone $3';
  sconeContainer.appendChild(orangeScone);

  footer();

}

export { menu }
