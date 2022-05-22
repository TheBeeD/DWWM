//action au click sur une balise p auquel fait reference"this"
$(document).ready(function(){
    $('p').on('click mouseover mouseout', function(e) {
        $('#msg').text('Evenement déclenché : ' + e.type);
    });
});