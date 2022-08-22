$(document).ready(function() {

    //Global variables
    
    var currentQuestion;
    var secondsLeft = 10;
    var score = 0;
    var highestScore = 1;
    var interval;
    
    //Functions

    function generateRandomNumber() {
        return Math.ceil(Math.random() * 50);
    };

    function generateMathQuestion() {
        var numA = generateRandomNumber();
        var numB = generateRandomNumber();
        var question = {};

        question.problem = String(numA) + ' + ' + String(numB);
        question.answer = numA + numB;

        return question;
    };

    function checkAnswer(userAnswer, correctAnswer) {
        if(userAnswer == correctAnswer) {
            updateQuestion();
            emptyInput();
            updateScore();
            getSecondsLeft(1);
        } else {

        }
    };

    function updateQuestion() {
        currentQuestion = generateMathQuestion();
        $('.problem').text(currentQuestion.problem);
    };

    function emptyInput() {
        $('input').val('');
    };

    function updateScore() {
        score += 1;
        $('.score span').text(score);
    };

    function getSecondsLeft(amount) {
        if(secondsLeft < 10) { // <10 so in the beginning it will not add 1Sec. to the 10 so it will not become 11.
            secondsLeft += amount;
            $('.time span').text(secondsLeft);
        }
    };

    function updateHighestScore() {
        if(score > highestScore) {
            highestScore = score;
            $('.highest-score span').text(score);
        } else {
            $('.highest-score span').text(highestScore);
        }
    }

    function startGame() {
        if(!interval) {

            if(secondsLeft == 0) {
                getSecondsLeft(10);
                score = 0;
            };

            interval = setInterval(function getSecondsLeft() {
                console.log("interval: " + interval);
                secondsLeft--;
                $('.time span').text(secondsLeft);
        
                if (secondsLeft === 0) {
                    clearInterval(interval);
                    updateHighestScore();
                    interval = undefined;
                };
                
            }, 1000);
        }
    };

    //Events

    $('form input').on('keyup', function() {
        startGame();
        checkAnswer(Number($(this).val()), currentQuestion.answer);
    });

    updateQuestion();
});