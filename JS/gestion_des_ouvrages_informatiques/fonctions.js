function ChargeInfosJson() {
    //  Allons chercher un fichier JSON 
    fetch('books.json')
        .then(response => { /* Une fois que le fichier est chargé */
            return response.json();  /* Convertissons le en json */
        })
        .then(data => { /* Une fois le fichier converti */
            console.log(data); /* Appelons notre fonction */
            showBooks(data);

        }
        )

}

getJSON('authors', function createDivs(showBooks) {
    const preview = document.getElementsByClassName("preview")[0, 1, 2];
    preview.innerHTML = "";
    const listAll = document.createElement("select");
    listAll.innerHTML = '<select class="name">' + showBooks.authors + '</select>';
})

function showBooks(jsonObj) {
    var books = jsonObj['authors','categories','thumbnailUrl'];

    for (var i = 0; i < books.length; i++) {
        var thumbnailUrl = document.createElement('img');
        var authors = document.createElement('h2');
        var categories = document.createElement('h2');

        categories.innerText = books[i].name;
        authors.innerText = 'Auteur: ' + showbook[i].authors;
        thumbnailUrl.innerHTML = 'Appercu: ' + showbook[i].thumbnailUrl;

        var imgLivre = book[i].thumbnailUrl;
        for (var j = 0; j < imgLivre.length; j++) {
            var listItem = document.createElement('li');
            listItem.innerText = imgLivre[j];
            myList.appendChild(listItem);
        }

        showBook.appendChild(thumbnailUrl);
        showBook.appendChild(authors);
        showBook.appendChild(categories);
    }
}