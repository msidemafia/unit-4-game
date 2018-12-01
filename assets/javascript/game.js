$(document).ready(function() {
var computerChoice = Math.floor((Math.random() * 101) + 19);
console.log(computerChoice);


var totalScore = 0;
var wins = 0;
var losses = 0;

initialize();

function initialize() {;
    totalScore = 0;
    // buttonOne.attr('data-value', (Math.floor(Math.random() * 12) + 1));
    // buttonTwo.attr('data-value', (Math.floor(Math.random() * 12) + 1));
    // buttonThree.attr('data-value', (Math.floor(Math.random() * 12) + 1));
    // buttonFour.attr('data-value', (Math.floor(Math.random() * 12) + 1));
    computerChoice = Math.floor((Math.random() * 101) + 19);
    $('#totalScoreBox2').html(totalScore);
    $("#randomNumberBox").html(computerChoice);
    $('#winLossBox').html("Wins: " + wins + "<br>" + "Losses: " + losses)

    
}

    var $imgOne = $('<img>', {
        src: 'assets/images/crystal-one.jpg',
        class: 'buttonImg',
    });
    var $imgTwo = $('<img>', {
        src: 'assets/images/crystal-two.png',
        class: 'buttonImg',
    });
    var $imgThree = $('<img>', {
        src: 'assets/images/crystal-three.png',
        class: 'buttonImg',
    });
    var $imgFour = $('<img>', {
        src: 'assets/images/crystal-four.jpg',
        class: 'buttonImg',
    });

    var buttonOne = $('<div>').append($imgOne).attr('data-value', (Math.floor(Math.random() * 12) + 1));
    var buttonTwo = $('<div>').append($imgTwo).attr('data-value', (Math.floor(Math.random() * 12) + 1));
    var buttonThree = $('<div>').append($imgThree).attr('data-value', (Math.floor(Math.random() * 12) + 1));
    var buttonFour = $('<div>').append($imgFour).attr('data-value', (Math.floor(Math.random() * 12) + 1));
 
    $('#crystalBox').append(buttonOne, buttonTwo, buttonThree, buttonFour)

    function score(buttonObject) {
        totalScore += parseInt($(buttonObject).attr('data-value'));
        $('#totalScoreBox').html(totalScore);

        if (totalScore == computerChoice) {
            var youWin = alert ("You Win!");
            alert ("Bet you can't do that again");
            wins++;
            initialize();         
        }
        else if (totalScore > computerChoice) {
            alert ("You Lose!");
            alert ("Try Again. Or don't. I don't care.");
            losses++;
            initialize();
        }
    }

    buttonOne.click(function() {
        score(this);
        console.log(totalScore);
        console.log($(this).attr('data-value')); 
    });
    buttonTwo.click(function() {
        score(this);
        console.log(totalScore);
        console.log($(this).attr('data-value'));
    });
    buttonThree.click(function() {
        score(this);
        console.log(totalScore);
        console.log($(this).attr('data-value'));
    });
    buttonFour.click(function() {
        score(this);
        console.log(totalScore);
        console.log($(this).attr('data-value'));
    });
});

