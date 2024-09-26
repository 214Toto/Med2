const quizData = [
  {
    question: "Hyperplasia results in increase in the cell population",
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question: "Fat necrosis is commonly seen in which condition Hepatitis",
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question: "Apoptosis Is the same as necrosis ?",
    a: "True",
    b: "False",
    correct: "b",
  },
  {
    question: "Free radicals cause cell injury and can initiate autocatalytic reactions",
    a: "True",
    b: "False",
    correct: "b",
  },
  {
    question: "Karyolysis is a morphologic myocardial fnding which i indicates irreversible cell injury",
    a: "True",
    b: "False",
    correct: "b",
  },
  {
    question: "Cardiac muscle hype!rophy in hypetension is pathological hypetrophy",
    a: "True",
    b: "False",
    correct: "b",
  },
  {
    question: "Carcinoma in situ of the cervix is an example Dysplasia",
    a: "True",
    b: "False",
    correct: "b",
  },
  {
    question: "Necrotic granuloma has a central necrosis",
    a: "True",
    b: "False",
    correct: "b",
  },
  {
    question: "Skin cells are examples of permanent cells",
    a: "True",
    b: "False",
    correct: "b",
  },
  {
    question: "Metaplasia..........",
    a: "True",
    b: "False",
    correct: "b",
  },
  {
    question: "Metaplasia..........",
    a: "True",
    b: "False",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const submitBtn = document.getElementById("submit")


let currentQuiz = 0 
let score = 0

loadQuiz()

function loadQuiz() {
   
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
}

function deselectAnswers() {
      answerEls.forEach(answerEls => answerEls.checked = false)

}

function getSelected() {
      let answer
      answerEls.forEach(answerEl => {
        if(answerEl.checked) {
          answer = answerEl.id
        }
      })
      return answer

}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++

    if(currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
      <h2> You Answered ${score}/${quizData.length} questions corretly</h2>

      <button onclick='window.location.href="response.html" '> Reload </button>
      `
      
    }
  }
})