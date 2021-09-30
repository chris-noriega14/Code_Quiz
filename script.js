var instructions = document.querySelector("#container")
var QuizTitle = document.querySelector("#title");
var QuizStart = document.querySelector("#beginQuiz");
var timerElement = document.querySelector("#timerStart");
var highscore = [];
var chosenQuestion = "";
var timerCount;
var QuizDone = false;
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

//Current Code
QuizStart.addEventListener('click',function startQuiz() {
    timerCount = 20;
    QuizStart.disabled = true;
    getQuestion()
    startTimer()
    timerElement.textContent = "Timer: " + timerCount;
});

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

function getQuestion() {
    QuizTitle.textContent = Questions[0].question;
    console.log();
};

function displayScore() {
   instructions.textContent = "Your final score is: 25";
};

