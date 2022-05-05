let planeteSection = document.getElementsByClassName("wrapper");
let planets;
let nomPersonnages;
let listFilms;


var callBackGetSuccess = function (data) {
    console.log(data);
}
//#region "Function chargeJson"
function chargeJson() {
    fetch("https://swapi.dev/api/films")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // On stock le tableau json dans une variable.
            tableauJson = data;
            console.log(tableauJson);

            // On met cette variable en parametre de la fonction startPage.
            //   startPage(tableauJson);
        });
}
chargeJson();
//#endregion "Function chargeJson"
//#region "Function fetchAPI multiple"
async function fetchAPI(url) {
    try {

        await fetch(url, {
            mode: 'cors'
        })
            .then(async function (response) {

                return await response.json();
            })
            .then(function (json) {
                let result;
                result = json;

            });
    } catch (error) {
        console.log("Error", error)
    }
}
//#endregion "Function fetchAPI multiple"



function buttonClickGET() {
    var url = "https://swapi.dev/api/films"

    $.get(url, callBackGetSuccess).done(function () {

    })
        .fail(function () {
            alert("erreur");
        })
        .always(function () {
        });


}
planets.document.createElement("div,.card");
let planetName = document.createElement("h2");
planetName.innerHTML = planets.planeteSection;
planetName.setAttribute("id", "nomPlanete");
planetName.append(planets);
console.log(planetName);  