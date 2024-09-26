const quizData = [
  {
    question: "Which one of these best describes all amino acids that are used to synthesize human proteins(with the exception of glycine). They have.....",
    a: "An aromatic group",
    b: "A hydroxyl group",
    c: "An asymmetric carbon in the D-configuration",
    d: "An asymmetric carbon in the L-configuration",
    e: "An asymmetric alpha-carbon",
    correct: "d",
  },
  {
    question: ".............. is an amino acid that contains an imadazole aromatic ring",
    a: "Tryosine",
    b: "Phenylalanine",
    c: "Histidine",
    d: "Proline",
    e: "Tryptophan",
    correct: "c",
  },
  {
    question: " _______________ amino acid yields acetoacetyl CoA upon catabolism of its carbon skeleton",
    a: "Glucogenic",
    b: "Ketogenic",
    c: "Hydrophobic",
    d: "Polar",
    e: "Polar and hydrophobic",
    correct: "b",
  },
  {
    question: "A 50 year old patient is brought to the emergency department with the diagnosis of myocardial infacrtion. Which lactate dehydrogenase(LDH) isoenzyme activity would prevail in the patient's serum in the first two days after hospitalisation?",
    a: "LDH1",
    b: "LDH2",
    c: "LDH3",
    d: "LDH4",
    E: "LDH5",
    correct: "a",
  },
  {
    question: "WHat is your brothers name? ",
    a: "Mwelwa",
    b: "Joses",
    c: "Changwe",
    d: "Mwitwa",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const e_text = document.getElementById("e_text")
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
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
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

      <button onclick='window.location.href="aminoacids.html" '> Reload </button>
      `
      
    }
  }
})