let interval;
let btn      = document.querySelector('button');
let secondes = 10;
btn.addEventListener('click', start)
         
function start() {   
    interval = setInterval(decompte, 1000)
};

function stop() {
    clearInterval(interval);
    document.body.innerHTML += "Champagne !!! Je vais me coucher ><'"
}
function decompte() {

    secondes--;
    if(secondes ==0) {
        stop();
    }
    else {
        document.body.innerHTML += secondes + '<br>';
    }

}   

//     secondes = 10 ; secondes >= 0 ; secondes -= secondes;
//             let timer = setTimeout(secondes, 1000);    
//             e.stopPropagation(); //<----------------------- On stop la propagation
      
// clearTimeout(timer);
// document.body.append(p);




