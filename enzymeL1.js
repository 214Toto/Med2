const quizData = [
  {
    question: "Which of the following statements is correct about most enzymes?",
    a: " increase the activation energy",
    b: " can make a reaction happen faster",
    c: "are used once and need to be replaced after catalyzing a reaction",
    d: "they change the position of the reaction’s equilibrium",
    e: " are not specific to the type of substrate they receive",
    correct: "b",
  },
  {
    question: " ________________ is the type of fibrous protein found in hair, nails, and outer epidermal layer of mammals.",
    a: "Elastin",
    b: "Keratin",
    c: "Collagen",
    d: "Procollagen",
    e: "Proelastin",
    correct: "b",
  },
  {
    question: " In trying to check whether a patient had sickle cell anemia, the doctor requested the laboratory to determine the electrophoretic spectrum of the proteins in the patient's blood. What physical/chemical properties of proteins is this method based on?",
    a: "Optical activity",
    b: "Solubility",
    c: "Presence of charge",
    d: "Viscosity",
    e: "Ability to denaturation",
    correct: "c",
  },
  {
    question: "The catabolism of hemoglobin.........",
    a: " results in the formation of protoporphyrinogen",
    b: " results in the formation of carbon dioxide",
    c: " is the only source of bilirubin",
    d: " involves the destruction of the porphyrin ring",
    e: "occurs in red blood cells", 
    correct: "d",
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
    question: "Most of the amino acids found in humans are ......... ",
    a: "L-isomers",
    b: "D- isomers",
    c: "Optical isomers",
    d: "D and L-isomers",
    e: "Optically inactive",
    correct: "a",
  },
  {
    question: "Essential amino acids are...........",
    a: "synthesized by the body",
    b: "obtained from the diet",
    c: "not involved in the formation of peptides",
    d: "Optically inactive",
    e: "all acidic",
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

      <button onclick='window.location.href="enzyme.html" '> Reload </button>
      `
      
    }
  }
})