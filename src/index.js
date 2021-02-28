import "./styles/first.scss";
import email, { users } from './scripts/data';

const body = document.querySelector('body');
let i = 0;
body.addEventListener('click', () => {
    i++;
    console.log(i, email);
})
console.log(users);
console.log('Hit', email);