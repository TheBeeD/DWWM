let consommable ="banane";

switch(consommable) {
    case "courgette":
    case "carotte":
    case "pomme de terre":
        console.log('ceci est un légume');
        break; //pour que l'instruction se limite à une réponse sinon il peut afficher les autre cas qui suivent    

    case "banane":
        console.log("Ceci est un fruit");
        break;

        default:
            console.log("ceci n\'est ni un fruit ni un légume");
            //pas de break pour la dernière occurence

}

