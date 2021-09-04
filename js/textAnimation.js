const text = document.querySelector('#galeryBackground header .bar2 .titlePage h3')
const strText = text.textContent;
const splitText = strText.split('')
text.textContent = "";

for (var i = 0; i <splitText.length; i++) {
	text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char=0;
let timer = setInterval(onTick, 200);

function onTick(){
	const span = text.querySelectorAll('span')[char];
	span.classList.add('fadeGalery');
	char++;
	if(char === splitText.length){
		complete();
		return;
	}
}

function complete(){
	clearInterval(timer);
	timer = null;
}