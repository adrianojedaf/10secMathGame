$(document).ready(function() {

    var currentQuestion;
    
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

    //Events

    $('form input').on('keyup', function() {
        checkAnswer(Number($(this).val()), currentQuestion.answer);
    });


    //Game Sequence
    
    updateQuestion();

    



});