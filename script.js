var instructions = document.querySelector("#container")
var QuizTitle = document.querySelector("#title");
var QuizStart = document.querySelector("#beginQuiz");
var timerElement = document.querySelector("#timerStart");
var highscore = [];
var chosenQuestion = "";
var timerCount;
var userScore = 0;
var QuizDone = false;

//This section of code creates an array of questions, answers, and correct answers for the Quiz.
const Questions = [
    {
        question: "Which element is not considered a commonly used data type?",
        answers: {
            a: "Boolean",
            b: "String",
            c: "Prompt",
            d: "Integer"
        },
        correctAnswer: "c"
    },
    {
        question: "Which tool is considered the skeleton of the webpage?",
        answers: {
            a: "HTML",
            b: "CSS",
            c: "Javascript",
            d: "Bootstrap"
        },
        correctAnswer: "a"
    },
    {
        question: "An application used data from a software intermediary in order to check weather conditions. This is an example of using what?",
        answers: {
            a: "API",
            b: "HTML",
            c: "DOM",
            d: "CSS"
        },
        correctAnswer: "a"
    },
    {
        question: "Which assignment operator signifies equality in value and data type?",
        answers: {
            a: "!=",
            b: "===",
            c: "==",
            d: ">="
        },
        correctAnswer: "b"
    },
    {
        question: "Which option is not considered a type of popup box in Javascript?",
        answers: {
            a: "Alert box",
            b: "Confirm box",
            c: "Prompt box",
            d: "Denial box"
        },
        correctAnswer: "d"
    }
];

//This section of code starts the Quiz and Timer 
QuizStart.addEventListener('click',function startQuiz() {
    timerCount = 75;
    QuizStart.disabled = true;
    getQuestion()
    startTimer()
    timerElement.textContent = "Timer: " + timerCount;
});

//This is a function for the Quiz Timer
function startTimer () {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = "Timer: " + timerCount;
        if (timerCount >= 0) {
            if(QuizDone && timerCount > 0) {
                clearInterval(timer);
                displayScore();
            }
        }
            if (timerCount === 0) {
                clearInterval(timer);
                displayScore();
            }
    },1000);
       
};

//This function generates the 5 questions of the quiz
function getQuestion() {
    QuizTitle.textContent = Questions[0].question;
    QuizStart.textContent = null;
};

//This function displays your final score
function displayScore() {
   instructions.textContent = "Your final score is: " + userScore;
};