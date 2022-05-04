let start = $("#start");
const body = $("body");
const game = $("#game");
const title = $("#title");
let gameSection = document.getElementById("container1");
let questions;
let compteur = 0;
let choixfait = false;
let score = 0;
let choix = 0;
let buttonRep = $("#answer");

game.hide();
//#region "Function"

/**
 * Il récupère le fichier JSON, puis le convertit en objet JavaScript, puis le transmet à la fonction
 * startGame.
 */
function chargeJson() {
  fetch("script/quizson.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // on stock le tableau json dans une variable
      tableauJson = data;
      // ON MET CETTE VARIABLE EN PARAMETRE DE LA FONCTION STARTGAME
      startGame(tableauJson);
    });
}

/**
 * Il prend les données du fichier JSON et affiche la première question et les choix pour cette
 * question.
 */
let startGame = (data) => {
  start.hide();
  game.show();
  createQuestion(data[compteur]);
};

const nextQuestion = () => {
  compteur++;
  gameSection.innerHTML = "";
  let compteurHTML = document.createElement("h2");
  compteurHTML.setAttribute("id", "compteur");

  gameSection.appendChild(compteurHTML);
  document.getElementById("compteur").innerHTML = score + " / " + compteur;
  document.body.classList.remove("green");
  document.body.classList.remove("red");
  createQuestion(tableauJson[compteur]);
};

const createQuestion = (question) => {
  choixfait = false;
  let timer = document.createElement("div");
  timer.innerHTML = "<span> 20 </span>";
  timer.setAttribute("id", "timer");
  gameSection.append(timer);

  let temps = 20;
  const timerElement = document.getElementById("timer");
  function diminuerTemps() {
    let minutes = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    secondes = secondes < 10 ? "0" + secondes : secondes;

    timerElement.innerText = minutes + ":" + secondes;
    temps = temps <= 0 ? 0 : temps - 1;
  }
  setInterval(diminuerTemps, 1000);

  let questionTitle = document.createElement("h2");
  questionTitle.innerHTML = question.question;
  questionTitle.setAttribute("id", "questiontitle");
  gameSection.append(questionTitle);

  var choiceList = question.choices;
  var answers = document.createElement("div");
  answers.setAttribute("class", "answersContainer");
  gameSection.appendChild(answers);
  for (var r = 0; r < choiceList.length; r++) {
    var listReponses = document.createElement("div");
    listReponses.setAttribute("class", "answers");
    listReponses.innerHTML =
      '<button id="answer" class="btnReponse" data-correct ="' +
      question.correct +
      '">' +
      choiceList[r] +
      "</button>";

    answers.append(listReponses);
  }

  $(".btnReponse").one("click", function (evt) {
    var bonneReponse = evt.target.dataset.correct;

    if (evt.target.innerHTML == bonneReponse && choix < 1) {
      choix++;
      console.log("bien joué");
      document.body.classList.add("green");
      score++;
      console.log(score);
    }
    if (evt.target.innerHTML != bonneReponse && choix < 1) {
      choix++;
      document.body.classList.add("red");
      document.getElementById("title").style.color = "white";
      document.getElementById("title2").style.color = "white";
      document.getElementById("title3").style.color = "white";
    }
    if (choixfait === false) {
      choixfait = true;
      choix = 0;
      var next = document.createElement("div");
      next.setAttribute("id", "next");
      next.innerHTML =
        '<button class="nextButton btnReponse"  onclick="nextQuestion()">  Next  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"/></svg>  </button>';
      gameSection.appendChild(next);
    } else {
      console.log("choix deja fait");
    }
  });
};
//#endregion "Function"

const fadeOut = () => {
  let buttonfade = document.getElementById("start");
  buttonfade.classList.add("fadeOut");
};

if (temps == 0) {
  nextQuestion();
}
