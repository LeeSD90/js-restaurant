import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import loadPage from './loadPage';
import home from './home';
import menu from './menu';
import contact from './contact';

loadPage();

let homeTab = document.getElementById('home');
let menuTab = document.getElementById('menu');
let contactTab = document.getElementById('contact');

homeTab.addEventListener('click', () => { home(); });
menuTab.addEventListener('click', () => { menu(); });
contactTab.addEventListener('click', () => { contact(); });