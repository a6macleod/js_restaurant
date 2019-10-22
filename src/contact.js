console.log('this is the Contact page');

const content = document.querySelector('#content');

const contact = () => {
// create the body
  const contactContent = document.createElement('div');
  contactContent.id = 'contactContent';
  content.appendChild(contactContent);

  // Hours
  const hoursContainer = document.createElement('div');
  hoursContainer.id = 'hoursContainer';
  contactContent.appendChild(hoursContainer);

  const hoursTitle = document.createElement('h2');
  hoursTitle.classList.add('sectionTitle');
  hoursTitle.innerHTML = 'Cafe Hours';
  hoursContainer.appendChild(hoursTitle);

  const hours = document.createElement('p');
  hours.classList.add('contentSection');
  hours.innerHTML = 'Monday - Friday: 7 - 5:30<br><br>Saturday: 7 - 9:00<br><br>Sunday: 11 - 5:30<br>';
  hoursContainer.appendChild(hours);

  // Location
  const locationContainer = document.createElement('div');
  locationContainer.id = 'locationContainer';
  contactContent.appendChild(locationContainer);

  const locationTitle = document.createElement('h2');
  locationTitle.classList.add('sectionTitle');
  locationTitle.innerHTML = 'Our Location';
  locationContainer.appendChild(locationTitle);

  const locationMap = document.createElement('div');
  locationMap.id = 'locationMap';
  locationMap.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1475.8376921761615!2d-83.74492280755015!3d42.28545228672461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1571769065815!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>';
  locationContainer.appendChild(locationMap);

  const locationAddress = document.createElement('p');
  locationAddress.classList.add('contactContent');
  locationAddress.innerHTML = '111 Detroit St. Ann Arbor, MI';
  locationContainer.appendChild(locationAddress)


  // Phone Number
  const phoneContainer = document.createElement('div');
  phoneContainer.id = 'phoneContainer';
  contactContent.appendChild(phoneContainer);

  const phoneTitle = document.createElement('h2');
  phoneTitle.classList.add('sectionTitle');
  phoneTitle.innerHTML = 'Phone Number';
  phoneContainer.appendChild(phoneTitle);

  const phoneNumber = document.createElement('p');
  phoneNumber.classList.add('contactContent');
  phoneNumber.innerHTML = '734-333-333';
  phoneContainer.appendChild(phoneNumber);
}

export { contact }
