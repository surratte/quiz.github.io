var timeel = document.querySelector('.time')
var start = document.querySelector('.start-btn')

document.addEventListener('DOMContentLoaded', function () {
    start.addEventListener('click', start);
});

function start() {
    console.log('started')
   if(value === "start"){
       startel.classList.add("hide")
   }
}
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    functionshowQuestions(questions, quizContainer); {
        var questions = [
            {
                Question: "Commonly used data types DO NOT include:",
                choice1: "1. Strings",
                choice2: "2. booleans",
                choice3: "3. alerts",
                choice4: "4.numbers",
                answer: 3
            },
            {
                Question: "the condition in if/else statment is enclosed within ____.",
                choice1: "1. quotes",
                choice2: "2. curly brackets",
                choice3: "3. parantheses",
                choice4: "4. square brackets",
                answer: 3
            },
            {
                Question: "arrays in Javascript can be used to store ___.",
                choice1: "1. numbers and strings",
                choice2: "2. other arrays",
                choice3: "3. booleans",
                choice4: "4. all of the above",
                answer: 4
            },
            {
                question: "String Values must be enclosed within ____ when being assigned to variables.",
                choice1: "1. commas",
                choice2: "2. curly brackets",
                choice3: "3. quotes",
                choice4: "4. parantheses",
                answer: 2
            },
            {
                question:"A very useful tool used during development and debugging for printing content to the bugger is:",
                choice1: "1. Javascript",
                choice2: "2. terminal/bash",
                choice3: "3. for loops",
                choice4: "4. console.log",
                answer: 4
            }
        
        ]
        
    }
}
function showResults(questions, quizContainer, resultsContainer){

}

showQuestions(question, quizContainer);

submitButton.onclick = function(){
    showResults(resultsContainer)
}