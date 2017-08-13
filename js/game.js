var stage = 1;
var stagechance = 0;

(function(){
	jogaDados1();
})()

var jogaCartas = function(){

	document.getElementById("question").text = "Qual a chance da próxima carta passar de 21?"

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

	document.getElementById("question").text = "Qual a chance da soma dos dados ser 7?"

	//Define as cartas
	var dice1 = Math.trunc(Math.random()*6);

	//Define as imagens
	document.getElementById("gameItem").src = "img/dice-"+dice1+".png"

	chance = 1/6;

	stagechance = Math.trunc(chance);
	//document.getElementById("idText").text = Math.trunc(chance) + "%";
}

var jogaDados2 = function(){

	document.getElementById("question").text = "Qual a chance da soma dos dados ser maior que 7?"

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

var validaResult = function(){

	var result = 0;
	var correct = false;

		  if(document.getElementById('test1').checked){
		var result = 1;
	}else if(document.getElementById('test2').checked){
		var result = 2;
	}else if(document.getElementById('test3').checked){
		var result = 3;
	}else if(document.getElementById('test4').checked){
		var result = 4;
	}
	
	if(stagechance < 25 && result == 1)
		correct = true;
	if(stagechance >= 25 && stagechance < 50 && result == 2)
		correct = true;
	if(stagechance >= 50 && stagechance < 75 && result == 3)
		correct = true;
	if(stagechance >= 75 && stagechance <= 100 && result == 4)
		correct = true;

	if(correct)
		document.getElementById('result').text = "Parabéns, você acertou! A chance é de "+ stagechance +".";
	else
		document.getElementById('result').text = "Você errou. O chance correta é "+ stagechance +".";

}