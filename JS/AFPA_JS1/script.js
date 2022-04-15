var nomExterne = "Hein ";
var prenom = "Terieur ";
function portee(nom) {



var nomGlobale = "Halle ";

console.log(window.nomGlobale + nomExterne + prenom);

console.log(nomGlobale + nomExterne + prenom);

console.log(prenom);// provoque une erreur
}

portee("Ex ");

