jQuery(document).ready = function ($) {
	const srcImg           = "images/"; // emplacement des images de l'appli
	const albumDefaultMini = srcImg + "noComicsMini.jpeg";
	const albumDefault     = srcImg + "noComics.jpeg";
	const srcAlbumMini     = "albumsMini/"; // emplacement des images des albums en petit
	const srcAlbum         = "albums/"; // emplacement des images des albums en grand
    const auteurs          = "data/auteurs.js";
    
	// var auteur             = auteur.auteurs;


	albums.forEach(album => {
        console.log(JSON.stringify(album));
        document.writeln("<script type='text/javascript' src='data/albums.js'></script>");
		var auteurs = [auteur];
	});
	// auteurs.forEach(auteur => {
	// 		console.log(JSON.stringify(auteur));
		
    // });
	
	auteurs.forEach(auteur => {
		document.querySelector('#listbd')
        console.log(JSON.stringify(auteur));
	});

	series.forEach(serie => {
        console.log(JSON.stringify(serie));

	});
	
	//on fait une recherche sur la map des albums: 
       // Dans un premier temps on va aller recupérer l'id de l'auteur selon la saisie utilisateur (qui sera un input)
    
    var idAuteurToSave="";
    for (var [idAuteur, auteur] of auteurs.entries()) {
        if (auteurs.nom == addEventListener(auteur, this.auteur )){ //remplacer le nom de l'auteur ici par le choix de l'utilisateur
            //on est sur le bon: on sauvegarde l'id, puis on sort de la boucle
            console.log("L'idAuteurToSave est juste ici  " + idAuteur)
            idAuteurToSave=parseInt(idAuteur);
            break;
        }
    }
    // on a notre idAuteur, on fait notre petit filtre
    if (idAuteurToSave>0){
        for (var [idAlbum, album] of albums.entries()) {
            if (album.idAuteur == idAuteurToSave) {
                serie = series.get(album.idSerie);
                auteur = auteurs.get(album.idAuteur);
                console.log(album.titre 
					+ " N°" 
					+ album.numero 
					+ " Série:" 
					+ serie.nom 
					+ " Auteur:" 
					+ auteur.nom 
					+" Ref: "
					+ idAlbum);
            }return(innerHTML.createElement("duMemeAuteur",div));
        }
    }

	
	/*
	console.log("Liste des albums");
	albums.forEach(album => {
	    serie = series.get(album.idSerie);
	    auteur = auteurs.get(album.idAuteur);
	    console.log(album.titre
			+" N°"+album.numero
			+" Série:"
			+serie.nom
			+" Auteur:"
			+auteur.nom);
	});
	*/

	/*
	console.log("Liste des albums par série");
	for(var [idSerie, serie] of series.entries()) {
	    // Recherche des albums de la série
	    for (var [idAlbum, album] of albums.entries()) {
	        if (album.idSerie == idSerie) {
	            console.log(serie.nom+", Album N°"+album.numero+" "+album.titre+", Auteur:"+auteurs.get(album.idAuteur).nom);
	        }
	    }
	    
	}
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

	// Affichage des BD
	var txtSerie = document.getElementById("serie");
	var txtNumero = document.getElementById("numero");
	var txtTitre = document.getElementById("titre");
	var txtAuteur = document.getElementById("auteur");
	var txtPrix = document.getElementById("prix");
	var imgAlbum = document.getElementById("album");
	var imgAlbumMini = document.getElementById("albumMini");

	imgAlbum.addEventListener("error", function () {
		prbImg(this)
	});

	imgAlbumMini.addEventListener("error", function () {
		prbImg(this)
	});

	var id = document.getElementById("id");
	id.addEventListener("change", function () {
		getAlbum(this)
	});


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

			afficheAlbums($("#albumMini"),
			              $("#album"),
						  albumDefaultMini,
						  albumDefault);

		}
		else {

			var serie = series.get(album.idSerie);
			var auteur = auteurs.get(albums.idAuteur);

			txtSerie.value = serie.nom;
			txtNumero.value = album.numero;
			txtTitre.value = album.titre;
			txtAuteur.value = auteur.nom;
			txtPrix.value = album.prix;

			var nomFic = serie.nom + "-" + album.numero + "-" + album.titre;

//Utilisation d'une expression régulière pour supprimer les caractères non autorisés dans les noms de fichiers : '!?.":$
			nomFic = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");

			afficheAlbums(
				$("#albumMini"), $("#album"),
				 srcAlbumMini + nomFic + ".jpg",
				 srcAlbum + nomFic + ".jpg",
			);

		}
	}

	/**
	* Affichage des images, les effets sont chainés et traités
	* en file d'attente par jQuery d'où les "stop()) et "clearQueue()" 
	* pour éviter l'accumulation d'effets si défilement rapide des albums.
	*
	*  @param {object jQuery} $albumMini 
	*  @param {object jQuery} $album 
	*  @param {string} nomFic 
	*  @param {string} nomFicBig 
	*/
	function afficheAlbums($albumMini, $album, nomFicMini, nomFic) {
		$album.stop(true, true).clearQueue().fadeOut(100), function () {
			$album.attr('src', nomFic);
			$albumMini.stop(true, true).clearQueue().fadeOut(150), function () {
				$albumMini.attr('src', nomFicMini);
				$albumMini.slideDown(200),
				function () {
				    $album.slideDown(200);
				};
			}
		};


	}


/** Affichage de l'image par défaut si le chargement de l'image de l'album ne s'est pas bien passé
*	 
* @param {object HTML} element 
*/
function prbImg(element) {
        //console.log(element);
		if (element.id === "albumMini")
			element.src = albumDefaultMini;
		else element.src = albumDefault;

	}


function albumSerie() {
	console.log('Liste des albums par série');
	var listBd = document.getElementById('listbd');
	listbd.innerHTML = "";
	for ([idSerie, serie] of series.entries()) {
		
		for (var [idSerie, album] of album.entries()) {   //Recherche des albums de la série
			
			if (albums.idSerie == albums.entries) {
				var element = document.createElement("p");
				element.innerHTML = serie.nom + " Album N°" + album.numero + "N° " + album.titre + " Auteur:" + listBd.get(album.idAuteur).nom;
			}
		 
		}
		
	}
};
};

