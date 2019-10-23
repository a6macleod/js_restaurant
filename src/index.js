console.log("This is index.js");

import { header, footer } from './headerfooter.js'
import { about } from './about.js'
import { menu } from './menu.js'
import { contact } from './contact.js'

const content = document.querySelector('#content');

let currentTab = 'about';

header();
if (currentTab == 'about'){
  about();
} else if (currentTab == 'menu') {
  menu();
} else if (currentTab == 'contact') {
  contact();
}
footer();
