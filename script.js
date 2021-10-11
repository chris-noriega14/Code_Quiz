var instructions = document.querySelector("#container")
var QuizTitle = document.querySelector("#title");
var QuizStart = document.querySelector("#beginQuiz");
var timerEl = document.querySelector("#timerStart");
var choicesEl = document.querySelector("#choices");
var Scores = [];
var chosenQuestion = "";
var questionIndex = 0;
var timerCount;
var responseStatus = document.createElement('div');
var QuizDone = false;
var questions = [
    {
        title: "Which element is not considered a commonly used data type?",
        choices: [
            "Boolean",
            "String",
            "Prompt",
            "Integer"
        ],
        answer: "Prompt"
    },
    {
        title: "Which tool is considered the skeleton of the webpage?",
        choices: [
            "HTML",
            "CSS",
            "Javascript",
            "Bootstrap"
        ],
        answer: "HTML"
    },
    {
        title: "An application used data from a software intermediary in order to check weather conditions. This is an example of using what?",
        choices: [
            "API",
            "HTML",
            "DOM",
            "CSS"
        ],
        answer: "API"
    },
    {
        title: "Which assignment operator signifies equality in value and data type?",
        choices: [
            "!=",
            "===",
            "==",
            ">="
        ],
        answer: "==="
    },
    {
        title: "Which option is not considered a type of popup box in Javascript?",
        choices: [
            "Alert box",
            "Confirm box",
            "Prompt box",
            "Denial box"
        ],
        answer: "Denial box"
    }
];

QuizStart.addEventListener('click',function startQuiz() {
    timerCount = 75;
    QuizStart.setAttribute("class","hide");
    getQuestion()
    startTimer()
    timerEl.textContent = "Timer: " + timerCount;
});

function startTimer () {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = "Timer: " + timerCount;
        if (timerCount > 0) {
            if(QuizDone && timerCount > 0) {
                clearInterval(timer);
                displayScore();
            }
        }
        if (timerCount <= 0) {
            quizEnd();
            displayScore();
        }  
    },1000);   
};

function getQuestion() {
    var currentQuestion = questions[questionIndex];
    var questionTitle = currentQuestion.title;
    QuizTitle.textContent = questionTitle;
    console.log();
    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach(function(choice, i) {
        var questionNode = document.createElement("button");
        questionNode.setAttribute("class", "choice");
        questionNode.setAttribute("value", choice);
        questionNode.textContent = choice;
        questionNode.onclick = checkAnswer;
        choicesEl.appendChild(questionNode);
    });
};

function checkAnswer() {
    instructions.appendChild(responseStatus);
    if (this.value !== questions[questionIndex].answer) {
        // penalize time
        responseStatus.textContent = "Wrong!";
        timerCount -= 15;
        if (timerCount < 0) {
         timerCount = 0;
        }
        timerEl.textContent = timerCount;
       } else {
        responseStatus.textContent = "Correct!";
        }
       // move to next question
      questionIndex++;
       // check if we've run out of questions
       if (questionIndex === questions.length) {
        quizEnd();
       } else {
        getQuestion();
       }
      }

function quizEnd() {
    clearInterval(timer);
    displayScore();
}

function displayScore() {
    var buttonSubmitArea = document.createElement("div");
    var buttonSubmit = document.createElement("button");
    var submitScore = document.createTextNode("Submit");
    var inputInitials = document.createElement("textarea");
    var requestInitials = document.createElement("p");
    var userInitials = document.createElement("p");
    var currentScore;
    
    
    instructions.setAttribute("style","white-space: pre;");
    instructions.textContent = "Quiz Complete!\r\n";
    instructions.textContent +="Your final score is:" + timerCount + "\r\n";
    requestInitials.textContent +="Enter Initials:";
    
    requestInitials.appendChild(userInitials);
    instructions.appendChild(requestInitials);
    instructions.appendChild(inputInitials);
    instructions.appendChild(buttonSubmitArea);
    buttonSubmit.appendChild(submitScore);
    buttonSubmitArea.appendChild(buttonSubmit);
    

    buttonSubmit.addEventListener("click",function() {
        currentScore = inputInitials.value + " - " + timerCount;
        Scores.push(currentScore);
        localStorage.setItem('Scores',JSON.stringify(currentScore));
        getHighscores();
    })
};

function getHighscores() {
    var highscoreListArea = document.createElement("div");
    var highscoreList = document.createTextNode(localStorage.getItem("Scores"));
    var goBackButtonArea = document.createElement("div");
    var goBackButton = document.createElement("button");
    var goBackButtonText = document.createTextNode("Go Back");
    var clearHighscoresArea = document.createElement("div");
    var clearHighscoresButton = document.createElement("button");
    var clearHighscoresText = document.createTextNode("Clear Highscores");
    instructions.textContent = "Highscores";

    goBackButton.addEventListener("click", function() {
        window.location.href="index.html";
    })

    clearHighscoresButton.addEventListener("click", function() {
        localStorage.clear("Scores");
        highscoreList.textContent = "";
    })

    instructions.appendChild(highscoreListArea);
    instructions.appendChild(goBackButtonArea);
    instructions.appendChild(clearHighscoresArea);
    highscoreListArea.appendChild(highscoreList);
    goBackButtonArea.appendChild(goBackButton);
    goBackButton.appendChild(goBackButtonText);
    clearHighscoresArea.appendChild(clearHighscoresButton);
    clearHighscoresButton.appendChild(clearHighscoresText);

}