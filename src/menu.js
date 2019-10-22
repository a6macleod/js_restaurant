console.log('this is the Menu page');

const content = document.querySelector('#content');

const menu = () => {
// create the body
  const menuContainer = document.createElement('div');
  menuContainer.id = 'menuSection';
  content.appendChild(menuContainer);
  

  // coffee Section
  const coffeeContainer = document.createElement('div');
  coffeeContainer.id = 'coffeeSection';
  menuContainer.appendChild(coffeeContainer);

  const coffeeTitle = document.createElement('h2');
  coffeeTitle.classList.add('sectionTitle');
  coffeeTitle.innerHTML = 'Coffee';
  coffeeContainer.appendChild(coffeeTitle);
  
  // 1
  const pourOver = document.createElement('h3');
  pourOver.classList.add('menuItem');
  pourOver.innerHTML = 'Pour Over <br> $3';
  coffeeContainer.appendChild(pourOver);

  // 2
  const cappucino = document.createElement('h3');
  cappucino.classList.add('menuItem');
  cappucino.innerHTML = 'Cappucino <br> $4';
  coffeeContainer.appendChild(cappucino);



  // cookies
  const cookieContainer = document.createElement('div');
  cookieContainer.id = 'cookieSection';
  menuContainer.appendChild(cookieContainer);

  const cookieTitle = document.createElement('h2');
  cookieTitle.classList.add('sectionTitle');
  cookieTitle.innerHTML = 'Cookies';
  cookieContainer.appendChild(cookieTitle);

  // 1
  const oatMeal = document.createElement('h3');
  oatMeal.classList.add('menuItem');
  oatMeal.innerHTML = 'Oatmeal Chocolate Walnut <br> $2';
  cookieContainer.appendChild(oatMeal);

  // 2
  const candyCookie = document.createElement('h3');
  candyCookie.classList.add('menuItem');
  candyCookie.innerHTML = 'M&M Sugar Cookie <br> $2';
  cookieContainer.appendChild(candyCookie);



  // scones
  const sconeContainer = document.createElement('div');
  sconeContainer.id = 'sconeSection';
  menuContainer.appendChild(sconeContainer);

  const sconeTitle = document.createElement('h2');
  sconeTitle.classList.add('sectionTitle');
  sconeTitle.innerHTML = 'Scones';
  sconeContainer.appendChild(sconeTitle);

  // 1
  const cheeseScone = document.createElement('h3');
  cheeseScone.classList.add('menuItem');
  cheeseScone.innerHTML = 'Cheese Scone <br> $3';
  sconeContainer.appendChild(cheeseScone);

  // 2
  const orangeScone = document.createElement('h3');
  orangeScone.classList.add('menuItem');
  orangeScone.innerHTML = 'Orange Scone <br> $3';
  sconeContainer.appendChild(orangeScone);

}

export { menu }
