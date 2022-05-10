let panier = ['fraise', 'banane','poire'];

for(const fruit in panier ) {       //<-------------------renvoie dans sa variable, l'index de l'élément
    // panier[fruit] = 'pomme';
    console.log(panier);
}


for(const fruit of panier ) {       //<-------------------renvoie dans sa variable, la valeur de l'element<----------le plus utilisé
    // panier[fruit] = 'pomme';
    console.log(panier.indexOf (fruit));//<---------------recupère l'index des fruits de panier (affiche "0", "1", "2" à la ligne)
}

let listeDePays = ['France','Belgique', 'Japon', 'Maroc']
for(const pays in listeDePays) {
    console.log(pays);
}
//Les boucles for each


