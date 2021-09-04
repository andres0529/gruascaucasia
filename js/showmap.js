var modalBtn3 = document.querySelector(".boton3 button");
var modalBg3 = document.querySelector(".modal-bg");
var modalClose3 = document.querySelector(".modal-close2")

modalBtn3.addEventListener("click", function(){
	modalBg3.classList.add("bg-active")
});

modalClose3.addEventListener("click", function(){
	modalBg3.classList.remove("bg-active")
});
