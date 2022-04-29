function chargeJson() {
    fetch("script/quizson.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            console.log(data[0].choices);
            // createDivs(motif);
        });
}





for (var x = 0; x < 10; x++);
console.log(x);