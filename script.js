var partie = true;
var ptsJ1 = 0,ptsJ2 = 0, nul = 0;
var joueur = true;

function red(lettre){
	$('#'+lettre).removeClass('player2');
    $('#'+lettre).addClass('player1');
}
 console.log($('#a').attr('class'));
function blue(lettre){
	$('#'+lettre).removeClass('player1');
    $('#'+lettre).addClass('player2');
}
	
function win(joueur){
	if(joueur){
		ptsJ2 += 1;
		$('#j2').text(ptsJ2);
	}else{
		ptsJ1 += 1;
		$('#j1').text(ptsJ1);
	}

}
$('td').click(function(){
    if(partie){
    	var id = $(this).attr('id');
    	if(!$('#'+id).hasClass('player1') && !$('#'+id).hasClass('player2')){
    		if (joueur){
	    		red(id);
	    		joueur = false;
			} else {
	    		blue(id);
	    		joueur = true;
	    	}
	   		if( $('#a').attr('class') != undefined && $('#a').attr('class') == $('#b').attr('class') && $('#a').attr('class') == $('#c').attr('class') || $('#d').attr('class') != undefined && $('#d').attr('class') == $('#e').attr('class') && $('#d').attr('class') == $('#f').attr('class') || $('#g').attr('class') != undefined && $('#g').attr('class') == $('#h').attr('class') && $('#g').attr('class') == $('#i').attr('class') || $('#a').attr('class') != undefined && $('#a').attr('class') == $('#d').attr('class') && $('#a').attr('class') == $('#g').attr('class') || $('#b').attr('class') != undefined && $('#b').attr('class') == $('#e').attr('class') && $('#b').attr('class') == $('#h').attr('class') || $('#c').attr('class') != undefined && $('#c').attr('class') == $('#f').attr('class') && $('#c').attr('class') == $('#i').attr('class') || $('#a').attr('class') != undefined && $('#a').attr('class') == $('#e').attr('class') && $('#a').attr('class') == $('#i').attr('class') || $('#c').attr('class') != undefined && $('#c').attr('class') == $('#e').attr('class') && $('#c').attr('class') == $('#g').attr('class')){
	   			win(joueur);
	   		}
	   		
    	}
	}
});