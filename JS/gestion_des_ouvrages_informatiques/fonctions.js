let options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
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
// Création des divs Cards et de leur conteneur preview
function CreateDivs(data) {

    const preview = document.getElementById("booksList");

    for (let x = 0; x < data.length; x++) {
        let listBook = document.createElement("div");
        listBook.setAttribute("class", "card");
        listBook.setAttribute("id", "livre");
        let image;
       // Affichage d'une vignette par defaut si thumnailUrl == null
        if ((data[x].thumbnailUrl == null) || (data[x].thumbnailUrl == undefined)) {
            image = 'https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png';
        }
        else {
            image = data[x].thumbnailUrl;
        }


        // mise en forme des infos du json dans le html   
        listBook.innerHTML =
            '<img class="image" src="' + image + '"/>'
            + '<h1 class="titre">' + data[x].title + '</h1>'
            + '<h2 class="isbn">' + data[x].isbn + '</h2>'
            + '<h3 class="page">' + new Date(data[x].publishedDate.dt_txt).toLocaleDateString("fr-FR", options) + '</h3>'
            + '<p class=shortDescription>' + data[x].shortDescription + '</p>';
           
        preview.appendChild(listBook);

    }

}
//fonction qui créé les listes déroulantes
let createList = function (data) {

    for (let x = 0; x < data.length; x++) {
  
      var book = data[x];
      booksList.push(book);
  
      for (let y = 0; y < book.authors.length; y++) {
        let author = book.authors[y];
  
        if (authorsList.indexOf(author) == -1) {
          authorsList.push(author);
        }
      }
  
      for (let y = 0; y < book.categories.length; y++) {
        let category = book.categories[y];
  
        if (categoriesList.indexOf(category) == -1) {
          categoriesList.push(category);
        }
      }
    }
    booksList.sort();
    authorsList.sort();
    categoriesList.sort();
    // liste par auteur
    for (let x = 0; x < authorsList.length; x++) {
        let option = document.createElement("option");
      option.value = authorsList[x];
      option.innerText = authorsList[x];
      document.getElementById("listAuthors").appendChild(option);
    }
    // liste par catégorie
    for (let x = 0; x < categoriesList.length; x++) {
        let option = document.createElement("option");
      option.value = categoriesList[x];
      option.innerText = categoriesList[x];
      document.getElementById("listCategories").appendChild(option);
    }
    showBooks(booksList); /* Appelons notre fonction */
  
  
  }
  let booksList = new Array();
  let categoryFilterList = new Array();
  let authorsList = new Array();
  let categoriesList = new Array();
  let categoryBookList = new Array();
//fonction qui renvoie les livres selon la sélection de l'auteur
let ChargeByAuthor = function () {
    let AuthorFilterList = new Array();
    let e = document.getElementById("listAuthors");
    let strAuthors = e.options[e.selectedIndex].text;
  console.log(strAuthors);
  for (let y = 0; y < booksList.length; y++) {
    for (let z = 0; z < booksList[y].authors.length; z++) {
      if (strAuthors == booksList[y].authors[z]) {
 console.log("test");
        AuthorFilterList.push(booksList[y]);
      }
    }
  }
  createDiv(AuthorFilterList);
};
//fonction qui renvoie les livres selon la sélection de la catégorie
let ChargeByCategory = function () {
    let CategoryFilterList = new Array();
    let e = document.getElementById("listCategories");
    let strCategories = e.options[e.selectedIndex].text;
  console.log(strCategories);
  for (let y = 0; y < booksList.length; y++) {
    for (let z = 0; z < booksList[y].categories.length; z++) {
      if (strCategories == booksList[y].categories[z]) {
        CategoryFilterList.push(booksList[y]);
      }
    }
  }
}