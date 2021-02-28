// basic styles
import './styles/basics.scss';

// some initial datas
import email, { users } from './scripts/data';

//navbar component
import Navbar from './scripts/nav';

//show some data
console.log(email, users);

//render navbar
const nav = new Navbar(document.querySelector('nav'));
nav.init();
