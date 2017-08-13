var stage = 1;
var score = 0;
var stagechance = 0;

window.onload = function() {
    jogaDados1();
}

var jogaCartas = function() {

    document.getElementById("question").innerText = "Qual a chance da próxima carta não passar de 21?"

    //Define as cartas
    var card1 = Math.trunc(1+Math.random() * 12.99);
    var card2 = Math.trunc(1+Math.random() * 12.99);

    //Define as imagens
    if (Math.random() * 2) {
        var naipe = "_espadas"
    } else {
        var naipe = "_copas"
    }

    document.getElementById("gameItem").src = "img/" + card1 + naipe + ".png"

    if (Math.random() * 2) {
        var naipe = "_espadas"
    } else {
        var naipe = "_copas"
    }

    document.getElementById("gameItem2").src = "img/" + card2 + naipe + ".png"

    if (card1 >= 10)
        card1 = 10;
    if (card2 >= 10)
        card2 = 10;

    while (card1 + card2 + 10 == 21) {
        card1 = Math.trunc(1+Math.random() * 12.99);
        card2 = Math.trunc(1+Math.random() * 12.99);

        //Define as imagens
        if (Math.random() * 2) {
            var naipe = "_espadas"
        } else {
            var naipe = "_copas"
        }
        
        document.getElementById("gameItem").src = "img/" + card1 + naipe + ".png"

        if (Math.random() * 2) {
            var naipe = "_espadas"
        } else {
            var naipe = "_copas"
        }
        document.getElementById("gameItem2").src = "img/" + card2 + naipe + ".png"

        if (card1 >= 10)
            card1 = 10;
        if (card2 >= 10)
            card2 = 10;
    }

    //Calcula a chance

    var falta = 21 - (card1 + card2);
    var chance = 0 ;

    if(falta > 10)
        chance = 100;
    else{

        var faltaBar = 0;

        if (falta > card1)
            faltaBar++;
        if (falta > card2)
            faltaBar++;

        chance = (falta * 4) - faltaBar;

        chance = chance / 50 * 100;

        if (chance > 100)
            chance = 100;


    }
    

    stagechance = Math.trunc(chance);
}

function jogaDados1() {

    document.getElementById("question").innerText = "Qual a chance da soma dos dados ser 7?"

    //Define as cartas
    var dice1 = Math.trunc(1+Math.random() * 5.99);

    //Define as imagens
    document.getElementById("gameItem").src = "img/dice-" + dice1 + ".png"

    chance = 1 / 6 * 100;

    stagechance = Math.trunc(chance);
}

var jogaDados2 = function() {

    document.getElementById("question").innerText = "Qual a chance da soma dos dados ser maior ou igual 7?"

    //Define as cartas
    var dice1 = Math.trunc(1+Math.random() * 5.99);

    //Define as imagens
    document.getElementById("gameItem").src = "img/dice-" + dice1 + ".png"

    //Calcula a chance
    var falta = 7 - (dice1);

    var chance = (7-falta) / 6 * 100;

    if (chance > 100)
        chance = 100;

    stagechance = Math.trunc(chance);

}

function validaResult() {

    var result = 0;
    var correct = false;

    if (document.getElementById('test1').checked) {
        var result = 1;
    } else if (document.getElementById('test2').checked) {
        var result = 2;
    } else if (document.getElementById('test3').checked) {
        var result = 3;
    } else if (document.getElementById('test4').checked) {
        var result = 4;
    }

    if (stagechance < 25 && result == 1)
        correct = true;
    if (stagechance >= 25 && stagechance < 50 && result == 2)
        correct = true;
    if (stagechance >= 50 && stagechance < 75 && result == 3)
        correct = true;
    if (stagechance >= 75 && stagechance <= 100 && result == 4)
        correct = true;

    if (correct){
        alert("Parabéns, você acertou! A chance é de " + stagechance + ".");
        score++;
    }
    else{
        alert("Você errou. O chance correta é " + stagechance + ".");
    }

    stage++;
    if (stage == 2) {
        jogaDados2();
    } else if (stage >= 3 && stage <= 5) {
        jogaCartas();
    } else {
        alert("Você acertou "+score+"! Obrigado por jogar! Por favor responda nosso questionário.");
        window.location.replace("https://goo.gl/forms/VaT1byaCVI6lbcfA2");
    }
}