const questions = [
    {
        question: "Guess The Logo?",
        image: "burgerking.png",
        answers: [
            { text: "Burgerking", correct: true },
            { text: "Google", correct: false },
            { text: "Coca Cola", correct: false },
            { text: "Samsung", correct: false },
        ]
    },
    {
        question: "Guess The Logo?",
        image: "starbucks.png",
        answers: [
            { text: "Pepsi", correct: false },
            { text: "Nike", correct: false },
            { text: "Starbucks", correct: true },
            { text: "Apple", correct: false },
        ]
    },
    {
        question: "Guess The Logo?",
        image: "nike.png",
        answers: [
            { text: "Ikea", correct: false },
            { text: "Ford", correct: false },
            { text: "Nike", correct: true },
            { text: "Microsoft", correct: false },
        ]
    },
    {
        question: "Guess The Logo?",
        image: "apple.png",
        answers: [
            { text: "Youtube", correct: false },
            { text: "Apple", correct: true },
            { text: "Sprite", correct: false },
            { text: "Visa", correct: false },
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

    logoImage.classList.remove("blurred");
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
