function conversion(lettre) {
    var lettreLeet = lettre;
    switch (lettre.toLowerCase()) {
        case "a":
            lettreLeet = "apa";
            break;

        case "e":
            lettreLeet = "epe";
            break;
        case "i":
            lettreLeet = "ipi";
            break;
        case "o":
            lettreLeet = "opo";
            break;
        case "u":
            lettreLeet = "upu";
            break;
        default:

            break;
    } return lettreLeet;
}

function transform(saisie) {
    var wordChanged = "";

    for (i = 0; i < saisie.length; i++) {
        wordChanged+=conversion(saisie[i]);
    }
    return wordChanged;
}
var mot = prompt("Entrer le mot de votre choix");

alert(transform(mot));
document.createElement(p).innerHtml(transform, mot);
