const questions = [

    {
        question: "In what year was the first Apple logo created?",
        answers: [
            { text: "1976", correct: true },
            { text: "1990", correct: false },
            { text: "2000", correct: false },
            { text: "1977", correct: false },

        ]

    },
    {
        question: "When did Burger King introduce its third logo featuring the ‘King on a Burger’?",
        answers: [
            { text: "1966", correct: false },
            { text: "1977", correct: false },
            { text: "1957", correct: true },
            { text: "1955", correct: false },
        ]
    },

    {
        question: "When did Starbucks introduce its most recent logo?",
        answers: [
            { text: "1968", correct: false },
            { text: "2001", correct: false },
            { text: "2011", correct: true },
            { text: "1955", correct: false },
        ]

    },
    {
        question: "When was Nike’s famous logo created?",
        answers: [
            { text: "1984", correct: false },
            { text: "1971", correct: true },
            { text: "1988", correct: false },
            { text: "1999", correct: false },
        ]
    }

]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}
function showQuestion() {
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
        question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");

        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

    });

}
function resetstate() {
    nextButton.style.display = "none";
    while (answerButtons.firstElementChild) {
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
    nextButton.style.display = "block";
}
function showScore() {
    resetstate();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
} 
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();
