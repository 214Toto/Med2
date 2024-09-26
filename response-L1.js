const quizData = [
  {
    question: "Atrophy....",
    a: "Is always a pathological response",
    b: "Is a decreased in the size of cells",
    c: "is characterised by calcification of the organs",
    d: "Is an increase in the cell size",
    correct: "b",
  },
  {
    question: "Which of the following may cause Metaplasia",
    a: "Denervation",
    b: "Diminished blood supply",
    c: "Inadequate nutrition",
    d: "Chronic irritation of the epithelium",
    correct: "d",
  },
  {
    question: "Which of the following are features of irrevrsible injury",
    a: "Nuclear chromatin clapmping",
    b: "Formation of cytoplasm blebs",
    c: "Mitochondria swelling",
    d: "Nuclear pyknosis",
    correct: "b",
  },
  {
    question: "Coagulative nercrosis....",
    a: "Is caused by bacterial infection",
    b: "Has a cheese-like gross apearance",
    c: "May be caused by thrombosis",
    d: "Is a reversible change",
    correct: "b",
  },
  {
    question: "Which of the following is not an intracellular accumulation",
    a: " Dystrophic calcification",
    b: "Metastatic calcification",
    c: "Fatty change",
    d: "Iron overload",
    correct: "d",
  },
  {
    question: "Calcification........",
    a: "Is a characteristic features of metaplasia ",
    b: "Occurs only in dead cells",
    c: "Is an extracellular accumulation",
    d: "may cause organ dysfunction",
    correct: "b",
  },
  {
    question: "Metaplasia......",
    a: "Is an increase in the number of cells",
    b: "Is synonymous with cancer",
    c: "Is an Irreversible adaptaive response",
    d: "Arise by genetic reprogramming of stem cell",
    correct: "b",
  },
  {
    question: "Pathological calcification....",
    a: "Implies the normal deposition of calcium salts in living tissues",
    b: "May cause organ dysfunction",
    c: "Is an adaptive change in liable tissues",
    d: "Occurs in dead or dying tissues",
    correct: "b",
  },
  {
    question: "Nercrosis....",
    a: "Is an adaptive response to tissue injury",
    b: "Is a characteristic by pathological calcification",
    c: "Occur in dead bodies",
    d: "Is synonymous with apoptosis",
    correct: "b",
  },
  {
    question: "Apoptosis....",
    a: "Is slightly regulated suicide program of the cell",
    b: "Involves deactivation of caspase enzymes",
    c: "Does not occur in cells incapable of replicating",
    d: "Is synonymous with necrosis",
    correct: "b",
  },
  {
    question: "Atrophy is caused by...",
    a: "Increased workload",
    b: "innervation",
    c: "increased blood supply to an organ",
    d: "loss of endocrine stimulation",
    correct: "b",
  },
  {
    question: "Hyperplasia....",
    a: "Is a deacrease in cell size",
    b: "Is a increase in cell size",
    c: "Is an increase in the number of cells",
    d: "Is a deacrease in the number of cells",
    correct: "b",
  },
  {
    question: "Necrosis....",
    a: "Is a physiologoical process",
    b: "Is a characteristics feature of acute inflammation",
    c: "Is a well-controlled form of cell death",
    d: "Of the coagulative type is the commonest form",
    correct: "b",
  },
  {
    question: "Which of the following is not true about hypertrophy ?",
    a: "It refers to an increase in size of cells in a tissue or organ",
    b: "of the left ventricle occurs in patient with systemic hypertension",
    c: "Is the principle underlying cause of prostate cancer",
    d: "is a non-reversible change",
    correct: "b",
  },
  {
    question: "Necrosis characterised by the 'ghostly' appearance of acidophilic opaque cells under light microscopy is known as:",
    a: "Caseous",
    b: "Liquefactive",
    c: "Coagulative",
    d: "Fibrinoid",
    correct: "b",
  },
  {
    question: "Proliferation of the grandular epithelium of the female breast at puberty is an example of",
    a: "Metaplasia",
    b: "Hypertrophy",
    c: "Hyperplasia",
    d: "Atrophy",
    correct: "b",
  },
  {
    question: "Apoptosis..",
    a: "Elicits an inflammatory response",
    b: "is associative with activation of the caspase enzymes",
    c: "Cause loss of integrity of the cell membrane",
    d: "Is always a physiological process",
    correct: "b",
  },
  {
    question: "Which of the following is not a feature of necrosis",
    a: "Pyknosis",
    b: "Karyolysis",
    c: "Autophagy",
    d: "Karyorrhexis",
    correct: "b",
  },
  {
    question: "Autophagy......",
    a: "Is a lysosomal digestion of the cells own components.",
    b: "Is a process by which a cell ingest substances from the outside for intracellular destruction",
    c: "Does not signal cell death",
    d: "Is common in young cells",
    correct: "b",
  },
  {
    question: "Which of the following is NOT a morphological consequence of ATP deprivation in cellular injury",
    a: "Detachment of ribosomes",
    b: "Clamping of nuckear chromatin",
    c: "Efflux of calcium ions",
    d: "Cellualr swelling",
    correct: "b",
  },
  {
    question: "Which of the following may lead to intracellular accumulations:",
    a: "When a normal substance is produced at a normal or an increased rate, but the metabolic rate is inadequate to remove it.",
    b: "When a normal endogenous subsance accumulates because of genetic defects in its transport, or section.",
    c: "When an inherited defect in an enzyme may result in the degradation of a metabolite.",
    d: "When an abnormal exogegnous sustances is deposited and accumates because the cell has either the enzymatic machinery to degrade the substances nor the ability to transport it to other sites.",
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

      <button onclick='window.location.href="response.html" '> Reload </button>
      <button class="view-ans" onclick='window.location.href="response.html" '> Check Answers </button>
      `
      
    }
  }
})