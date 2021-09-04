var properties = {

	botonSeleccionado: document.querySelector("#currentPage a")
}

var methods = {
	
	hoverButtons: function(){
		properties.botonSeleccionado.style.background = "#484848";
		properties.botonSeleccionado.style.color = "";
	}
}

methods.hoverButtons();