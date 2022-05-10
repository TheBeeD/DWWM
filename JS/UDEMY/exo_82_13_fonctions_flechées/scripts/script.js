//On l'écrit comme ça de base
//---------------------------
// let maFonction = function(){
//     console.log('test');
// }
//on la raccourcie comme ça
//-------------------------
// let maFonction =() => {
// console.log('test');
// }
//Ou pire encore comme ça
//-----------------------
// let maFonction = () => console.log('test');

// maFonction();

// Closure ou fonction dans une fonction qui se sert à sauvegarderdes variables locale 
//------------------------------------------------------------------------------------

//ne fonctionne pas...je sais pas d'ouvient l'erreur dans _bis

// function bonjour(prenom) {

//     let resultat = "Bonjour" + prenom; //variable locale
//     let maClosure = () => console.log(resultat);
//     return maClosure;
// }

// function bonjour_bis(prenom) {

//     let resultat = "Bonjour" + prenom; //variable locale
//     let maClosure = () => console.log(resultat);
//     return maClosure;
// }

// let maFonction = bonjour(' Evan');
// maFonction();
// bonjour_bis('Olivier');


function timer() {
    let secondes =0;

    let maClosure = () => {
        return ++secondes;
    }
    return maClosure;
}

let monTimer = timer();
console.log(monTimer());//1
console.log(monTimer());//2 parceque renvoie ladernière sauvegarde de la variable maClosure incrémentée de 1
console.log(monTimer());//3 idem vu que c'etait 2 la dernière ...ça fonctionne.
