const questions = [
    // qts for levle 1
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { choice: "Venus", correct: false},
            { choice: "Mars", correct: true},
            { choice: "Jupiter", correct: false},
            { choice: "Saturn", correct: false},
        ]
    },
    {
        question: "Who wrote Romeo and Juliet?",
        answers: [
            { choice: "William Shakespeare", correct: true},
            { choice: "Jane Austen", correct: false},
            { choice: "Charles Dickens", correct: false},
            { choice: "Mark Twain", correct: false},
        ]
    },
    {
        question: "What is the holy month of fasting called in Islam?",
        answers: [
            { choice: "Shawwal", correct: false},
            { choice: "Dhul-Hijjah", correct: false},
            { choice: "Ramadan", correct: true},
            { choice: "Muharram", correct: false},
        ]
    },
    // qts for level 2
    {
        question: "Which Arab country is known for its famous ancient city of Petra?",
        answers: [
            { choice: "Egypt", correct: false},
            { choice: "Jordan", correct: true},
            { choice: "Saudi Arabia", correct: false},
            { choice: "Lebanon", correct: false},
        ]
    },
    {
        question: "Which famous Arab mathematician is known for introducing the decimal point system?",
        answers: [
            { choice: "Ibn al-Haytham", correct: false},
            { choice: "Al-Khwarizmi", correct: true},
            { choice: "Al-Biruni", correct: false},
            { choice: "Ibn Battuta", correct: false},
        ]
    },
    {
        question: "What is the traditional Arab sweet pastry made with layers of filo dough, nuts, and honey called?",
        answers: [
            { choice: "Baklava", correct: true},
            { choice: "Tiramisu", correct: false},
            { choice: "Cannoli", correct: false},
            { choice: "Macaron", correct: false},
        ]
    },
    // qts for level 3
    {
        question: "Which Arab astronomer is known for his contributions to the field of astronomy, including the invention of the astrolabe?",
        answers: [
            { choice: "Al-Farabi", correct: false},
            { choice: "Al-Battani", correct: true},
            { choice: "Al-Razi", correct: false},
            { choice: "Al-Zahrawi", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { choice: "Venus", correct: false},
            { choice: "Mars", correct: false},
            { choice: "Jupiter", correct: false},
            { choice: "Saturn", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { choice: "Venus", correct: false},
            { choice: "Mars", correct: false},
            { choice: "Jupiter", correct: false},
            { choice: "Saturn", correct: false},
        ]
    },
    // qts for level 4
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { choice: "Venus", correct: false},
            { choice: "Mars", correct: false},
            { choice: "Jupiter", correct: false},
            { choice: "Saturn", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { choice: "Venus", correct: false},
            { choice: "Mars", correct: false},
            { choice: "Jupiter", correct: false},
            { choice: "Saturn", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { choice: "Venus", correct: false},
            { choice: "Mars", correct: false},
            { choice: "Jupiter", correct: false},
            { choice: "Saturn", correct: false},
        ]
    }
];

const qtsElement = document.getElementById("question");
const answElement = document.getElementById("btnAnswers");
const btnElement = document.getElementById("btnSection");


let currentQtsIndex = 0;
let score = 0;
let currentLevelIndex = 0;

function startGame()
{
    currentQtsIndex = 0;
    score = 0;
    showQts();
}

function showQts()
{
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    qtsElement.innerHtml = questionNo + ". " + currentQuestion.question;

    
}


