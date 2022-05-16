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

// let h1            = document.getElementsByTagName('h1');
// h1[0].textContent = "Helloooow world ! ";
// h1.innerHTML      = "<div style= 'font-weight: bold'>Il parait que ça porte bonheur ! </div>";
// console.log(h1);

let title            = document.getElementsByTagName ('title');//<----|le [0] peut être placé ici juste apres le (title)
title[0].textContent = "J'ai marché dans la DOM...";//<---------------|
title.inner          =  "<div style= 'font-family: 'Times New Roman', Times, serif > </div>";
console.log(title); 

//Ajouter des éléments au DOM
//---------------------------

//Première méthode: écrire juste du texte sans rien préciser (un peu à l'arrache quoi)

// document.write('test');

//Deuxieme méthode : Ajouter des éléments bruts

// let h1   = document.querySelector('h1');
// document.body.append('test');

//Troisième méthode (méthode conseillée pour ajouter des div ou des commandes d'autres site)


//---------------------------------Créer des éléments---------------------------------------------|
//----------------------------------------------------------------------------------------------|
let helloWorld               = document.createElement('div');
let header                   = document.createElement('header');
let menu                     = document.createElement('div');
let p                        = document.createElement('p');
let select                   = document.createElement

//les personaliser                                                                            |
//----------------                                                                               |
helloWorld.textContent       = "Ca fonctionne...enfin, j'éspère.."; 

//Style header
header.textContent           = "Bienvenue";
header.style.backgroundColor = "#e3b04b";
header.style.color           = "white";
header.style.padding         = "15vh";
header.style.fontSize        = "3em";
header.style.textAlign       = "center";

//Style menu                                                                                    |
menu.innerHTML               = "<a href= '#'>Accueil</a> / <a href= '#'>Une autre page</a>";
menu.style.backgroundColor   = "#f1d6ab";
menu.style.padding           = "2vh";

//Style p                                                                                       |
p.textContent                = "Ceci est un texte créé avec JavaScript";
p.style.margin               = "2vh";

//Les ajouter                                                                        |
//-----------                                                                       |

//Solution 1/3                                                                                  |
// document.body.append(helloWorld);//<---.append ou .appenChild sont équivalents        |

//Solution 2/3                                                                                  |
//document.body.insertBefore(helloWorld, document.querySelector('.container'));                 |

//Solution 3/3                                                                                  |
document.body.append(header, menu, helloWorld, p);



//----------------------------------------------------------------------------------------------|
