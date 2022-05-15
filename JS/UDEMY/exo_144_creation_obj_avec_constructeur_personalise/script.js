function Utilisateur(prenom, nom, email) {
  this.prenom = prenom;
  this.nom    = nom;
  this.email  = email;

  this.sePresenter = () => {
    console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email);
  }
}

//On crée un objet

var mark = new Utilisateur("Mark", "Zuckerberg", "mark@facebook.com");
var bill = new Utilisateur("Bill", "Gates", "billgatesnotes.com");

mark.sePresenter();
bill.sePresenter();

mark.poste = "PDG de Facedebouc";

console.log(mark);
console.log(bill);

function Logement(type, taille, année, placeDeParking, nomProprietaire, prenomProprietaire) {
  this.type               = type;
  this.taille             = taille;
  this.année              = année;
  this.placeDeParking     = placeDeParking;
  this.nomProprietaire    = nomProprietaire;
  this.prenomProprietaire = prenomProprietaire;  
}

var appartementA = new Logement('Appartement', 'F3', 2014, true, mark.prenom, mark.nom,);//mark est un objet

console.log(appartementA);