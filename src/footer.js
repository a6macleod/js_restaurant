
const content = document.querySelector('#content');

const footer = () => {
  const footer = document.createElement('footer');
  footer.id = 'footer';
  content.appendChild(footer);

  const credit = document.createElement('p');
  credit.id = 'credit';
  credit.innerHTML = 'Created by <br><a href="https://github.com/a6macleod/js_restaurant">Andrew MacLeod</a>'
  footer.appendChild(credit);
}


export { footer }
