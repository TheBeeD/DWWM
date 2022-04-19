

class personnage{
        
    constructor(_nom,_vie,_att,_def) {
        
            while(_nom == ""){
                alert("votre personnage n'est pas nommé, donnez lui un nom");
                _nom = prompt("donnez moi un nom");
            }
        this.nom = _nom;
        this.vie=_vie;
        this.att=_att;
        this.def=_def;
        this.existe=false;


        this.AfficheInfo=function()
        {
            console.log("Nom: " + this.nom + ", PV: " + this.vie + ", ATK : " + this.att + ", DEF : " + this.def + ", existence : " + this.existe)
        }

        this.attaquer = function(defenseur){

            if (this.vie > 0 && defenseur > 0){
                    console.log("Nouvelle attaque de " + perso1.nom + " sur " + perso2.nom)
                    if(this.att > defenseur){
                        defenseur -= 10;
                    }
                    else if(this.att == defenseur){
                        defenseur -= 5;
                    }
                    else{
                        this.vie -= 5;
                    }
                    perso1.AfficheInfo();
                    perso2.AfficheInfo();
                }
        
                if (perso1.vie <= 0){
                    console.log (perso1.nom + " est décédé");
                    perso1.existe=false;
                }
                if (perso2.vie <= 0){
                    console.log (perso2.nom + " est décédé");
                    perso2.existe = false;
                }
                perso1.AfficheInfo();
                perso2.AfficheInfo();
            }
    }
}

let perso1 = new personnage("",20,60,60);
let perso2 = new personnage("",40,50,50);

perso1.existe = true;
perso2.existe = true;
perso1.AfficheInfo();
perso2.AfficheInfo();


if (perso2.vie > 0 && perso1.vie > 0){
    perso1.attaquer()
}
if (perso2.vie > 0 && perso1.vie > 0){
    perso2.attaquer()
}
if (perso2.vie > 0 && perso1.vie > 0){
    perso1.attaquer()
}
if (perso2.vie > 0 && perso1.vie > 0){
    perso2.attaquer()
}
if (perso2.vie > 0 && perso1.vie > 0){
    perso1.attaquer()
}
    