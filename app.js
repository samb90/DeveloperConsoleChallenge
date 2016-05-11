var LINE_BREAK = "*******************************************************",
    currentQuestion = -1,
    challengeStarted = false,
    questions,
    challenge;

questions = [
    {
        "question": "",
        "answer": ""
    }
];

challenge = {
    begin: function () {
        startChallenge();
    },
    answer: function (answer) {
        if (validateAnswerInput(answer)){
            error();
        }else{
            if (isAnswerCorrect(answer)){
                correctAnswer();
            }else{
                wrongAnswer();
            }
        }
    }
};

function startChallenge() {
    outputToConsole(LINE_BREAK);
    outputToConsole("Challenge Starts");
    if (isNextQuestion() && challengeStarted === false) {
        challengeStarted = true;
        getNextQuestion();
    }
}

function challengeCompleted() {
    outputToConsole(LINE_BREAK);
    outputToConsole("Challenge Completed");
}

function validateAnswerInput(answer) {
    return answer && answer.length < 1;
}

function isAnswerCorrect(answer) {
    return answer.toString() === questions[currentQuestion].answer;
}

function correctAnswer() {
    outputToConsole(LINE_BREAK);
    outputToConsole("Correct answer");
    outputToConsole("Next Question...");
    if (isNextQuestion()) {
        getNextQuestion();
    }else{
        challengeCompleted();
    }
}

function wrongAnswer() {
    outputToConsole(LINE_BREAK);
    outputToConsole("Wrong answer, try again");
}

function error() {
    outputToConsole(LINE_BREAK);
    outputToConsole("You must pass your answer into the function");
}

function outputToConsole(stringToOutput) {
    if (stringToOutput.length > 0) {
        console.log(stringToOutput);
    }
}

function getNextQuestion() {
    currentQuestion++;
    outputToConsole(questions[currentQuestion].question);
}

function isNextQuestion() {
    return (currentQuestion + 1) < questions.length;
}

function init() {

    outputToConsole("######################################################");
    outputToConsole("_  _  _ _______        _______  _____  _______ _______");
    outputToConsole("|  |  | |______ |      |       |     | |  |  | |______");
    outputToConsole("|__|__| |______ |_____ |_____  |_____| |  |  | |______");

    outputToConsole("___ ____    ___ _  _ ____");
    outputToConsole("|  |  |     |  |__| |___");
    outputToConsole("|  |__|     |  |  | |___");

    outputToConsole("___  ____ _  _ ____ _    ____ ___  ____ ____");
    outputToConsole("|  \\ |___ |  | |___ |    |  | |__] |___ |__/");
    outputToConsole("|__/ |___  \\/  |___ |___ |__| |    |___ |  \\");

    outputToConsole("____ _  _ ____ _    _    ____ _  _ ____ ____");
    outputToConsole("|    |__| |__| |    |    |___ |\\ | | __ |___");
    outputToConsole("|___ |  | |  | |___ |___ |___ | \\| |__] |___ ");

    outputToConsole("######################################################");

    outputToConsole("To play you just have to answer the questions");
    outputToConsole("To submit an answer call challenge.answer('') with a string");
    outputToConsole("When you are ready to begin call challenge.begin()");
}

init();