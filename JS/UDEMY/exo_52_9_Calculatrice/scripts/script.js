// try {
//     let calcul = prompt("Mode de calcul choisi(Veuillez saisir un chiffre de 1 à 4): \n\n1) Additions, \n2) Soustractions, \n3) Multiplications, \n4) Divisions.\n\n");
//  let nb1    = parseInt(prompt('Entrez un premier nombre :'));
//  let nb2    = parseInt(prompt('Entrez un second nombre :'));

//     switch(calcul) {
//         case '1':
//             resultat = nb1 + nb2;
//             break;
//         case '2':
//             resultat = nb1 - nb2;
//             break;
//         case '3':
//             resultat = nb1 * nb2;
//             break; 
//         case '4':
//             resultat = nb1 / nb2;
//             break; 
//         default:
//             throw new Error('Vous ne pouvez diviser par zéro.');          
//     } 
//     alert('le resultat est : ' + resultat );

//erreur ?
// alert(hello);

// Erreur !
//  alert("Message personnalisé du style: La variable n\'existe pas")
// alert(error.stack);// .message pour afficher juste le message d'erreur...
// .name affiche juste le nom de l'erreur
// .stack pour l'erreur complete.
// 
// } 
// finally {
//     alert('Fin du programme');
// }

// Fonctionnel mais voila la correction
//------------------------------------
//fonction Addition
function addition(nombreA, nombreB) {
    return nombreA + nombreB;
}
//fonction multiplication.
function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
}
//fonction soustraction.
function soustraction(nombreA, nombreB) {
    return nombreA - nombreB;
}
//fonction division.
function division(nombreA, nombreB) {
    if (nombreB == 0) {
        throw new Error("Impossible de diviser par 0.");

    }
    return nombreA / nombreB;
}

//On rentre dans la boucle principale
let restart = false; // Cette variable vaut false ce qui veut dire que par défaut, nous ne reproposons par un calcul.
do {
    //Demande un choix
    var choix = Number(prompt('Quel calcul souhaitez-vous effectuer?\n \n 1 - Addition\n 2 - Soustraction\n 3 - Multiplication\n 4 - Division\n\n'));
    //On aurais aussi pu utiliser parseInt plutôt que Number.
    do {

    } while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

    do {
        var premierNombre = Number(prompt("Entrez un premier nombre: "));
        var deuxiemeNombre = Number(prompt("Entrez un second nombre: "));
    } while (isNaN(premierNombre) || isNaN(deuxiemeNombre))
    try {
        switch (choix) {
            case 1:
                var resultat = addition(premierNombre, deuxiemeNombre);
                break;
            case 2:
                var resultat = multiplication(premierNombre, deuxiemeNombre);
                break;
            case 3:
                var resultat = soustraction(premierNombre, deuxiemeNombre);
                break;
            case 4:
                var resultat = division(premierNombre, deuxiemeNombre);
                break;
            default:
                throw new Error("Une erreur est survenue");
        }
        //affichage du resultat
        alert("Voici le résultat : " + resultat);
    }

    catch (error) {
        alert(error); // Si une erreur est survenue, on affiche l'erreur
    }

    restart = confirm("Souhaitez-vous recommencer un calcul ?"); // On demande grâce à la boîte de dialogue confirm() si l'utilisateur veut recommencer

} while (restart);