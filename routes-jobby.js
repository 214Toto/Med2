const quizData = [
  {
    question: "Which of the following routes of drug administrtion is NOT forlocal purposes ?",
    a: "Contains an amide group",
    b: "Has Asp as its three-letter abbreviation",
    c: "Classified as an acidic amino acid",
    d: "Has a charged polar side chain",
    e: "Doesn't have a chiral carbon",
    correct: "a",
  },
  {
    question: "First pass effect occurs in which of the following routes of administration? ",
    a: "Oral",
    b: "Sublingual",
    c: "Rectal",
    d: "Intravenous",
    e: "Epidural",
    correct: "a",
  },
  {
    question: "The primary route of administration of insulin is",
    a: "intradermal",
    b: "subcutaneous",
    c: "intramuscular",
    d: "intravenous",
    e: "buccal",
    correct: "b",
  },
  {
    question: ".Bioavailability is the....... ",
    a: "Proportion of administered drug that reaches the systemic circulation in changed form",
    b: "Proportion of administered drug that reaches the systemic circulation in unchanged form",
    c: "Proportion of susceptibility of body tissues to the given drug",
    d: "Ability of administered drug to reach its target of action",
    correct: "b",
  },
  {
    question: "Which one of the following statements is applicable to absorption of drugs from the gastrointestinal tract?",
    a: "Absorption of weak acids occurs only from the stomach and not from the small intestine. ",
    b: "All the drugs are stable at the low pH of the stomach.",
    c: "Some drugs are metabolized extensively by the liver and do not reach the general circulation (first-pass effect) ",
    d: "Rectal administration is the best way to give irritating drugs",
    e: "Ingesting drugs with food always enhances drug absorption.",
    correct: "c",
  },
  {
    question: "Correct statements concerning characteristics of a particular route of drug administration include all of the following EXCEPT: ",
    a: "Inhalation provides slow access to the general circulation.",
    b: "Intravenous administration provides a rapid response",
    c: "Oral administration requires that the patient be alert.",
    d: "Intramuscular administration requires sterile technique.  ",
    e: "Subcutaneous administration may cause local irritation",
    correct: "a",
  },
  {
    question: "Which of the following are methods for avoiding 'first-pass' metabolism of the drug by the liver ?",
    a: "Subcutaneous injection of epinephrine",
    b: "Sublingual administration of nitroglycerin. ",
    c: "Intramuscular administration of propranolol.",
    d: "Transdermal application of nitroglycerin. ",
    e: "All of the above. ",
    correct: "e",
  },
  {
    question: "The following statement concerning pre-systemic metabolism are true except:",
    a: "is the metabolism of administrated drugs before reaching systemic circulation. ",
    b: "it can be avoided by giving the drug via another route of administration.",
    c: "it usually leads to decrease drug bioavailability",
    d: "it is usually occurs due to enzyme induction or inhibition.",
    e: "drugs with extensive first pass effect may be ineffective orally",
    correct: "d",
  },
  {
    question: ". Which of the following are methods for avoiding 'first-pass' metabolism of the drug by the liver ?",
    a: "Subcutaneous injection of epinephrine",
    b: "Sublingual administration of nitroglycerin. ",
    c: "Intramuscular administration of propranolol.",
    d: "Transdermal application of nitroglycerin. ",
    e: "All of the above. ",
    correct: "e",
  },
  {
    question: ". Which of the following are methods for avoiding 'first-pass' metabolism of the drug by the liver ?",
    a: "Subcutaneous injection of epinephrine",
    b: "Sublingual administration of nitroglycerin. ",
    c: "Intramuscular administration of propranolol.",
    d: "Transdermal application of nitroglycerin. ",
    e: "All of the above. ",
    correct: "e",
  },
  {
    question: ". Which of the following are methods for avoiding 'first-pass' metabolism of the drug by the liver ?",
    a: "Subcutaneous injection of epinephrine",
    b: "Sublingual administration of nitroglycerin. ",
    c: "Intramuscular administration of propranolol.",
    d: "Transdermal application of nitroglycerin. ",
    e: "All of the above. ",
    correct: "e",
  },
  {
    question: "The disadvantage of oral route is",
    a: "Vomiting as a result of gastrointestinal irritation",
    b: "Destruction of some drugs by the digestive enzyme and non-favorable gastric pH",
    c: " Irregularities in the absorption in the presence of the food and other drugs",
    d: " Patient non-compliance",
    correct: "d",
  },
  {
    question: "The main route of administration of a drug to produce a local effect is",
    a: "Topical",
    b: "Oral",
    c: "Parentera",
    d: "Toto",
    correct: "a",
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

      <button onclick='window.location.href="routes.html" '> Reload </button>
      `
      
    }
  }
})