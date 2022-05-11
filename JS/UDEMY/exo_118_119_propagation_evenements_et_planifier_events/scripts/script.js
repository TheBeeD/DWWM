// setTimeout
let timer = setTimeout("alert('Bonjour')", 3000);
clearTimeout(timer);

// setInterval
let interval = setInterval("alert('Bonjour')", 5000);
clearInterval(interval);

let article = document.querySelector('article');
let h1      = document.querySelector('h1');
let p       = document.querySelector('p');
p.style.textAlign       = "center";
document.body.append(p);

article.addEventListener('click', () => {
  alert('article cliqué');
});

h1.addEventListener('click', (e) => {//<----------C'est "e" qui est utilisé par convention mais ça pourrait être une autre lettre 
  alert('titre cliqué');
  e.stopPropagation(); //<----------------------- On stop la propagation
});

//-----------------------------------setInterval-&-setTimeOut-------------------------------

// // setTimeout
// let timer = setTimeout("alert('Bonjour')", 3000);
// clearTimeout(timer);

// // setInterval
// let interval = setInterval("alert('Bonjour')", 5000);
// clearInterval(interval);