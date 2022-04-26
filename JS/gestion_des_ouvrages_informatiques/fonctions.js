var options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
function ChargeInfosJson() {
    /* Allons chercher un fichier Json */
    fetch('books.json')
        .then(response => { /* Une fois que le fichier est chargé */
            return response.json();  /* Convertissons le en Json */
        })
        .then(data => { /*Une fois le fichier converti*/
            console.log(data); /*Appelons notre fonction */
            CreateDivs(data);

        }
        
        )}
function CreateDivs(data) {

    const preview = document.getElementById("booksList");

    for (let x = 0; x < data.length; x++) {
        let listBook = document.createElement("div");
        listBook.setAttribute("class", "card");
        listBook.setAttribute("id", "livre");
        var image;

        if ((data[x].thumbnailUrl == null) || (data[x].thumbnailUrl == undefined)) {
            image = 'https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png';
        }
        else {
            image = data[x].thumbnailUrl;
        }



        listBook.innerHTML =
            '<img class="image" src="' + image + '"/>'
            + '<h1 class="titre">' + data[x].title + '</h1>'
            + '<h2 class="isbn">' + data[x].isbn + '</h2>'
            + '<h3 class="page">' + new Date(data[x].publishedDate.dt_txt).toLocaleDateString("fr-FR", options) + '</h3>'
            + '<p class=shortDescription>' + data[x].shortDescription + '</p>';
           
        preview.appendChild(listBook);

    }

}