const url = 'https://lesoublisdelinfo.com/api.php'

// //#region "Function chargeJson"
// function chargeJson() {
//     fetch("https://lesoublisdelinfo.com/api.php")
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//         // On stock le tableau json dans une variable.
//             tableauJson = data;
//             console.log(tableauJson);

//         // On met cette variable en parametre de la fonction startPage.
//         //   startPage(tableauJson);
//         });
// }
// chargeJson();
// //#endregion "Function chargeJson"
// //#region "Function fetchAPI multiple"
// async function fetchAPI(url) {
//     // try {

//         await fetch(url), {
//             mode: 'cors'
//         }
//             .then(async function (response) {

//                 return await response.json();
//             })
//             .then(function (json) {
//                 let result;
//                 result = json;

//             });
//     // } catch (error) {
//     //     console.log("Error", error)
//     // }
// }
// //#endregion "Function fetchAPI multiple"

let requete = new XMLHttpRequest(); //Création d'un Objet en précisant des propriétés différentes
requete.open('GET', url, true); //Premier paramètre: GET / POST, second paramètre: url  (la constante déclarée au début du fichier)
requete.responseType = 'json';// car nous atttendons du json
requete.send();//nous envoyons notre requete

requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if (requete.status === 200) {

        }
        else {
            alert('Un probleme est survenu, merci de rééssayer plus tard');
        }
    }
}