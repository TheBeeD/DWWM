$(document).ready(function(){
$('#c').change(function() {
  var v = $(this);
  $('#test').html(
    'Valeur attribut : ' + v.attr('checked') +
    '<br> Valeur proprieté : ' + v.prop('checked')
  );
});
});

//la case sera cochée par défaut mais seul la valeur propriété sera affectée à l'action parce que l'attribut ne change pas
