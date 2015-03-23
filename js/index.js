(function() {

	$play = $("[data-button='play']");
	$stop = $("[data-button='stop']");

	//botones y listener with events
	$( $play ).on("click", goAndStop);
	$( $stop ).on("click", stoped);


	//La accion con toggleClass (un solo boton, esconde y aparece segun lo necesario)
	function goAndStop(event){
		event.preventDefault();
		$(".progreso-bar").toggleClass("animar");
	}


	// aqui esta la accion en dos funciones
	function playing(event){
		event.preventDefault();
		$(".progreso-bar").addClass("animar");
	}
	function stoped(event){
		event.preventDefault();
		$(".progreso-bar").removeClass("animar");
	}

	//la accion con un solo boton pero con una condicional comprobando si tenemos la clase
	function playingAndStop(event){
		event.preventDefault();
		if ( $(".progreso-bar").hasClass("animar")) {
			$(".progreso-bar").removeClass("animar");
		}
		else{
			$(".progreso-bar").addClass("animar");
		}
	}


})();


