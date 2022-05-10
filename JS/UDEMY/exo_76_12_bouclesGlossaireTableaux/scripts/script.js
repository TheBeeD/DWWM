// let panier = ['fraise', 'banane','poire'];

// for(const fruit in panier ) {       //<-------------------renvoie dans sa variable, l'index de l'élément
//     // panier[fruit] = 'pomme';
//     console.log(panier);
// }


// for(const fruit of panier ) {       //<-------------------renvoie dans sa variable, la valeur de l'element<----------le plus utilisé
//     // panier[fruit] = 'pomme';
//     console.log(panier.indexOf (fruit));//<---------------recupère l'index des fruits de panier (affiche "0", "1", "2" à la ligne)
// }

//Ancienne solution pour ce que peut faire for each
//-------------------------------------------------

// let listeDePays = ['France','Belgique', 'Japon', 'Maroc'];
// for(const pays of listeDePays) {
//     console.log(pays);
// }

//Les boucles for each
//--------------------

// listeDePays.forEach(function(pays){
//     console.log(pays);
// });


// listeDePays.forEach(pays => console.log(pays));


//Boucles pour concaténer un tableau associatif
//---------------------------------------------
//concaténation correction exo
let monTableauAssociatif = {
    'prenom': 'Mark',
    'nom': 'Zuckerberg',
    'poste': 'pdg de farcebook'
};
function concatener(tableau) {
    let chaine = '';

    for (const valeur in tableau) {
        chaine += (valeur + ' : ' + tableau[valeur] + '\n');    
    }
    console.log(chaine);

    //exo raté pour concaténer un tableau  
    // for (const valeur in monTableauAssociatif) {
    //     console.log(chaine += (valeur + ' : ' + monTableauAssociatif[valeur] + '\n'));
    // }
    //correction
}

concatener(monTableauAssociatif);


// principales fonctionnalités pour les tableaux
//----------------------------------------------

// fruits.length : retourne le nombre d'éléments dans le tableau (ici retourne 4)

// fruits[0] : sélectionne le premier élément

// fruits[length - 1] : sélectionne le dernier élément

// fruits.push('pamplemousse') : ajoute un élément à la fin du tableau

// fruits.unshift('pamplemousse') : ajoute un élément au début du tableau

// fruits.pop() : supprime le dernier élément

// fruits.shift() : supprime le premier élément

// fruits.indexOf('banane') : retourne l'index d'un élément

// fruits.join() : concatène les éléments dans une chaîne de caractères avec virgules, mais il est possible de spécifier un autre séparateur dans les paranthèses

// fruits.slice() : crée une copie du tableau (à associer à une autre variable donc)

// fruits.splice([début], [nbASupprimer], [élément(s)]) : retire, remplace ou ajoute des éléments.

//     Début : l'index à partir duquel commencer le changement, si négatif, part de la fin du tableau

//     nbASupprimer : un entier indiquant le nombre d'éléments à retirer ou remplacer

//     Element(s) : les éléments à ajouter à partir du début précisé. Si aucun élément n'est spécifié, alors n'en ajoutera pas.