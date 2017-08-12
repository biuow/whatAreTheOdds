var jogaCartas = function() {

    //Define as cartas
    var card1 = Math.trunc(Math.random() * 13);
    var card2 = Math.trunc(Math.random() * 13);

    //Define as imagens

    if (card1 >= 10)
        card1 = 10;
    if (card2 >= 10)
        card2 = 10;

    while (card1 + card2 + 10 == 21) {
        card1 = Math.random() * 13;
        card2 = Math.random() * 13;

        //Define as imagens

        if (card1 >= 10)
            card1 = 10;
        if (card2 >= 10)
            card2 = 10;
    }

    //Calcula a chance
    var falta = 21 - (card1 + card2);
    var faltaBar = 0;

    if (falta > card1)
        faltaBar++;
    if (falta > card2)
        faltaBar++;

    var chance = (falta * 4) - faltaBar;

    chance = chance / 52 * 100;

    if (chance > 100)
        chance = 100;

    document.getElementById("idText").text = Math.trunc(chance) + "%";
}

var jogaDados1 = function() {

    //Define as cartas
    var dice1 = Math.trunc(Math.random() * 6);

    //Define as imagens

    chance = 1 / 6;

    document.getElementById("idText").text = Math.trunc(chance) + "%";
}

var jogaDados2 = function() {

    //Define as cartas
    var dice1 = Math.trunc(Math.random() * 6);

    //Define as imagens

    //Calcula a chance
    var falta = 7 - (dice1);

    var chance = falta / 6 * 100;

    if (chance > 100)
        chance = 100;

    document.getElementById("idText").text = Math.trunc(chance) + "%";
}