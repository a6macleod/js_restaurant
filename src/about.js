console.log('this is the About page');

const content = document.querySelector('#content');

const about = () => {
// create the container
  const aboutSection = document.createElement('div');
  aboutSection.id = 'aboutSection';
  content.appendChild(aboutSection);


  // main image (static and let about section scroll over this)
  const backgroundImage = document.createElement('img');
  backgroundImage.src = 'images/petr-sevcovic-qE1jxYXiwOA-unsplash.jpg';
  backgroundImage.setAttribute('alt', "A cozy well lit coffee shop")
  backgroundImage.classList.add('backgroundImage');
  aboutSection.appendChild(backgroundImage);
 

  const aboutContainer = document.createElement('div');
  aboutContainer.id = 'aboutContentContainer';
  aboutSection.appendChild(aboutContainer);

  // mission statement section
  const missionTitle = document.createElement('h2');
  missionTitle.classList.add('sectionTitle');
  missionTitle.innerHTML = 'Our Mission!';
  aboutContainer.appendChild(missionTitle);

  const missionContent = document.createElement('p');
  missionContent.classList.add('contentSection');
  missionContent.classList.add('aboutContent');
  missionContent.innerHTML = 'The Treat Factory is on a mission to change our community. Only through community engagment, interaction with, and being acted upon, can our meeting place bring the change our world needs. The Treat Factory is the seed crystal of change and we want to grow our crystal for the benefit of everyone.';
  aboutContainer.appendChild(missionContent);



  // about us section
  const aboutTitle = document.createElement('h2');
  aboutTitle.classList.add('sectionTitle');
  aboutTitle.innerHTML = 'About Us!';
  aboutContainer.appendChild(aboutTitle);

 const aboutContent = document.createElement('p');
  aboutContent.classList.add('contentSection');
  aboutContent.classList.add('aboutContent');
  aboutContent.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolorem, quam cupiditate consectetur maxime, magnam dicta vero maiores non, explicabo iusto sint consequatur. Sunt odit tempore nam quibusdam provident temporibus.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur reiciendis vel assumenda hic distinctio accusantium fuga voluptatem excepturi est mollitia. Maiores debitis qui consectetur. Vero laboriosam sapiente cumque quidem, aliquid.<br><br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati hic ab nihil ipsam labore, voluptatem quo nobis! Facilis perspiciatis, necessitatibus nemo magni doloremque consequatur, laboriosam ab rerum architecto, ullam corporis.'
  aboutContainer.appendChild(aboutContent);


}

export { about } 
