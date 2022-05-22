var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
var booksList = new Array();
var categoryFilterList = new Array();
var authorsList = new Array();
var categoriesList = new Array();
var categoryBookList = new Array();
//fonction qui renvoie les livres selon la sélection de l'auteur
var ChargeByAuthor = function () {
  var AuthorFilterList = new Array();
  var e = document.getElementById("listAuthors");
  var strAuthors = e.options[e.selectedIndex].text;
  console.log(strAuthors);
  //on incrémente jusque la taille de booklist
  for (var y = 0; y < booksList.length; y++) {
     //on incrémente jusque la taille de booklist[y].authors jusqu'à z max
    for (var z = 0; z < booksList[y].authors.length; z++) {
      if (strAuthors == booksList[y].authors[z]) {
        // console.log("test");
        AuthorFilterList.push(booksList[y]);
      }
    }
  }
  createDiv(AuthorFilterList);
};

var ChargeByCategory = function () {
  var CategoryFilterList = new Array();
  var e = document.getElementById("listCategories");
  var strCategories = e.options[e.selectedIndex].text;
  console.log(strCategories);
  for (var y = 0; y < booksList.length; y++) {
    for (var z = 0; z < booksList[y].categories.length; z++) {
      if (strCategories == booksList[y].categories[z]) {
        CategoryFilterList.push(booksList[y]);
      }
    }
  }
};
// -----------------------------------------------------------------------------
// ---------------------------------FONCTION JSON-------------------------------
function chargeInfo() {
  fetch("books.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      createList(data);
      //   createDiv(data);
    });
}
//------------------------------------------------------------------------------
// -----------------------------------FONCTION CREATE LIST----------------------
var createList = function (data) {
  for (var x = 0; x < data.length; x++) {
    var book = data[x];
    booksList.push(book);

    for (var y = 0; y < book.authors.length; y++) {
      let author = book.authors[y];

      if (authorsList.indexOf(author) == -1) {
        authorsList.push(author);
      }
    }
    for (var y = 0; y < book.categories.length; y++) {
      let category = book.categories[y];

      if (categoriesList.indexOf(category) == -1) {
        categoriesList.push(category);
      }
    }
  }

  booksList.sort();
  authorsList.sort();
  categoriesList.sort();
  for (var x = 0; x < authorsList.length; x++) {
    var option = document.createElement("option");
    option.value = authorsList[x];
    option.innerText = authorsList[x];
    document.getElementById("listAuthors").appendChild(option);
  }
  for (var x = 0; x < categoriesList.length; x++) {
    var option = document.createElement("option");
    option.value = categoriesList[x];
    option.innerText = categoriesList[x];
    document.getElementById("listCategories").appendChild(option);
  }
  ChargeByAuthor();
  ChargeByCategory();
  console.log(booksList);
  createDiv(booksList);
};
// --------------------------------------------------------------------------
// ---------------------FONCTION CREATE CARD---------------------------------
function createDiv(data) {
  // // -------------------------LOAD BOOKS IN CONSOLE --------------
  // for (var x = 0; x < data.length; x++) {
  //   console.log("Livre " + x);
  //   console.log("Auteurs : " + data[x].authors);
  //   console.log("Catégories : " + data[x].categories);
  // }
  // // --------------------------------------------------------------
  const preview = document.getElementsByClassName("preview")[0];
  preview.innerHTML = "";
  const gestionnaireListeLivres = document.createElement("div");
  gestionnaireListeLivres.setAttribute("class", "content");
  gestionnaireListeLivres.setAttribute("id", "BookList");

  let listBooks = data;
  for (var i = 0; i < listBooks.length; i++) {
    let booksListeElement = document.createElement("div");
    booksListeElement.setAttribute("class", "card");
    if (listBooks[i].thumbnailUrl == undefined) {
      listBooks[i].thumbnailUrl =
        "https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png";
    }
    booksListeElement.innerHTML =
      '<img id="bookimage" src=' + listBooks[i].thumbnailUrl +">"+ '<h1 class="bookname">' +
      listBooks[i].title +"</h1>" +'<h2 class="isbn"><strong>ISBN : </strong>' +
      listBooks[i].isbn +"</h2>" +'<h3 class="date">' +new Date(listBooks[i].publishedDate.dt_txt).toLocaleDateString(
        "fr-FR", options) +"</h3>" +'<p class="page"><strong>Nombre de pages : </strong>' +
        listBooks[i].pageCount +"</p>" +'<p class="desc"><strong>Description : </strong>' +
      listBooks[i].shortDescription +"</p>";
    gestionnaireListeLivres.appendChild(booksListeElement);
    preview.appendChild(gestionnaireListeLivres);
  }
}
