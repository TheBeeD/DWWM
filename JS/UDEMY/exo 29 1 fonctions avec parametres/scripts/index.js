let preparation = 10, cuisson = 15;

function cuisiner(nombreDeGateaux, minutesDePreparation = 10,  minutesDeCuisson = 15) {

    let resultat = nombreDeGateaux * (minutesDeCuisson + minutesDePreparation);
    
    return resultat;
}
// console.log(cuisiner(5, preparation, cuisson));

let tempsDePreparationChocolat = cuisiner(4);
let tempsDePreparationFraisier = cuisiner(1, 20);
console.log(tempsDePreparationFraisier + tempsDePreparationChocolat);
// function prevoirAge() {

//     let age = prompt("Quel est votre age? "); // "30" + 1 = 301
//     // age = parseInt(age); <-- parseInt revois un entier 
//     //équivalent à la fonction Number qui suit:
//     age = Number(age);// <-- est la fonction recommandée, ça fonctionne avec ou sans virgule
//     //avec un nombre à virgule on utilsera parseFloat
//     // pour faire l'inverse on a cet exemple: nombreEnString = nombre.toString();
//     alert("Bientôt, vous aurez " + (age + 1) + " ans");

// }

// prevoirAge();


// Fonctions anonymes:

// let fonctionAnonyme = function() {
//     console.log(`Je suis une fonction anonyme`);
// }

//fonctionAnonyme();

// (function() { console.log('Je suis une fonction anonyme')})();
    
