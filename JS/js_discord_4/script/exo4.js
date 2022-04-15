// Exercice 4 : Boucle for simple. Ecrire une page HTML faisant apparaître les nombres premiers compris entre 0 et 100.
var max = 100;

for(i = 2; i <= 100; i++) {

var j = 1;
var racine = Math.floor(Math.sqrt(i));

do {
j++;
} while(j <= racine && i%j != 0);

if(j > racine) {document.write(i +"<br>")}

// On affiche les nombres premiers trouvés


}


