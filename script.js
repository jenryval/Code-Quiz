// questions/answers to use

var questions = [{
        title: "Who is the best Agent to play in Valorant if you want to block vision?",
        Choices: ["Omen()", "Jet()", "Viper()", "Sage()"],
        answer: "Omen()"
    },
    { 
        title: "When in a 2V1 what is the best thing to do?",
        Choices: ["push by yourself()", "hide()", "peak together()", "start making as much noise to attract opponenet()"],
        answer: "peak together()"
    },
    {
        title: "Best Fragger in Valorant?",
        Choices: ["Asuna()", "Sinatra()", "wardell()", "crypticJA()"],
        answer: "Asuna()"
    },
    {
        title: "Best fragging Agent?",
        Choices: ["Jett()", "Reyna()", "Phoenix()", "Sova()"],
        answer: "Reyna()"

    },
    {
        title: "Worst MAP MADE EVER",
        Choices: ["Icebox()", "Haven()", "Split()", "Ascent()"],
        answer: "Icebox()"
    }

]
//  variables for scores and times
var score = 0;
var timeLeft = 0;
var currentQuestion = 0;
var timer;

// button for start button 
function start(){
    timeleft= 100;
    $(document).getid("timeLeft").text("timeleft");

    timer = setInterval(function(){
        timerLeft--;
        $(document).getid("timeLeft").text("timeLeft");
        if(timeLeft < 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
        next()
    }
// game end 
function endGame() {
    clearInterval(timer);
}
