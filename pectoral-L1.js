const quizData = [
  {
    question: "Which of the two surfaces of the clavicle is smooth",
    a: "Superior",
    b: "medial",
    c: "lateral",
    d: "inferior",
    correct: "a",
  },
  {
    question: " The sternoclavicular joint attaches the clavicle to the.....",
    a: "1st Rib",
    b: "Suprasternal notch",
    c: "Acromal end of the scapula",
    d: "manubrium",
    correct: "d",
  },
  {
    question: "Which end of the clavicle is enlarged & triangular",
    a: "anterior",
    b: "Sternal",
    c: "Acromial",
    d: "posterior",
    correct: "b",
  },
  {
    question: " The costoclavicular joint attaches the clavicle to the.....",
    a: "1st Rib",
    b: "Suprasternal notch",
    c: "Acromal end of the scapula",
    d: "manubrium",
    correct: "a",
  },
  {
    question: "A chiral carbon of an amino acid arises from the fact that it........",
    a: "is symmetric",
    b: "is bonded to both amino and carboxylic groups",
    c: "is bonded to four different chemical groups",
    d: "has net charge zero",
    e: "assumes an L configuration",
    correct: "c",
  },
  {
    question: " The Acromialclavicular joint attaches the clavicle to the.....",
    a: "1st Rib",
    b: "Suprasternal notch",
    c: "Acromal end of the scapula",
    d: "manubrium",
    correct: "c",
  },
  {
    question: "The following are borders of the scapula except;",
    a: "superior",
    b: "posterior",
    c: "axillary",
    d: "vertebral",
    correct: "b",
  },
  {
    question: "Aminoa acids that makeup portions of transmembrane protein are most likely to be......",
    a: "Essential ",
    b: "Non essential",
    c: "Hydrophobic",
    d: "glycosylated",
    e: "acetylated",
    correct: "c",
  },
  {
    question: "Which one of the following statements concerning glutamine is correct?",
    a: "contains an amide group ",
    b: "has glu as its three letter abbreviation",
    c: "classified as an acidic amino acid",
    d: "has charged polar side chain",
    e: "doesnt have a chiral carbon",
    correct: "a",
  },
  {
    question: "What amino acid is capable fo forming a disulphide bond?",
    a: "Glycine",
    b: "proline",
    c: "histidine",
    d: "cysteine",
    e: "isoleucine",
    correct: "d",
  },

];

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
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

      <button onclick='window.location.href="pectoral.html" '> Reload </button>
      `
      
    }
  }
})