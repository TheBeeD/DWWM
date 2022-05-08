let preparation = 10, cuisson = 15;

function cuisiner(nombreDeGateaux, minutesDeCuisson, minutesDePreparation) {
    let resultat = nombreDeGateaux * (minutesDeCuisson + minutesDePreparation);
    
    return resultat;
}
console.log(cuisiner(5, preparation, cuisson));