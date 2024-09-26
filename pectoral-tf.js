const quizData = [
  {
    question: " The Clavicle has no a medullary cavity (bone marrow)",
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question: "The scapula extends from the 2nd to 6th rib",
    a: "True",
    b: "False",
    correct: "b",
  },
  {
    question: "The weakest part of the clavicle is the junction of the middle and laterla thirds.",
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question: "The scapula has three processes,two angles and three borders.",
    a: "True",
    b: "False",
    correct: "b",
  },{
    question: "The weakest part of the clavicle is the junction of the middle and laterla thirds.",
    a: "True",
    b: "False",
    correct: "a",
  },
  {
    question: "The Clavicle has 2 ends, a body and 3 surfaces",
    a: "Truee",
    b: "False",
    correct: "b",
  },
  {
    question: "After fracture........",
    a: "The medial fragment is elevated while the lateral fragment drops",
    b: "The medial fragment drops while the lateral fragment is elevated",
    c: "the medial fragment moves outwards while the lateral fragment moves inwards",
    d: "the medial fragment moves inwards while the lateral fragment moves outwards", 
    correct: "a",
  },
  {
    question: "1/3 of the clavicle is concave forward",
    a: "True",
    b: "False",
    correct: "a",
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

      <button onclick='window.location.href="pectoral.html" '> Reload </button>
      `
      
    }
  }
})