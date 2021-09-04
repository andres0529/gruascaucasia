/*=============================================
Objeto con propiedades
=============================================*/

var pg ={

	imgGaleria: document.querySelectorAll("#galeria ul li img"),
	rutaImagen: null,
	cuerpoDom: document.querySelector("body"),
	modal:document.querySelector(".modal"),
	modalBg: document.querySelector(".modal-bg")
}


/*=============================================
Objeto con Metodos
=============================================*/
var mg ={

	incioGaleria: function(){

		for (var i = 0; i < pg.imgGaleria.length; i++) {
			pg.imgGaleria[i].addEventListener("click", mg.capturaImagen)
		}
	},

	capturaImagen: function(img){
		pg.rutaImagen = img.target;
		mg.lightBox(pg.rutaImagen); //Invoco al metodo LightBox

	}, 	

	lightBox: function(img){
		pg.modal.innerHTML = img.outerHTML; //Con esto creao la etiqueta IMG dentro del div que tiene pg.modal 

		if(window.matchMedia("(max-width:1000px)").matches){
			pg.modal.childNodes[0].style.width ="90%"; //Despues de creada la etiqueta IMG ya le puedo dar estilo
		}else{
			pg.modal.childNodes[0].style.width ="60%";
		}

		pg.modal.childNodes[0].style.borderTopLeftRadius = 30+"px";
		pg.modal.childNodes[0].style.borderTopRightRadius = 30+"px";

		pg.modal.appendChild(document.createElement("SPAM")).setAttribute("class","modal-close"); //Creo un hijo de etiqueta SPAM en el div que tiene modal
		pg.modal.childNodes[1].innerText = "Cerrar"; //Estando parado desde el div modal le agrego un texto X al hijo SPAM
		pg.modal.childNodes[1].style.width = pg.modal.childNodes[0].style.width //Le asigno al spam el mismo width que tiene la imagen a mostar

		pg.modalBg.classList.add('bg-active'); //Cambio a la otra clase con la que puedo mostrar la foto

		pg.modal.childNodes[1].addEventListener("click", function(){ //Cuando haga click en el SPAM remueve la clase que tiene el css que deja ver la imagen agrandada
			pg.modalBg.classList.remove("bg-active");
		})
	}
}

mg.incioGaleria();