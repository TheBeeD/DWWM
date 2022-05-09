//conditions ternaires  43 8
//--------------------

// let x = 5;

// x > 3 ? console.log('x est superieur à 3') : console.log("x est inferieur à 3. ");


//Boucles do while 46 8
//----------------

// let prenom;

// do {

//        prenom = prompt('Quel est votre prénom ? ');

      

// } while (prenom == "" || prenom == null)
   
//     alert('Bonjour ' + prenom);


// Boucles FOR  48 8
// -----------   

// for (let i = 1; i < 5; i++) {
//     console.log('Ligne : ' + i);
       
// }

// let i = 0;

// while(i < 5) {
//     if(i == 3) {
//         i++;
//         continue;
//     } 
//     console.log('Ligne : ' + i);
//     i++;
// }

// gérer le exeptions 50 8  C'est bon le switch case, bien utilisé ici bon pour "'modèle'".
//  ------------------

try {
    let recompense = prompt("Choisissez une récompense: épée, arc, hache.");
    let degats;
    switch(recompense) {
        case 'épée':
            degats = 40;
            break;
        case 'arc':
            degats = 30;
            break;
        case 'hache':
            degats = 20;
            break;  
        default:
            throw new Error('Vous ne pouvez pas tricher.');          
    } 
    alert('Vous avez choisi : ' + recompense + '( ' + degats + ' degats )');//bug ou je sais pas mais ça m'affiche pas les espaces juste avant l'arme.

    //erreur ?
    // alert(hello);
}
catch(error) {
    alert(error);
    // Erreur !
//  alert("Message personnalisé du style: La variable n\'existe pas")
    // alert(error.stack);// .message pour afficher juste le message d'erreur...
    // .name affiche juste le nom de l'erreur
    // .stack pour l'erreur complete.
    // 
} 
finally {
    alert('Fin du programme');
}