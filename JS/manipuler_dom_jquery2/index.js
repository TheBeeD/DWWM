$(document).ready(function(){
  //on recpere la valeur de l'attribut h1
  var atth1 = $('h1').attr('class');
  //on affiche cette valeur dans notre span
  $('#test').text('Valeur de la class de h1 : ' + atth1);

  //on modifie la valeur associée à l'attribut class de h2
  $('h2').attr('class', 'titre');

  //on definit 2 attributs href et target pour a et on leuur attribue des valeurs
  $('a').attr({
      href: 'http://pierre-giraud.com',
      target: '_blank'
  })
});