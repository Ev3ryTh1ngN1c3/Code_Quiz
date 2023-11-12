const questionsArray = [
    {
        question: "What tag specifies a section of text in HTML?",
        choices: ["<code>", "<caption>", "<p>", "<section>"],
        correctAnswer: "<p>"
    },
    {
        question: "What is the most important CSS property, used for controlling the layout ?",
        choices: ["display", "margin", "table", "<div>"],
        correctAnswer: "display"
    },
    {
        question: "In JavaScript, what is a block of code called that is used to perform a specific task?",
        choices: ["variable", "string", "declaration", "function"],
        correctAnswer: "function"
    }
];

const container = document.querySelector(".container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const restartButton = document.getElementById("restart-btn");
const timerElement = document.getElementById("time")
const quizDisplay = document.getElementById("display")

let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let countOfQuestion = document.querySelector("number-of-question");
let userScore = document.getElementById("user-score");

let currentQuestion = 0;
let score = 0;
let timeLeft = 120;

function quizCreator () {
    quizArray.sort(() => Math.random() - 0.5);
    for (let i of quizArray) {
        i.options.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        countOfQuestion.innerHTML = 1 + "of" + quizArray.length + "question"
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
    }
}