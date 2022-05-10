//Tableau à une dimension
//-----------------------

// let monTableau = new Array('un', 'deux', 'trois'); <----Ancienne notation
// let monTableau = Array('un', 'deux', 'trois'); <--------Ancienne notation simplifiée

let monTableau = ['un', 'deux', 'trois']; //<--------------Nouvelle notation
monTableau.push('quatre','cinq');//<-----------------------ajoute une donnée par la fin du tableau
monTableau.unshift('zero');//<-----------------------------ajoute une donnée par le début
monTableau.pop();//<---------------------------------------éfface le dernier element du tableau
monTableau.shift();//<-------------------------------------éfface le premier element de mon tableau
console.log(monTableau.join(', '))//<----------------------affiche le tableau sous forme de chaine de caracteres avec le séparateur(', ') de notre choix
monTableau.splice(0, 2);//<--------------------------------efface des données (deux données) à partir de l'élément Zéro. En effet la console retoune Array ["trois", "quatre"]
monTableau.splice(0, 0, 'random', 'Py')//<-----------------ajoute des éléments à partir de 0 pour l'exemple: Array(4) [ "random", "Py", "trois", "quatre" ]
console.log(monTableau);

//index d'une valeur (uniquement sur des tableaux simple)
console.log(monTableau.indexOf('deux'));//<----------------renvoi l'index de la donnée demandée

// console.log(monTableau[0]); <---------------------------renvoie le premier element du tableau
// console.log(monTableau.length);<------------------------renvoie la taille du tableau
// console.log(monTableau[monTableau.length - 1]);<--------renvoie le dernier element du tableau

//Tableau en deux dimensions
//--------------------------

// let monTableau2D = new Array(        //     |
//     Array('Mark', 'Jeff', 'Bill'),   //     | <----------Ancienne notation des tableaux à plusieurs dimensions
//     Array('Zuckerberg', 'Bezos', 'Gates')// |
// );



let monTableau2D = [                      //|   
    ['Marc', 'Jeff', 'Bill'],             //|<--------------Nouvelle notation à préférer car plus courte et explicite
    ['Zukerberg', 'Bezos', 'Gates']       //|
];
//monTableau2D.pop();                     //<---------------efface le dernier tableau soit le dernier element du tableau "parent" 
//monTableau2D[0].shift();                //<---------------efface la première donnée du premier tableau
//monTableau2D.shift();                   //<---------------efface le premier tableau soit le premier element du tableau "parent"
console.log(monTableau2D.join(' / '));    //<---------------concatenne le tableau sous forme de chaine de caractère avec le séparateur de notre choix
                                          //<---------------affichera: "Marc,Jeff,Bill / Zukerberg,Bezos,Gates"
// monTableau2D[0].splice(0, 1);          //<---------------Suprimera la première donnée (0) du premier tableau [0]                                          
monTableau2D.splice(2, 0, ['30', '40', '70']); //<----------Ajoute un tableau apres les deux autre soit position 2, on efface rien donc 0, on créé le new tableau ['30', '40',...]
// console.log(monTableau2D[0].join(', '));//<--------------Si on veut afficher un seul des tableaux concatènné
console.log(monTableau2D);
// Tableaux associatifs
//---------------------

let monTableauAssociatif = {
    'prenom' : 'Mark',
    'nom'    : 'Zuckerberg',
    'poste'  : 'PDG de Facebook'  
};
monTableauAssociatif['nationalité'] = 'Americaine';
delete(monTableauAssociatif.poste);      //<--------------efface la donnée selectionnée ainsi que sa valeur

console.log(monTableauAssociatif);

// console.log(monTableauAssociatif['poste']);

