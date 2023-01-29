// reached into the html and grabbed a bunch of elements

var section = document.getElementById("quiz")
var choiceEl = document.querySelectorAll(".choice")
var questionEl = document.querySelector("#question")
var btn = document.querySelector("#button")
var AChoice = document.getElementById("first-choice")
var BChoice = document.getElementById("second-choice")
var CChoice = document.getElementById("third-choice")
var currentQuiz = 0
var score = 0
var timer;
var timerCount = 15
var timerElement = document.querySelector(".timer");
var startBtn = document.querySelector(".start-btn")


// defined a list of questions
var quizText = [
    {
        question: "which of the folllowing can not be used to identify a variable in JavaScript",
        A: "let",
        B: "const",
        C: "give",
        choice: "c",
    },
    {
        question: "Which of the following is a strict comparison",
        A: "<",
        B: "==",
        C: "===",
        choice: "c",
    },
    {
        question: "which of the folllowing is used to describe a Paragraph in HTML",
        A: "<paragraph>",
        B: "<p>",
        C: "<article>",
        choice: "b",
    },


]




// keep track of the current question with current quiz


loadquiz()

function loadquiz() {
    console.log("1")

    // clear old question
    deselectanswer()

    // get the data for the current question
    const currentQuizData = quizText[currentQuiz]
    console.log(questionEl)
    console.dir(questionEl)
    questionEl.innerText = currentQuizData.question;
    // put the answers from the question in the anser choic
    AChoice.innerText = currentQuizData.A
    BChoice.innerText = currentQuizData.B
    CChoice.innerText = currentQuizData.C

}

function deselectanswer() {
    console.log("2")
    // loop over my radio button and set the value to false
    choiceEl.forEach(choice => choice.checked = false)
}

function getselected() {
    console.log("3")
    // grab the radio button labels
    choiceEl.forEach(choice => {
        console.log(choice);
        console.dir(choice);
        // if the label you have has a prop called checked that is true
        if (choice.checked) {
            // assign the id of that label to answer
            answer = choice.id
        }
    })
    // send it back to the function that called for it
    return answer
}

btn.addEventListener("click", () => {
    // find out which button was selected
    const answer = getselected()
    // if the answer was selected
    if (answer) {
        console.log(answer.toLowerCase())
        console.log(quizText[currentQuiz].choice.toLowerCase())// if the answer matches the current quiz
        if (answer.toLowerCase() == quizText[currentQuiz].choice.toLowerCase()) {
            score++ // infcrement the score
        }

        currentQuiz++

        // check to see if you're done w/ the quiz
        if (currentQuiz < quizText.length) {
            // if not loadquiz
            loadquiz()
        } else {
            section.innerHTML = "Correct Answers:  " + score;
            clearInterval(timer);
            setTimeout(highScore, 1000);
            
        }
    }
})

//start timer
function startTimer() {
    //
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
       
        }
        // Tests if time has run out
        if (timerCount == 0) {
            clearInterval(timer);
            loseGame();
        }

    }, 1000);

}
function loseGame() {
    section.textContent = "GAME OVER";
  }
//log high score
function highScore() {
  var logHighScore =  prompt("Well done ", "enter name here")
  //store value of prompt 
    if(logHighScore != null){
        timerElement.innerHTML =
        "well done " + logHighScore + "!";
    }
}




  
