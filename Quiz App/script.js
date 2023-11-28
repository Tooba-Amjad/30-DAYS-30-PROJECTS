const questions = [
    {
        question: "Who is the largest animal in the world?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Whale", correct: true },
            { text: "Fish", correct: false },
            { text: "Elephant", correct: false },
        ],
    },
    {
        question: "Who is the smallest Country in the world?",
        answer: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Sri Lanka", correct: false },
        ],
    },
    {
        question: "Who is the largest desert in the world?",
        answer: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
        ],
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const next = document.getElementById("next");

let currentindex = 0;
let score = 0;

function startQuiz() {
    currentindex = 0;
    score = 0;
    next.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentquestion = questions[currentindex];
    let questionNo = currentindex + 1;
    questionElement.innerHTML = questionNo + ". " + currentquestion.question;

    currentquestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();
