//action au click sur une balise p auquel fait reference"this"
$(document).ready(function(){
    $('#trg').click(function(){
        $('#fcs').trigger('focus')
    });
    
    $('#trgh').click(function() {
        $('#fcs').triggerHandler('focus');
    });

    $('#fcs').focus(function(){
        $('#msg').text('Evenement focus déclenché');
    });
});