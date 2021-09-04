function scrollAppear(){
	var introText = document.querySelector('.intro-text');
	var introPosition = introText.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 1.4;
	if(introPosition < screenPosition){
		introText.classList.add('intro-appear');
	}
}

function scrollAppear2(){
	var introText2 = document.querySelector('.intro-text2');
	var introPosition2 = introText2.getBoundingClientRect().top;
	var screenPosition2 = window.innerHeight /1.4;
	if(introPosition2 < screenPosition2){
		introText2.classList.add('intro-appear');
	}
}

function scrollAppear3(){
	var introText3 = document.querySelector('.intro-text3');
	var introPosition3 = introText3.getBoundingClientRect().top;
	var screenPosition3 = window.innerHeight /1.4;
	if(introPosition3 < screenPosition3){
		introText3.classList.add('intro-appear');
	}
}

function scrollAppear4(){
	var introText4 = document.querySelector('.intro-text4');
	var introPosition4 = introText4.getBoundingClientRect().top;
	var screenPosition4 = window.innerHeight /1.4;
	if(introPosition4 < screenPosition4){
		introText4.classList.add('intro-appear');
	}
}

function scrollAppear5(){
	var introText5 = document.querySelector('.intro-text5');
	var introPosition5 = introText5.getBoundingClientRect().top;
	var screenPosition5 = window.innerHeight /1.4;
	if(introPosition5 < screenPosition5){
		introText5.classList.add('intro-appear');
	}
}

window.addEventListener('scroll', scrollAppear);
window.addEventListener('scroll', scrollAppear2);
window.addEventListener('scroll', scrollAppear3);
window.addEventListener('scroll', scrollAppear4);
window.addEventListener('scroll', scrollAppear5);