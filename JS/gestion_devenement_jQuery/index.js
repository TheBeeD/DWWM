//action au click sur une balise p auquel fait reference"this"
$(document).ready(function(){


    $('p').on('click', function() {
        $(this).hide();
    });
// à partir d'ici on commente la première partie

    // $('.div1').on('mouseenter mouseleave', function(){
    //     $('#msg').text('vous êtes entré ou sorti de la div. ')
    // });

// fonctionne séparément en commentant la première partie

    $('.div2').on({
        mouseenter : function(){
            $('#msg').text('vous êtes entré dans la div et normalement ça doit changer quand on en sort mais pas là, sûrement un parasite des fonctions précédentes ');
        },
        mouseleave: function(){
            $('msg').text('Vous êtes sorti de la div. ');
        }
    });
});