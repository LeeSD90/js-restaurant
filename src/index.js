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

homeTab.addEventListener('click', () => { clear(); home(); });
menuTab.addEventListener('click', () => { clear(); menu(); });
contactTab.addEventListener('click', () => { clear(); contact(); });

const clear = function() {
    // Clear current content
    var container = document.getElementById('container');
    while (container) { main.removeChild(container); container = document.getElementById('container'); }
}