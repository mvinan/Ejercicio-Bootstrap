$(".play").on("click", play);

function play(){
	if ( $(".play") == true ) {
		$(".progreso").removeClass(".animar");
	}
	else{
		$(".progreso").addClass(".animar");
	}
}