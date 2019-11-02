var counter = 0; 
var wins = 0;
var losses = 0; 
var targetNumber = Math.floor(Math.random() * 500);
var winsElem = document.getElementsByClassName("winsCounter");
var lossesElem = document.getElementsByClassName("lossesCounter");

$("#number-to-guess").text(targetNumber);
console.log(targetNumber);


var img1Value = Math.floor(Math.random() * 120);

var img2Value = Math.floor(Math.random() * 120);

var img3Value = Math.floor(Math.random() * 120);

var img4Value = Math.floor(Math.random() * 120);

$(".dragon-image-1").on("click", function() {
    counter += img1Value;

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
    counter += img2Value;

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
    counter += img3Value;

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
    counter += img4Value;

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
