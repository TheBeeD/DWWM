//action au click sur une balise p auquel fait reference"this"
$(document).ready(function(){
     $('#msg').hide();

     $('#b2').click(function(){
         $('#b1').on('click',function() {
             $('#msg').show();
            });    
         $('#b1').text('Vous pouvez maintenant me cliquer');
     });
     $('#b3').click(function() {
         $('#b1').off('click');
         $('#b1').text('Plus de click possible');
     });
});