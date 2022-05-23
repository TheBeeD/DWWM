const srcImg = "images/"; // emplacement des images de l'appli
const albumDefaultMini = srcImg + "noComicsMini.jpeg";
const albumDefault = srcImg + "noComics.jpeg";
const srcAlbumMini = "albumsMini/"; // emplacement des images des albums en petit
const srcAlbum = "albums/"; // emplacement des images des albums en grand
//essai du 22/05
const auteursAuteur = "auteurs/"; //emplacement des auteurs

	// Affichage des BD
var txtSerie = document.getElementById("serie");
var txtNumero = document.getElementById("numero");
var txtTitre = document.getElementById("titre");
var txtAuteur = document.getElementById("auteur");
var txtPrix = document.getElementById("prix");
var imgAlbum = document.getElementById("album");
var imgAlbumMini = document.getElementById("albumMini");
const preview = document.getElementById('preview');

	/**
	 * Récupération de l'album par son id et appel de 
	 * la fonction d'affichage
	 * 
	 * @param {number} num 
	 */
	 function getAlbum(num) {

		var album = albums.get(num.value);

		if (album === undefined) {
			txtSerie.value = "";
			txtNumero.value = "";
			txtTitre.value = "";
			txtAuteur.value = "";
			txtPrix.value = 0;

			afficheAlbums($("#albumMini"), $("#album"), albumDefaultMini, albumDefault);

		} else {

			var serie = series.get(album.idSerie);
			var auteur = auteurs.get(album.idAuteur);

			txtSerie.value = serie.nom;
			txtNumero.value = album.numero;
			txtTitre.value = album.titre;
			txtAuteur.value = auteur.nom;
			txtPrix.value = album.prix;

			var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;

			// Utilisation d'une expression régulière pour supprimer 
			// les caractères non autorisés dans les noms de fichiers : '!?.":$
			nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");

			afficheAlbums($("#albumMini"),$("#album"),srcAlbumMini + nomFic + ".jpg",srcAlbum + nomFic + ".jpg"
			);

		}
	}
	function getAuteur(num) {

		var auteur = auteurs.get(num.value);
	
		if (auteur === undefined) {
			txtSerie.value = "";
			txtNumero.value = "";
			txtTitre.value = "";
			txtAuteur.value = "";
			txtPrix.value = 0;
	
			afficheAlbums($("#albumMini"), $("#album"), albumDefaultMini, albumDefault);
	
		} else {
	
			var serie = series.get(album.idSerie);
			var auteur = auteursAuteur.get(auteurs.idAuteur);
	
			txtSerie.value = serie.nom;
			txtNumero.value = album.numero;
			txtTitre.value = album.titre;
			txtAuteur.value = auteur.nom;
			txtPrix.value = album.prix;
	
			var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;
	
			// Utilisation d'une expression régulière pour supprimer 
			// les caractères non autorisés dans les noms de fichiers : '!?.":$
			nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");
	
			afficheAlbums(
				$("#albumMini"),
				$("#album"),
				srcAlbumMini + nomFic + ".jpg",
				srcAlbum + nomFic + ".jpg"
			);
	
		}
	}
	
	/**
	 * Affichage de l'image par défaut si le chargement de l'image de l'album
	 * ne s'est pas bien passé
	 * 
	 * @param {object HTML} element 
	 */
	 function prbImg(element) {
		// console.log(element);
		if (element.id === "albumMini")
			element.src = albumDefaultMini;
		else element.src = albumDefault;

	}

		 /* Affichage des images, les effets sont chainés et traités
	 * en file d'attente par jQuery d'où les "stop()) et "clearQueue()" 
	 * pour éviter l'accumulation d'effets si défilement rapide des albums.
	 */
//#region affichage des albums un par un avec anim
function afficheAlbums($albumMini, $album, nomFicMini, nomFic) {
	$album.stop(true, true).clearQueue().fadeOut(100, function () {
		$album.attr('src', nomFic);
		$albumMini.stop(true, true).clearQueue().fadeOut(150, function () {
			$albumMini.attr('src', nomFicMini);
			$albumMini.slideDown(200, function () {
				$album.slideDown(200);
			});
		})
	});


}

