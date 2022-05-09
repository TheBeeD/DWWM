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

// gérer le exeptions 50 8 
//  ------------------

try {
    //erreur ?
    alert(hello);
}
catch(error) {
    // Erreur !
    alert(error);
} 