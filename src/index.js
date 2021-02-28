let email = "excec@sgm.ascv";
const body = document.querySelector('body');
let i = 0;
body.addEventListener('click', () => {
    i++;
    console.log(i, email);
})

console.log('Hit', email);