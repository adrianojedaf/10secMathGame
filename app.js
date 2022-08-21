$(document).ready(function() {

    //Global variables
    
    var currentQuestion;
    var score = 0;
    var highestScore = 1;
    
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
        } else {

        }
    };

    function updateQuestion() {
        currentQuestion = generateMathQuestion();
        $('.problem').text(currentQuestion.problem);
    };

    function emptyInput() {
        $('input').val('');
    }

    function updateScore() {
        score += 1;
        $('.score span').text(score);
    }

    //Events

    $('form input').on('keyup', function() {
        checkAnswer(Number($(this).val()), currentQuestion.answer);
    });


    //Game Sequence

    updateQuestion();

    



});