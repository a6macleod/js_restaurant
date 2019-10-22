console.log("This is index.js");

import { header } from './headerfooter.js'
import { about } from './about.js'
import { menu } from './menu.js'
import { contact } from './contact.js'

const content = document.querySelector('#content');

header();
