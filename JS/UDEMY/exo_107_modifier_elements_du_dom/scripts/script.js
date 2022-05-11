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

document.write('test');

//Deuxieme méthode : Ajouter des éléments bruts

let h1   = document.querySelector('h1');
document.body.append('test');

//Troisième méthode (méthode conseillée pour ajouter des div ou des commandes d'autres site)


//---------------------------------Créer un element---------------------------------------------|
//----------------------------------------------------------------------------------------------|
let helloWorld          = document.createElement('div');
//                                                                                              |
//                                                                                              |
//le personaliser                                                                               |
//---------------                                                                               |
helloWorld.textContent  = "Ca fonctionne...enfin, j'éspère.."; 


//l'ajouter à notre page                                                                        |
//----------------------                                                                        |

//Solution 1/3                                                                                  |
// document.body.append(helloWorld);//<----------.append ou .appenChild sont équivalents         |

//Solution 2/3                                                                                  |
//document.body.insertBefore(helloWorld, document.querySelector('.container'));                 |

//Solution 3/3                                                                                  |
document.querySelector('.container').prepend(helloWorld);
//----------------------------------------------------------------------------------------------|
