const startButton = document.getElementById("start-button");
var actualQuestion = document.querySelector(".actual-question");
var timer = document.getElementById("timer");
var nextButton = document.querySelector(".next-button");
var answerChoices = document.querySelector(".answer-choices");
var basicOutline = document.querySelector(".basic-outline");
var success = document.querySelector("#sucess");
var sec = 999;
var gameOver = document.getElementById("game-over");

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);
var counter = 0

// the fuction startGame does exactly that. As soon as someone clicks start game, the first question and answer choices will appear.Since arrays start at 0, the varible counter is 0. Counter++ is the code responsible for cycling through questions. The first function also starts the timer when an answer choice is clicked. 

function startGame() {
    actualQuestion.textContent=questionsAndAnswers [counter].question
    displayChoices()
    counter++
    startTimer()
    }

function nextQuestion() {
    actualQuestion.textContent=questionsAndAnswers [counter].question
    displayChoices()
    counter++
     }

// The function below allows the user to click on answer choices 
function displayChoices(){
    answerChoices.innerHTML=""
    for (let i = 0; i < 4; i++) {
        var button = document.createElement("button")
        button.textContent=questionsAndAnswers[counter].answers[i].Text
        button.value=questionsAndAnswers[counter].answers[i].correct

        button.addEventListener("click", choiceClick)
        answerChoices.appendChild(button)
        
        
    }
}
 

// The arrays below contain the questions to the quiz along with the answer choices
var questionsAndAnswers = [
   {
    number: 1,
    question: "What does CSS stand for?" , 
    answers:[
        {Text:"Cascading Style Sheet", correct:true },
        {Text: "Cascading Sheet Style", correct:false},
        {Text:"Cassette Save Sanctify", correct : false},
        {Text:"Cat Sort Style", correct : false}  
    ]
    
    },   

    {
        number: 2,
        question: " What does HTML stand for?" , 
        answers: [
            {Text:"Hypertext Markup Language", correct : true},
            {Text:"Hotdogs Tamales McDonald's Llamas", correct : false},
            {Text:"Hot Tables Move Left", correct : false},
            {Text:"Hypertext Markdown Language ", correct : false}
        ]
    },

        {
            number: 3,
            question: "What is CSS refered to as?" , 
            answers: [
                {Text:"CSS is the look and feel of the website", correct : true},
                {Text:"CSS is the structure of the webpage", correct : false},
                {Text:"CSS makes the site functional", correct : false},
                {Text:"CSS is a food ", correct : false}
            ]
            },   

            {
                number: 4,
                question: "What does HTML do for a website?" , 
                answers: [
                    {Text:"HTML is the structe of the website", correct : true},
                    {Text:"HTML is the design of a site", correct : false},
                    {Text:"HTML is a food dish", correct : false},
                    {Text:"HTML is unstructured", correct : false}
                ]
                },    
]


// The functions below is responsible for the timer and the button that displays if the player got the right (sucess) or wrong answer. 10 seconds are subtracted from their timer with every incorrect response 
function startTimer(duration, display) {
    var clock = setInterval(function(){
    sec--;
    timer.textContent=sec; 
    },1000)
}


function choiceClick(event) {
if(event.target.value=='true'){
success.innerHTML='<button type="button" class="btn btn-success">Success</button>'
}
else{
    sec-=10
success.innerHTML = '<button type="button" class="btn btn-danger">Wrong</button>'
}
}
function highScoreBoard(){
    // in put and button
    }