/*=============================================
OBJETO CON LAS PROPIEDADES DEL SLIDE
=============================================*/

var pc = {

	item: 0,
	cajaSlide: document.querySelector("#slideCliente ul"),
	imgSlide: document.querySelectorAll("#slideCliente ul li"),
	avanzar: document.querySelector("#slideCliente #avanzar"),
	velocidadSlide: 2000,
	formatearLoop: false,
	cantidadFotos: 3
}

/*=============================================
OBJETO CON LOS MÉTODOS DEL SLIDE
=============================================*/
var mc = {

	inicioSlide: function() {
		for (var i = 0; i < pc.cantidadFotos; i++) {
			pc.imgSlide[i].style.width = (100/pc.cantidadFotos) + "%";
		}
		mc.intervalo();
		pc.cajaSlide.style.width = (pc.cantidadFotos*100) + "%";
	},
	avanzar: function() {
		if (pc.item == pc.imgSlide.length - 1) {
			pc.item = 0;
		} else {
			pc.item++;
		}
		mc.movimientoSlide(pc.item);
	},
	movimientoSlide: function(item) {
		pc.formatearLoop = true;

		if (pc.item == 0) {
			pc.cajaSlide.style.transition = "none";
		}else{
			pc.cajaSlide.style.transition = ".9s left ease-in-out";
		}
		pc.cajaSlide.style.left = item * -100 + "%";
		
	},
	intervalo: function() {
		setInterval(function() {
			if (pc.formatearLoop) {
				pc.formatearLoop = false;
			} else {
				mc.avanzar();
			}
		}, pc.velocidadSlide)
	}
}
mc.inicioSlide();