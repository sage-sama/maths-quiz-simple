/*
3. 8 + 9 = 17
4. 7 + 14 = 21
6. 6 - 3 = 3
7. 8 - 6 = 2
10. 21 - 13 = 8
11. 1 x 4 = 4
12. 5 x 2 = 10
13. 4 x 6 = 24
16. 5 ÷ 1 = 5
18. 56 ÷ 7 = 8
19. 9 ÷ 9 = 1
20. 81 ÷ 9 = 9
*/
const quizData = [
    {
        question: "7-4 = ?",
        a: "3",
        b: "8",
        c: "2",
        d: "5",
        correct: "a",
    },
    {
        question: "8x9 = ?",
        a: "81",
        b: "59",
        c: "72",
        d: "45",
        correct: "c",
    },
    {
        question: "16 ÷ 4 = ?",
        a: "6",
        b: "4",
        c: "3",
        d: "1",
        correct: "b",
    },
    {
        question: "12 + 19 = ?",
        a: "35",
        b: "25",
        c: "29",
        d: "31",
        correct: "d",
    },
    {
        question: "5+4 = ?",
        a: "9",
        b: "8",
        c: "11",
        d: "13",
        correct: "a",
    },
    {
        question: "2+6 = ?",
        a: "7",
        b: "5",
        c: "9",
        d: "8",
        correct: "d",
    },
    {
        question: "7x7 = ?",
        a: "56",
        b: "35",
        c: "40",
        d: "77",
        correct: "b",
    },
    {
        question: "16 - 9 = ?",
        a: "8",
        b: "9",
        c: "7",
        d: "10",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.
                Kindly note the score to fill in form.
                </h2>
                
                <button onclick="window.close()">Close</button>
            `;
        }
    }
});