jQuery(document).ready(function ($) {



	// Lecture d'un album
	// console.log("Lecture d'un album");
	// var album = albums.get(albumTitre.titre);
	// var serie = series.get(album.idSerie);
	// var auteur = auteurs.get(album.idAuteur);
	// console.log(album.titre+" "+serie.nom+" "+auteur.nom);
	

	/*
	console.log("Liste des albums");
	albums.forEach(album => {
	    serie = series.get(album.idSerie);
	    auteur = auteurs.get(album.idAuteur);
	    console.log(album.titre+" N°"+album.numero+" Série:"+serie.nom+" Auteur:"+auteur.nom);
	});
	*/


	/*
	console.log("Liste des albums par auteur");
	for(var [idAuteur, auteur] of auteurs.entries()) {
	    // Recherche des albums de l'auteur
	    for (var [idAlbum, album] of albums.entries()) {
	        if (album.idAuteur == idAuteur) {
	            console.log(auteur.nom+", Album N°"+album.numero+" "+album.titre+", Série:"+series.get(album.idSerie).nom);
	        }
	    }
	    
	}
	*/


	imgAlbum.addEventListener("error", function () {
		prbImg(this)
	});

	imgAlbumMini.addEventListener("error", function () {
		prbImg(this)
	});

	var id = document.getElementById("ident");
	ident.addEventListener("change", function () {
		getAlbum(this)
	});



//#region essais 22/05

//#endregion essai 22/05



//#endregion affichage des albums un par un avec anim


//#region essai 1 du 23/05  -----------le console.log affiche les series à la suite, comment les ressortir série par série
	
console.log("Liste des albums par série");
for(var [idSerie, serie] of series.entries()) {
	// Recherche des albums de la série
	for (var [idAlbum, album] of albums.entries()) {
		if (album.idSerie == idSerie) {
			console.log("C'est ici que ça commence :" + serie.nom + " ,"+album.idSerie+", Auteur:"+auteurs.get(album.idAuteur).nom+ ", " + album.titre);
			// var fenetre = document.createElement('div',"#fenetre", album.idSerie, album.titre ,auteurs.nom);
			// fenetre.innerHTML.setAttribute('class', "card");
            break;	
		}
	}
	
}

});
//#endregion essai 1 du 23/05



// fontion recherche qu'il faudra appeler au click du bouton
//dedans je verifie si c'est une recherche par rauteur ou par série
// Dans l'un ou l'autre cas, le traitement sera différent (if... then... else): peut être des fonctions a appeler selon les criteres


function recherche(){

	var nomARechercher = document.getElementById('search').value;
	console.log(nomARechercher);
    var idAuteurSaved = 0;


	for(var [idAuteur, auteur] of auteurs.entries()) {

		if(auteur.nom==nomARechercher){
			idAuteurSaved=idAuteur;
			preview.innerHTML ="";
			break;
		}

    }
	    // Recherche des albums de l'auteur
	    for (var [idAlbum, album] of albums.entries()) {
	        if (album.idAuteur == idAuteurSaved) {
				//Etape 1: on créé une div (ou une card): var card= document.createElement('card)
				var card= document.createElement('card');
				//Etape 2: on lui mets des attributs card.setAttribute('class','card');
				card.setAttribute('class','card');
					//etape 2.5: card.innerHTML='<div>' + album.nom + '</div'>
					card.innerHTML='<div>' + album.titre +'<br>'+ album.prix +'€'+ '<img src="images/noComicsMini.jpeg">' + '</div>' ;//le souci est ici...comment y mettre les images corespondantes
					// 
					//Etape3: on la rajoute à preview: preview.appendChild(card)
					preview.appendChild(card);


	            console.log(card);
	        }
	    }
		
	    
	



// for(var [idSerie, serie] of series.entries()) {
 
	   
// }
};
