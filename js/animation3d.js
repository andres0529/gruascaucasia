//Animación de movimiento a pasar
const contenedorInfo1 = document.querySelector(".contenedorInfo1");
const card1 = document.querySelector(".card1");

const contenedorInfo2 = document.querySelector(".contenedorInfo2");
const card2 = document.querySelector(".card2");

const contenedorInfo3 = document.querySelector(".contenedorInfo3");
const card3 = document.querySelector(".card3");

const title1 = document.querySelector(".title1");
const title2 = document.querySelector(".title2");
const title3 = document.querySelector(".title3");

const icono1 = document.querySelector(".icono1 img");
const icono2 = document.querySelector(".icono2 img");
const icono3 = document.querySelector(".icono3 img");

const boton1 = document.querySelector(".boton1 button");
const boton2 = document.querySelector(".boton2 button");
const boton3 = document.querySelector(".boton3 button");

const info1 = document.querySelector(".info1 h3");
const info2 = document.querySelector(".info2 h3");
const info3 = document.querySelector(".info3 h3");





// -------------------Evento de animación de movimiento ICONO #1 ------------------
contenedorInfo1.addEventListener('mousemove', (e) =>{
	let xAxis1 = ((window.innerWidth/2 - e.pageX*2)/20)-20;
	let yAxis1 = ((window.innerHeight/2 - e.pageY)/40)+20;
	card1.style.transform = `rotateY(${xAxis1}deg) rotateX(${yAxis1}deg)` ;
});


//animateIn
contenedorInfo1.addEventListener('mouseenter', (e)=>{
	card1.style.transition = 'none';
	//PopOut
	title1.style.transform = "translateZ(120px)";
	icono1.style.transform = "translateZ(180px) rotateZ(-15deg)";
	info1.style.transform = "translateZ(70px)";
	boton1.style.transform = "translateZ(70px)";

})

//animateOut
contenedorInfo1.addEventListener('mouseleave', (e) =>{
	card1.style.transition = 'all 0.5s ease';
	card1.style.transform = `rotateY(0deg) rotateX(0deg)`;
	//PopBack
	title1.style.transform = "translateZ(0px)";
	icono1.style.transform = "translateZ(0px) rotateZ(0deg)";
	info1.style.transform = "translateZ(0px)";
	boton1.style.transform = "translateZ(0px)";
});

// ---------------------------Evento de animación de movimiento ICONO #2-----------------
contenedorInfo2.addEventListener('mousemove', (e) =>{
	let xAxis2 = ((window.innerWidth/2 - e.pageX)/10);
	let yAxis2 = ((window.innerHeight/2 - e.pageY)/40)+20;
	card2.style.transform = `rotateY(${xAxis2}deg) rotateX(${yAxis2}deg)`;
});

//animateIn
contenedorInfo2.addEventListener('mouseenter', (e)=>{
	card2.style.transition = 'none';
	//PopOut
	title2.style.transform = "translateZ(120px)";
	icono2.style.transform = "translateZ(180px) rotateZ(-15deg)";
	info2.style.transform = "translateZ(70px)";
	boton2.style.transform = "translateZ(70px)";
})

//animateOut
contenedorInfo2.addEventListener('mouseleave', (e) =>{
	card2.style.transition = 'all 0.5s ease';
	card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
	//PopBack
	title2.style.transform = "translateZ(0px)";
	icono2.style.transform = "translateZ(0px) rotateZ(0deg)";
	info2.style.transform = "translateZ(0px)";
	boton2.style.transform = "translateZ(0px)";
});

// -------------------------------Evento de animación de movimiento ICONO #3------------------
contenedorInfo3.addEventListener('mousemove', (e) =>{
	let xAxis3 = ((window.innerWidth - e.pageX)/10)-30;
	let yAxis3 = ((window.innerHeight/2 - e.pageY)/40)+20;
	card3.style.transform = `rotateY(${xAxis3}deg) rotateX(${yAxis3}deg)`;
});

//animateIn
contenedorInfo3.addEventListener('mouseenter', (e)=>{
	card3.style.transition = 'none';
	//PopOut
	title3.style.transform = "translateZ(120px)";
	icono3.style.transform = "translateZ(180px) rotateZ(-15deg)";
	info3.style.transform = "translateZ(70px)";
	boton3.style.transform = "translateZ(70px)";
})

//animateOut
contenedorInfo3.addEventListener('mouseleave', (e) =>{
	card3.style.transition = 'all 0.5s ease';
	card3.style.transform = `rotateY(0deg) rotateX(0deg)`;
	//PopBack
	title3.style.transform = "translateZ(0px)";
	icono3.style.transform = "translateZ(0px) rotateZ(0deg)";
	info3.style.transform = "translateZ(0px)";
	boton3.style.transform = "translateZ(0px)";
});

