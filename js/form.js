var cable= document.querySelector(".contactenosPage .bar2 .moveCable");
var enviar= document.querySelector("#formulario #enviar");
var nombre = document.getElementsByName("nombre");
var correo = document.getElementsByName("email");
var mensaje = document.getElementsByName("mensaje");
var formulario = document.querySelector("#formulario form");

setTimeout(function(){
	cable.style.transition = "2.5s height ease";
	cable.style.height = "0rem";
},1000);


enviar.addEventListener("click", function(){

	if (nombre[0].value != ""){
		if (correo[0].value != ""){
			if (mensaje[0].value != ""){
					console.log("Mensaje entregado con exito");
				}else{mensaje[0].placeholder='Debes escribir un Mensaje: Campo Obligatorio';}
		}else{correo[0].placeholder='Correo: Campo Obligatorio';}
	}else{nombre[0].placeholder='Nombre: Campo Obligatorio';}
});