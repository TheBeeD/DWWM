// Bandeau sombre pour lire la nav quand elle passe en dessous de l'image de fond

const navigation = document.querySelector('nav');
window.addEventListener('scroll', () => { // <-- écoute du scroll de la souris

    if (window.scrollY > 600 || window.scrollY < 40) { // <--hauteur approximative de fond.jpg
        navigation.classList.add('anim-nav');
    } else {
        navigation.classList.remove('anim-nav');
    }

})

// Anim click

window.addEventListener('click', (e) => { // <--écoute du click
    console.log(e);

    const rond = document.createElement('div'); // <--création d'une div/click 
    rond.className = 'clickAnim';
    rond.style.top = `${e.pageY - 50}px`;
    rond.style.left = `${e.pageX - 50}px`;
    document.body.appendChild(rond);

    setTimeout(() => { // <-- sinon le console.log est gavée en moins de 5minutes 
        rond.remove();
             }, 1500) // <--1.5secondes laisse le temps à l'anim d'apparaitre avant que la div soit suprimée
        
            })
    


    // Animation input colorie le border solid en rouge si la condition n'est pas remplie

    const validationInput = document.querySelector('input');

    validationInput.addEventListener('input', (e) => { //<--écoute du champs

        if (e.target.value.length >= 3) { //<-- si (e) est remplie de 3 caractères ou plus
            validationInput.style.borderColor = "green";
        } else {
            validationInput.style.borderColor = "red";
        }

    })
