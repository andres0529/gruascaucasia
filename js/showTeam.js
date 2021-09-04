var modalBtn2 = document.querySelector(".boton2 button");
var modalBg2 = document.querySelector(".modal-bg2");
var modalClose3 = document.querySelector(".modal-close3")

modalBtn2.addEventListener("click", function(){
	modalBg2.classList.add("bg-active")
});

modalClose3.addEventListener("click", function(){
	modalBg2.classList.remove("bg-active")
});
