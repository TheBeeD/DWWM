const url = 'https://blockchain.info/ticker';

function recupererPrix() {
  // Créer une requête
  let requete = new XMLHttpRequest(); //Création d'un Objet en précisant des propriétés différentes
  requete.open('GET', url); //Premier paramètre: GET / POST, second paramètre: url  (la constante déclarée au début du fichier)
  requete.responseType = 'json';// car nous atttendons du json
  requete.send();//nous envoyons notre requete

  //Dés qu'on recoit une réponse, cette fonction est executée
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response; //on stock la reponse
        let prixEnEuros = reponse.EUR.last;
        document.querySelector('#price_label').textContent = prixEnEuros
      }
      else {
        alert('Un problème est intervenu, merci de revenir plus tard. ');
      }
    }
  }
  console.log('Prix actualisé');
}

setInterval(recupererPrix,5000);