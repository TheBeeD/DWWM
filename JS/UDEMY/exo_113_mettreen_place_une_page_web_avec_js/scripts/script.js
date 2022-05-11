//Suppression de la div existante au début du html
document.querySelector('#a-supprimer').remove();

// créer les éléments
let header          = document.createElement('header');
let menu            = document.createElement('div');
let p               = document.createElement('p');

//Les personnaliser  

//Style header
header.textContent           = "Bienvenue";
header.style.backgroundColor = "#e3b04b";
header.style.color           = "white";
header.style.padding         = "15vh";
header.style.fontSize        = "3em";
header.style.textAlign       = "center";

//Style menu
menu.innerHTML               = "<a href= '#'>Accueil</a> / <a href= '#'>Une autre page</a>";
menu.style.backgroundColor   = "#f1d6ab";
menu.style.padding           = "2vh";

//Style p
p.textContent                = "Ceci est un texte créé avec JavaScript";
p.style.margin               = "2vh";

//Les ajouter
document.body.append(header, menu, p);



