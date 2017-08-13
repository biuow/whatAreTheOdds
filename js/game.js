var stage = 1;
var stagechance = 0;


var jogaCartas = function(){

	document.getElementById("question").text = ""

	//Define as cartas
	var card1 = Math.trunc(Math.random()*13);
	var card2 = Math.trunc(Math.random()*13);

	//Define as imagens
	if(Math.random()*2){
		var naipe = "_espadas"
	}else{
		var naipe = "_copas"
	}

	document.getElementById("gameItem").src = "img/"+card1+naipe+".png"

	document.getElementById("gameItem2").src = "img/"+card2+naipe+".png"

	if(card1 >= 10)
		card1 = 10;
	if(card2 >= 10)
		card2 = 10;

	while(card1+card2+10 == 21){
		card1 = Math.random()*13;
		card2 = Math.random()*13;

		//Define as imagens

		if(card1 >= 10)
			card1 = 10;
		if(card2 >= 10)
			card2 = 10;
	}

	//Calcula a chance
	var falta = 21 - (card1+card2);
	var faltaBar = 0;

	if(falta > card1)
		faltaBar++;
	if(falta > card2)
		faltaBar++;

	var chance = (falta*4) - faltaBar;

	chance = chance/52*100;

	if(chance>100)
		chance = 100;

	stagechance = Math.trunc(chance);
	//document.getElementById("idText").text = Math.trunc(chance) + "%";
}

var jogaDados1 = function(){

	document.getElementById("question").text = ""

	//Define as cartas
	var dice1 = Math.trunc(Math.random()*6);

	//Define as imagens
	document.getElementById("gameItem").src = "img/dice-"+dice1+".png"

	chance = 1/6;

	stagechance = Math.trunc(chance);
	//document.getElementById("idText").text = Math.trunc(chance) + "%";
}

var jogaDados2 = function(){

	document.getElementById("question").text = ""

	//Define as cartas
	var dice1 = Math.trunc(Math.random()*6);

	//Define as imagens
	document.getElementById("gameItem").src = "img/dice-"+dice1+".png"

	//Calcula a chance
	var falta = 7 - (dice1);

	var chance = falta/6*100;

	if(chance>100)
		chance = 100;

	stagechance = Math.trunc(chance);
	//document.getElementById("idText").text = Math.trunc(chance) + "%";
}