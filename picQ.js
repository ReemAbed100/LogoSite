const questions = [
    {
        question: "In what year was the first Apple logo created?",
        image: "logos/apple.png",
        answers: [
            { text: "1976", correct: true },
            { text: "1990", correct: false },
            { text: "2000", correct: false },
            { text: "1977", correct: false },
        ]
    },
    {
        question: "When was Nike’s famous logo created?",
        image: "logos/nike.png",
        answers: [
            { text: "1966", correct: false },
            { text: "1977", correct: false },
            { text: "1971", correct: true },
            { text: "1955", correct: false },
        ]
    },
    {
        question: "When was Samsung’s first logo made?",
        image: "logos/samsung.png",
        answers: [
            { text: "1966", correct: false },
            { text: "1937", correct: false },
            { text: "1938", correct: true },
            { text: "1955", correct: false },
        ]
    },
    {
        question: "What color is NOT in the Google logo?",
        image: "logos/google.png",
        answers: [
            { text: "Blue", correct: false },
            { text: "Purple", correct: true },
            { text: "Red", correct: false },
            { text: "Yellow", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const logoImage = document.getElementById("logo-img");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    logoImage.src = currentQuestion.image;
    logoImage.classList.add("blurred");

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    logoImage.classList.add("blurred");
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    logoImage.classList.remove("blurred"); // Unblur on answer selection
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    logoImage.style.display = "none";
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        logoImage.style.display = "block";
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
