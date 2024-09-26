const quizData = [
  {
    question: "What does the term “bioavailability” mean?",
    a: "Plasma protein binding degree of substance",
    b: "Permeability through the brain-blood barrier",
    c: "Fraction of an uncharged drug reaching the systemic circulation following any route administration",
    d: "Amount of a substance in urine relative to the initial doze ",
    correct: "c",
  },
  {
    question: "What is characteristic of the oral route? ",
    a: "Fast onset of effect ",
    b: "Absorption depends on GI tract secretion and motor function",
    c: "A drug reaches the blood passing the liver",
    d: "The sterilization of medicinal forms is obligatory ",
    correct: "b",
  },
  {
    question: "Tick the feature of the sublingual route: ",
    a: "Pretty fast absorption ",
    b: "A drug is exposed to gastric secretion",
    c: "A drug is exposed more prominent liver metabolism",
    d: "A drug can be administrated in a variety of doses ",
    correct: "a",
  },
  {
    question: "Parenteral administration: ",
    a: "Cannot be used with unconsciousness patients",
    b: "Generally results in a less accurate dosage than oral administration",
    c: "Usually produces a more rapid response than oral administration",
    d: "Is too slow for emergency use ",
    correct: "c",
  },
  {
    question: "What is characteristic of the intramuscular route of drug administration? ",
    a: "Only water solutions can be injected ",
    b: "Oily solutions can be injected ",
    c: "Opportunity of hypertonic solution injections ",
    d: "The action develops slower, than at oral administration",
    correct: "b",
  },
  {
    question: "Indicate the route of local anesthetic administration, which is associated with instillation within epidural or subarachnoid spaces:",
    a: "Topical anesthesia ",
    b: "Infiltrative anesthesia",
    c: "Regional anesthesia",
    d: "Spinal anesthesia",
    correct: "d",
  },
  {
    question: "Insulin can not be administered by: ",
    a: "Oral route",
    b: "Intravenous route",
    c: "Subcutaneous route",
    d: "Intramuscular route.",
    correct: "a",
  },
  {
    question: "The route of drug administration that gives the most rapid onset of the pharmacological effect is",
    a: "Intramuscular injection",
    b: "Intravenous injection",
    c: "Intradermal injection",
    d: "Peroral administration",
    correct: "b",
  },
  {
    question: "Oral route.......",
    a: "Yields better absorption than parenteral administration for majority of drugs",
    b: "Should be avoided in the recumbent position",
    c: "Has no demerit",
    d: "Produces quick onset of action",
    correct: "b",
  },
  {
    question: "Intramuscular route.......",
    a: "Always produces faster absorption than oral route",
    b: "In a child is made into the gluteus maximus muscle",
    c: "Can be used to inject mild irritants",
    d: "Can be used to inject a volume of 15 ml",
    correct: "c",
  },
  {
    question: " Advantage of sublingual route include the following except",
    a: "Spitting out the tablet can terminate its action",
    b: "It has a rapid onset of action",
    c: "Its usefulness is limited to treat local conditions",
    d: "It avoids first pass hepatic metabolism",
    correct: "a",
  },
  {
    question: "Route of administration suitable for emergency and permits titration of the dosage as well is....",
    a: "Intramuscualr",
    b: "Intravenous",
    c: "All of the above",
    d: "None of the above",
    correct: "b",
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

      <button onclick='window.location.href="routes.html" '> Reload </button>
      `
      
    }
  }
})