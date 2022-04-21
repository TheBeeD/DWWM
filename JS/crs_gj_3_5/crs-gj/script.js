
class personnage{
    constructor(nom){

        this.hasard = function(min,max){
            return Math.floor(Math.random() * (max - min)) + min;  //random pour avoir des stats aleatoire
        }
//-------------------------Nom
        var _nom = "";

        this.getNom = function (){
            return _nom;
        }

        this.setNom = function(nouvNom){
           _nom = nouvNom ;
        }

        this.setNom(nom)
//-------------------------Vie
        var _vie = this.hasard(20,100);

        this.getVie = function () {
            return _vie;
        }
        this.setVie = function (nouvVie) {
            _vie = nouvVie;
            if(_vie <= 0){
                _existe = false; //Si _vie passe à 0 ou en dessous _existe passe à false et le joueur sort du tableau des combatants
                _vie = 0; //Si _vie passe en dessous de 0, _vie se retrouve à 0 (parce qu'on peut pas être plus mort que mort^^)
                console.log("%c oh non " + this.getNom() + " est décédé !","color:red;");
            }
        }

//-------------------------Attaque
        var _att = this.hasard(20,100)

        this.getAtt = function(){
            return _att;
        }

        this.setAtt = function(nouvAtt){
            _att = nouvAtt;
        }

//-------------------------Defense
        var _def = this.hasard(20,100)

        this.getDef = function(){
            return _def;
        }
        this.setDef = function(nouvDef){
            _def = nouvDef;
        }

//-------------------------Existe
        var _existe;
        var nouvExiste;
        this.getExiste = function () {
            return _existe;
        }


        this.setExiste = function (nouvExiste) {
            _existe = nouvExiste;
        }

        if (_vie > 0 ) {
             nouvExiste=true;//class pour les stats des persos
             this.setExiste(nouvExiste)
        }
        this.info = function(){
            console.log("Nom : " + this.getNom() + " / PV : " + this.getVie() + " / att : " + this.getAtt() + " / def : " + this.getDef())
        }

        this.attaquer = function(defenseur){
                    if (this.getVie() > 0 && defenseur.getVie() > 0){
                    console.log("Nouvelle attaque de " + this.getNom() + " sur " + defenseur.getNom())
                    this.tour =+ 1

                    
                    if(this.getAtt() > defenseur.getDef()){
                        console.log(defenseur.getVie() + " defenseur");
                        defenseur.setVie(defenseur.getVie() - 10);
                        console.log("%c" + defenseur.getVie() + " defenseur" , "color : yellow;");//changement de la couleur du console.log
                    }
                    else if(this.getAtt() == defenseur.getDef()){
                        console.log("%c" + defenseur.getVie() + " defenseur" , "color : yellow;");//changement de la couleur du console.log
                        defenseur.setVie(defenseur.getVie() - 5) ;
                        console.log(defenseur.getVie()+ " defenseur");
                    }
                    else{
                        console.log(this.getVie() + " attaquant");
                        this.setVie(this.getVie() - 5) ;
                        console.log("%c" + this.getVie() + " attaquant" , "color : yellow;");//changement de la couleur du console.log
                    }
                }
             }
    
    }
}

class CRS{
    constructor(){
        this.CRS === personnage ;
    }
}

class match{
    constructor(){
        this.depart = function (){
            var nomPerso = ""; 

            const nbrJoueur = 5;

            let player = []; //tableau contenant tous les personnages



            while (player.length != nbrJoueur){ // TANT QUE il n'y a pas le nombre de personnage demandé

            

                
                while(nomPerso == ""){ //TANT QUE le perso n'est pas nommé

                // alert("votre personnage n'est pas nommé, donnez lui un nom");
                nomPerso = prompt("donnez moi un nom"); // nomme le perso
                    var i 
                    var verifNom = false
                    for(i = 0; i< player.length; i++){
                        
                        if(nomPerso == player[i].getNom()){
                            verifNom = true
                        }
                    }

                    if (nomPerso != "" && verifNom !=true ){ 
                        let perso = new personnage(nomPerso); // crée un nouveau perso
                        player.push(perso)
                        console.log (perso)
                    }
                    else{
                        alert("Ce nom est déjà pris, choisis en un nouveau")
                    }
                                    
                }
                nomPerso = ""
            }

            // for (let i = 0; i < nbrJoueur; i++){ //boucle qui affiche les persos et leurs stats
            //     console.log(player[i])
            // }

            function GenRandomPerso(length) { // fonction pour avoir un perso au hasard
                return Math.floor(Math.random() * length);
            }
            let round = 0;
            let run = function(){ //le combat
                let j = GenRandomPerso(player.length)
                let fighter1 = player[j]

                let k = GenRandomPerso(player.length)
                let fighter2 = player[k] //mettre les persos en combattants

                    if (fighter1 != fighter2){ // condition pour eviter qu'un joueur se frappe lui meme ^^
                        round += 1;
                        console.log("%c round :" + round , "color:cyan;")
                    fighter1.attaquer(fighter2) //les resultat des attaques selon les degats de l'attaquant et la defense du defenseur
                    
                    if (fighter1.getExiste() == false){
                        player.splice(j, 1);
                    }

                    if(fighter2.getExiste() == false){
                        player.splice(k,1)
                    }
                    // console.log(fighter1.getNom() + fighter1.getVie())
                    // console.log(fighter2)//afficher les stats apres l'attaque
                } 
                

            }


          
            while(player.length > 1){ //TANT QUE plus d'un joueur est vivant
                


                run() //combat
                
                console.log(player.length + " : personnage restant")
            }

            console.log ("%c fin de boucle", "color : #ff00f3;")

            

            let win = function(){
                var winner = player[0];
                console.log ("%c" + winner.getNom() + " a gagné", "color : lime;") // montre quel combattant est encore vivant
                player[0].info();
            }

            win()
        }
    }
}

let start = new match();
start.depart();




    // if (fighter1.getVie() <= 0){
    //     fighter1.setExiste(false)  ;
    //     console.log("%coh non, " + fighter1.getNom() + " est décédé", "color:red;" )
    //     // console.log(fighter1)
    //     player.splice(j, 1);
        
    // }
    // if (fighter2.getVie() <= 0){
    //     fighter2.setExiste(false);
    //     console.log("%coh non, " + fighter2.getNom() + " est décédé", "color:red;" )
    //     // console.log(fighter2)
    //     player.splice(k, 1)
    // }//cas si un des deux combattants meurt   