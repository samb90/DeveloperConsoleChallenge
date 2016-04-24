var currentQuestion;

var questions = [
    {
        "question": "What is 1 + 2?",
        "answer": "3"
    },
    {
        "question": "What is 5 + 8?",
        "answer": "13"
    }
];

var challenge = {
    begin: function () {
        startChallenge();
    },
    answer: function (answer) {
        if (isThereAnErrorWithSubmission(answer)){
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
    outputToConsole("*******************************************************");
    outputToConsole("Challenge Starts");
    if ((currentQuestion + 1) < questions.length) {
        getNextQuestion();
    }else{
        challengeCompleted();
    }
}

function challengeCompleted() {
    outputToConsole("*******************************************************");
    outputToConsole("Challenge Completed");
}

function isThereAnErrorWithSubmission(answer) {
    return answer && answer.length < 1;
}

function isAnswerCorrect(answer) {
    return answer.toString() === questions[currentQuestion].answer;
}

function correctAnswer() {
    outputToConsole("*******************************************************");
    outputToConsole("Correct answer");
    outputToConsole("Next Question");
    currentQuestion++;
    getNextQuestion();
}

function wrongAnswer() {
    outputToConsole("*******************************************************");
    outputToConsole("Wrong answer, try again");
}

function error() {
    outputToConsole("*******************************************************");
    outputToConsole("You must pass your answer into the function");
}

function outputToConsole(stringToOutput) {
    if (stringToOutput.length > 0) {
        console.log(stringToOutput);
    }
}

function getNextQuestion() {
    outputToConsole(questions[currentQuestion].question);
}

function init() {
    currentQuestion = 0;

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