//Exemple 1 : Fusionner des tableaux
//----------------------------------

// let fruits = ['fraise', 'banane', 'poire'];
// let aliments = ['chocolat', 'sucre', 'lait', ...fruits];
// // let total = aliments.concat(fruits);


// // console.log(total);

// console.log(aliments);

//Exemple 2 : découper une chaine de caractères en plusieurs elements
//-----------------------------------------------------------------

let phrase = "Bonjour !";
let phraseTableau = [...phrase];

// console.log(phraseTableau);

//Exemple 3 : selectionner un élément et stocker les autres dans une variable
//----------------------------------------------------------------------------
let devises = ['dollars', 'euro', 'yen'];
//Sans décomposition
//-------------------

//let premiereDevise = devise[0];
//let autres = [devises[1], devises[2]];


//Avec décomposition
//------------------

let [premiereDevise, ...autres] = devises;