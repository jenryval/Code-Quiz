// questions/answers to use

var questions = [{
        title: "Who is the best Agent to play in Valorant if you want to block vision?",
        choices: ["Omen()", "Jet()", "Viper()", "Sage()"],
        answer: "Omen()"
    },
    { 
        title: "When in a 2V1 what is the best thing to do?",
        choices: ["push by yourself()", "hide()", "peak together()", "start making as much noise to attract opponenet()"],
        answer: "peak together()"
    },
    {
        title: "Best Fragger in Valorant?",
        choices: [ "crypticJA()", "Sinatra()", "wardell()", "Asuna()"],
        answer: "Asuna()"
    },
    {
        title: "Best fragging Agent?",
        choices: ["Jett()", "Reyna()", "Phoenix()", "Sova()"],
        answer: "Reyna()"

    },
    {
        title: "Worst MAP MADE EVER",
        choices: ["Icebox()", "Haven()", "Split()", "Ascent()"],
        answer: "Icebox()"
    }

]
//  variables for scores and times
var score = 0;
var timeLeft = 0;
var currentQuestion = 0;
var timer;

// button for start button 
function start() {

    timeLeft = 100;
    document.getElementById("time").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("time").innerHTML = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame(); 
        }
    }, 1000);

    next();
}
// game end 
function endGame() {
    clearInterval(timer);

    var quizContent = `
    <h2>Game over!</h2>
    <h3>You got a ` + score +  ` /20!</h3>
    <h3>That means you got ` + score / 20 +  ` questions correct!</h3>
    <input type="text" id="name" placeholder="name"> 
    <button onclick="setScore()">Set score!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName",  document.getElementById('name').value);
    getScore();
    
}

function getScore() {
    var quizContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br> 
    
    <button onclick="clearScore()">Clear Score!</button><button onclick="resetGame()">Play Again!</button>
    
    `;

    document.getElementById("quizBody").innerHTML = quizContent;
    playagain()
}

function playAgain(){
    start()
 }

function correct() {
    score += 20;
    next();
}

function incorrect() {
    timeLeft -= 15; 
    next();
}

function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName",  "");

    resetGame();
}
function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;

    document.getElementById("time").innerHTML = timeLeft;

    var quizContent =
    

    document.getElementById("quizBody").innerHTML = quizContent;
}


function correct() {
    score += 5;
    next();
}

//loops through the questions 
function next() {
    currentQuestion++;

    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }

    var quizContent = "<h2>" + questions[currentQuestion].title + "</h2>"

    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonCode
    }


    document.getElementById("quizBody").innerHTML = quizContent;
}

