

function functioniMC(poids , taille) {

    taille = prompt("Indiquez votre taille (en metres) :");
    poids = prompt("Indiquez votre poids (en kilogrammes) :");
    functioniMC = poids/(taille**2);       
    alert("Votre indice de masse corporelle est de " + functioniMC);

};

functioniMC(0,0);