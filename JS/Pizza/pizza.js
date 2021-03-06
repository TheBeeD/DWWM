function ChargeInfosJson() {
  //  Allons chercher un fichier JSON 
  fetch('pizza.json')
    .then(response => { /* Une fois que le fichier est chargé */
      return response.json();  /* Convertissons le en json */
    })
    .then(data => { /* Une fois le fichier converti */
      console.log(data); /* Appelons notre fonction */
      createDivs(data);

    })
}


function createDivs(data) {
  const preview = document.getElementsByClassName("preview")[0];
  preview.innerHTML = "";
  const pizzeriaName = document.createElement("div");
  pizzeriaName.innerHTML = '<h1 class="nomPizzeria">' + data.nom + '</h1>';

  const pizzeriaSlogan = document.createElement("div");
  pizzeriaSlogan.innerHTML = '<h2 class="slogan">' + data.slogan + '</h2>';

  preview.appendChild(pizzeriaName);
  preview.appendChild(pizzeriaSlogan);

  const pizzeriaListPizzas = document.createElement("div");
  pizzeriaListPizzas.setAttribute("class", "contenu");
  pizzeriaListPizzas.setAttribute("id", "pizzaList");


  var pizzasListElement = data.pizzaListPizzas;
  for (var x = 0; x < pizzasListElement.length; x++) {
    const pizzasListElement = document.createElement("div");
    pizzasListElement.setAttribute("class", "card");
    pizzasListElement.innerHTML =
      '<h1 class="nomPizza">' +
      pizzasList[x].nomPizza +
      '</h1>' +
      '<h2 class="prix">' +
      pizzasList[x].prix +
      '</h2> ' +
      '<img src=' +
      pizzasList[x].image +
      '>';
    pizzeriaListPizzas.appendChild(pizzasListElement);
    var listeGarniture = pizzasListElement[x].garniture;
    for (var y = 0; y <= listeGarniture.length - 1; y++) {
      var listeGarnitureElement = document.createElement('ul');	// create ul element.
      listeGarnitureElement.setAttribute("class", "garniture");
      listeGarnitureElement.innerHTML =
        '<li class= "garniture">' + pizzasListPizzas[x].garniture[y] + '</li>';
      pizzaListPizzas.appendChild(ul);		// add ul to the container.
      pizzaListPizzas.appendChild(pizzasListPizzas);
      pizzaListPizzas.setAttribute("class", "pizzas");
      pizzaListPizzas.setAttribute("id", "pizzas");
      preview.appendChild(pizzaListPizzas);


    }
  }
}