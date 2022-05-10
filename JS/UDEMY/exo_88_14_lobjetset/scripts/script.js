let nombres = [10, 45, 75, 10, 24, 45];
//let monSet = new Set(nombres);
let monSet = new Set();

monSet.add('70');//------------------------------crée une entrée sous forme de chaine de caracteres
monSet.add(87);//--------------------------------crée une entrée sous forme de nombre
monSet.add(['mon', 'tableau', 'test']);//--------crée une entrée sous forme de tableau
monSet.delete(87);//-----------------------------efface une entrée
console.log(monSet.size);
