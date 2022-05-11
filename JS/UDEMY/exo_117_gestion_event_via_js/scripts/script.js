// let a          = document.querySelector('a');
// let button     = document.querySelector('button');

// a.onclick = function() {
//     if(confirm('êtes-vous sur ?')) {
//        location.href = "https://believemy.com" 
//     }
// }

// a.onclick = () => {
//         if(confirm('êtes-vous sur ?')) {
//        location.href = "https://believemy.com" 
// }
// }

// button.onmouseover = () => {
//     document.body.style.backgroundColor = 'orange';
// }

// button.onmouseout = () => {
//     document.body.style.backgroundColor = 'white';
// }

// fonctions conseillées exo 118
//----------------------

let a          = document.querySelector('a');
let button     = document.querySelector('button');

// a.addEventListener('click', (e) => {
//     console.log(e);
// });

button.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'orange';
});

function backgroundWhite() {
    document.body.style.backgroundColor = 'white';
}

button.addEventListener('mouseout', backgroundWhite);
button.addEventListener('mouseout', () => {
    document.body.style.fontFamily = 'arial'
});

button.removeEventListener('mouseout',backgroundWhite);