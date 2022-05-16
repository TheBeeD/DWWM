// let header         = document.getElementsByTagName('header');
// let logo           = document.getElementById('logo');
// let container      = document.getElementsByClassName('container');
// let h1             = document.querySelector('h1');
// let p              = document.querySelectorAll('p');

// console.log(header);
// console.log(logo);
// console.log(container);
// console.log(h1);
// console.log(p);


// let h1            = document.querySelector ('h1');
// h1.textContent    = "Hello World !"; //<--------------modifie le contenu de la balise h1
// h1.innerHTML      =  "<div style= 'font-weight: normal'>Il parait que ça porte bonheur ! </div>";
// console.log(h1);

//L'autre possibilité pour atteindre le h1 ou un autre élément "unique si possible ou si besoin"
//----------------------------------------------------------------------------------------------

// document.querySelector('h1').remove();

// 1ère méthode : décomposée
let header = document.querySelector('header');
header.style.backgroundColor = '#ffbd69';
let h1            = document.querySelector ('h1');
h1.textContent    = "Remove élément & Modif de styles"; //<--------------modifie le contenu de la balise h1
h1.innerHTML      =  "<div style= 'font-weight: normal'>Remove élément & Modif de styles</div>";
// 2ème méthode : directe
document.querySelector('h1').style.color     = '#111d5e';
document.querySelector('h1').style.textAlign = 'center';
document.querySelector('h1').style.paddingBottom = '5vh';

//3eme méthode, utiliser une Classe
document.querySelector('header').className = "ma_class";

