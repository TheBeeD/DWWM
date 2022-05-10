function addition(...nombres) {//les "..."declarent un RestParameter

    let resultat = 0;

    nombres.forEach(nombre => {
       resultat += nombre;

    });
    console.log(resultat);
}

addition(4, 9, 5, 415, 78, 54);