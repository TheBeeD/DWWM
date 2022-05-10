// let chien = {
//     race: 'Shiba',
//     poils: 'Court',
//     // aboyer: function() {
//     //     console.log('Ouafouaf');
//     // }
//     aboyer: () => console.log('ouafouaf'), 
// }

// chien.aboyer();
// console.log(chien.poils);


// affectation de methodes à un (2) objet(s)
//-----------------------------------
// let magicien = {
//     attaquer: function(){
//         console.log('le magicien lance un sort');
//     }
// }

// let guerrier = {
//     attaquer: function(){
//         console.log('Le guerrier sort son épée');
//     }
// }
// magicien.attaquer();
// guerrier.attaquer();

//Affectation par destructuration
//-------------------------------

let informations = ['SuperSayen','25', 'homme'];

//Methode dite sans décomposition
//-------------------------------
// let pseudo = informations[0];
// let age    = informations[1];
// let sexe   = informations[2];

//Methode dite par décomposition
//------------------------------
let [pseudo, age, sexe] = informations;

console.log(pseudo);
console.log(age);
console.log(sexe);
    

