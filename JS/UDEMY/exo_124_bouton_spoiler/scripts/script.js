let hidden = true;
let btn  = document.querySelector('button');
let div = document.querySelector('div');

//cacher le message

div.style.display = "none";

//detecter le click

btn.addEventListener('click',() => {
    if (hidden) {
        btn.textContent = "Cacher";
        div.style.display = "block"
        hidden = false;
    }
    else {
        btn.textContent = "Afficher";
        div.style.display = "none";
        hidden = true;
    }
})



