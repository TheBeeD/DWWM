// let voitures = new WeakSet(); <------------soit on déclare le weakSet au début et on tape tout ce qui suit

let voitureA = {
    constructeur: 'Tesla',
    modele: 'Cybertruck'
}

let voitureB = {
    constructeur: 'Citroën',
    modele: 'C1'
}

// voitures.add(voitureA);  |<---------------ajout un par un des nouveaux objets à voitures 
// voitures.add(voitureB);  |

// voitures.delete(voitureA); <-----delete, quoi!

let voitures = new WeakSet([voitureA, voitureB]); //|<--------ajout de tout les objets d'un coup
console.log(voitures);