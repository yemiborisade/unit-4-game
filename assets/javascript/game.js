var counter = 0; 
var wins = 0;
var losses = 0; 
var targetNumber = 80; 
var winsElem = document.getElementsByClassName("winsCounter");
var lossesElem = document.getElementsByClassName("lossesCounter");

$("number-to-guess").text(targetNumber);

$(".dragon-image-1").on("click", function() {
    counter += 10;

    alert("Your new score is " + counter);

    if (counter === targetNumber) { 
        alert("You Win!"); 
        wins++; 
        $("#winsCounter").text(wins);
    }

    else if (counter >= targetNumber) { 
        alert("You Lose!"); 
        losses++;
        $("#lossesCounter").text(losses);
    }


});

$(".dragon-image-2").on("click", function() {
    counter += 8;

    alert("Your new score is " + counter);

    if (counter === targetNumber) { 
        alert("You Win!"); 
        wins++; 
        $("#winsCounter").text(wins);
    }

    else if (counter >= targetNumber) { 
        alert("You Lose!"); 
        losses++;
        $("#lossesCounter").text(losses);
    }
});

$(".dragon-image-3").on("click", function() {
    counter += 6;

    alert("Your new score is " + counter);

    if (counter === targetNumber) { 
        alert("You Win!"); 
        wins++; 
        $("#winsCounter").text(wins);
    }

    else if (counter >= targetNumber) { 
        alert("You Lose!"); 
        losses++;
        $("#lossesCounter").text(losses);
    }
});

$(".dragon-image-4").on("click", function() {
    counter += 4;

    alert("Your new score is " + counter);

    if (counter === targetNumber) { 
        alert("You Win!"); 
        wins++; 
        $("#winsCounter").text(wins);
    }

    else if (counter >= targetNumber) { 
        alert("You Lose!"); 
        losses++;
        $("#lossesCounter").text(losses);
    }
});

    winsElem.textContent = winsCounter;
    lossesElem.textContent = lossesCounter;
