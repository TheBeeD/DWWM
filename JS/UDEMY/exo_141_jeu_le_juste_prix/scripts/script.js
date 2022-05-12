// Etape 1 - Sélectionner nos éléments
let input        = document.querySelector('#prix');
let error        = document.querySelector('small');
let formulaire   = document.querySelector('#formulaire');



// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire =Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier
function verifier (nombre) {
   
  let instruction = document.createElement('div');

  if (nombre < nombreAleatoire) {
    //c'est plus ---> ajouter un contenu à notre élément type "#1 (4) C'est plus
    instruction.textContent = '#' + coups + " ( " + nombre + " ) C'est plus !";
    //ajouter les classes instruction et plus
    instruction.className = "instruction plus";

  }
  else if(nombre > nombreAleatoire) {
    //c'est moins ---> ajouter un contenu à notre élément type "#1 (4) C'est moins
    instruction.textContent = '#' + coups + " ( " + nombre + " ) C'est moins !";
    //ajouter les classes instruction et moins
    instruction.className = "instruction moins";
  }
  else {
    //Félicitations vous avez trouvé le juste prix !
    //ajouter un contenu #1 (4) et "Félicitations vous avez trouvé le juste prix !"
    instruction.textContent = '#' + coups + " ( " + nombre + " ) Félicitations vous avez trouvé le juste prix !";
    //ajouter les classes instruction et Fini
    instruction.className = "instruction fini";
    input.disabled = true;
    
    
  }

  //Ajouter l'element devant les autres
  document.querySelector('#instructions').prepend(instruction);
}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup',() => {
  if(isNaN(input.value)) {
    //Afficher le message d'erreur
    error.style.display = "inline";
  }
  else{
    //Cacher le message d'erreur
    error.style.display = "none";
  }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
 e.preventDefault();//<---empèche le navigateur d'envoyer le contenu du formulaire vers une autre page

 if(isNaN(input.value) || input.value == ''){
    //mettre la bordure du formulaire en rouge
    input.style.borderColor = "red";
 }
 else{
    coups++;
    //mettre la bordure du formulaire en gris
    input.style.borderColor = "silver";
    nombreChoisi = input.value;
    input.value = "";
    verifier(nombreChoisi);
    }
});


