/*
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Ajoute tous les elements table du id  body 
document.getElementById('body').appendChild(table);


let result = '\n';
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        result += (i*j) + ' ';
    }
    result += '\n'
}
*/
let page =document.querySelector('body');
let table = document.createElement('table');
let tr = document.createElement('tr');
let td = document.createElement('td');
 
page.appendChild(table);
td.innerHTML= 'Multiplié par';
tr.appendChild(td);
table.appendChild(tr);
 
for(let d = 0 ; d<10 ; d++ )
{
    let td1 = document.createElement('td');//creation des tdata"s"
    td1.innerHTML = d;
    tr.appendChild(td1);
}
 
for(let i=0 ; i<10 ; i++ )
{
    let trx=document.createElement('tr'); //creation des trow"s"
     
    if(i%2 == 0) {// on colorise les cases si i est pair
        trx.style.backgroundColor = '#BBB';
    }
    else
    {
        trx.backgroundColor = '#999';
    }
     
    let td0=document.createElement('td');
    td0.innerHTML=i;
    trx.appendChild(td0);
    /* creation d une variable td0 contenant une balise
    de type td, affectation de la valeur de i, puis on place la
    variable td0 dans la variable trx */
     
    for(let j=0 ; j<10 ; j++ )
    {
        let tdx=document.createElement('td');
        tdx.innerHTML= i*j;
        trx.appendChild(tdx);
        /* creation de la variable tdx qui contient
        une balise de style td, affectation de la valeur
        i*j, puis on place la variable tdx dans la variable trx */
    }
     
    table.appendChild(trx)};