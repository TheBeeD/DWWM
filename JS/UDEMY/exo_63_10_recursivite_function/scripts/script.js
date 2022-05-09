function timer(secondes) { //10

    if(secondes > 0) {
        console.log(secondes);
        timer(secondes - 1); //9

           // afficher 9
           // timer(8) 

              // afficher 8
              // timer(7)
    }
    else {
        console.log(secondes);
    }
}

timer(10);

