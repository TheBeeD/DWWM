





// //Création des variable en les "raccordant" à leurs origines sur le html  
// let cita           = document.getElementById('citation');
// let auteur         = document.getElementById('auteur');
// let btn            = document.getElementById('nouveau');
// let dernier        = citations[0];
// let nombreAleatoir = random [citations.length()];


// //écoute du click puis consequences
// btn.addEventListener('click', suivant)
         
// function suivant() {   
//     suivant = ()
// };


//-------------------Correction-----------------------------------------
//Création des variable en les "raccordant" à leurs origines sur le html  
let citation         = document.querySelector('#citation');
let auteur           = document.querySelector('#auteur');
let nouveau          = document.querySelector('#nouveau');
let dernier          = 0;
let nombreAleatoire  = 0;
// Tableau de citations
let citations        = [
    ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
    ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
    ["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
    ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
    ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain"],
    ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
    ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
    ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain"],
    ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy"],
    ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum"],
    ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher"],
    ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick"],
    ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson"],
    ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso"],
    ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill"],
    ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki"],
    ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar"],
    ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy"],
    ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
    ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis"],
    ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill"]
  ];

function genererNombreEntier (max) {
    return Math.floor(Math.random() * Math.floor(max));//<---Math.random renvoie un nombre aléatoire allant de 0 à 1
    // par exemple 0.8 * 10 = 8
    //      Math.floor de 5.1  = 5
}

//écoute du click

nouveau.addEventListener('click', () => {
    do {
      nombreAleatoire = genererNombreEntier(citations.length);    
    } while (nombreAleatoire == dernier)
    //mise à jour de valeurs du contenu html
    citation.textContent = citations[nombreAleatoire][0];//<----...= citations[nombreAleatoire = position dans le tableau]  [0] l'index zero du tableau est la première itération de chaque ligne
    auteur.textContent   = citations[nombreAleatoire][1];//<---- [1] seconde itération de chaque ligne du tableau (il n'y a pâs d'index [2] ici, ça se voit sur les ligne)
    dernier              = nombreAleatoire;
 });
 



