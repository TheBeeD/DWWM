// function timer(secondes) { //10

//     if(secondes > 0) {
//         console.log(secondes);
//         timer(secondes - 1); //9

//            // afficher 9
//            // timer(8) 

//               // afficher 8
//               // timer(7)
//     }
//     else {
//         console.log(secondes);
//     }
// }

// timer(10);
function somme(nombre) {
    if(nombre == 1) {
    return 1;
}
   return nombre + somme(nombre - 1);
} 
           //retourner 2 + somme (1)

console.log(somme(5));