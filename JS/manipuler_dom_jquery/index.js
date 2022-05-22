
// $(document).ready(function(){
//      //On recupere la taille de notre titre h1
//      var taille = $('h1').css('font-size');

//      //On affiche la taille par ex: 32px
//      $('#test').text(taille);
// });

// $(document).ready(function(){
    
//     $('h1').css('font-size', '50px'); //comme on donne un second attribut, la fonction devient un setter

//     var taille = $('h1').css('font-size');// cette fois on s'en sert en setter

//     //On affiche la taille 
//     $('#test').text(taille);
// });

// $(document).ready(function(){
//     var titre = $('h1').html();

//     $('h1').html('<mark>DOM</mark> manipulé !');

//     $('#test').html(titre);
//  // quand on écrivait .text aux 3 endroits où il est écrit .html, la balise n'était pas lue ou interprétée (apparaissait dans le h1 sous forme de balises)

// });

$(document).ready(function(){
   $('#prenom').keyup(function() {
       var valeurInput = $(this).val();
       $('#sp1').text(valeurInput);
   })

   $('select').change(function() {
       var valeurSelect = $('select').val() || [];
       $('#sp2').text(valeurSelect.join(', '));
   });
});