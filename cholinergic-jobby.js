const quizData = [
  {
    question:  "Characteristics of pilocarpine include all of the following EXCEPT",
    a: "It is a tertiary amine alkaloid ",
    b: " It causes miosis and a decrease in intraocular pressure",
    c: " Causes a decrease in secretory and motor activity of gut ",
    d: " It is useful in the treatment of glaucoma",
    correct: "c",
  },
  {
    question: "Bethanechol has all of the following properties EXCEPT:",
    a: "It is extremely resistant to hydrolysis ",
    b: " Purely muscarinic in its action ",
    c: " It is used for abdominal urinary bladder distention ",
    d: "It exerts both nicotinic and muscarinic effects ",
    correct: "d",
  },
  {
    question: " Acetylcholine is not a specific neurotransmitter at:",
    a: "Sympathetic ganglia ",
    b: " Sympathetic postganglionic nerve endings",
    c: "Parasympathetic ganglia ",
    d: " Parasympathetic postganglionic nerve endings",
    correct: "b",
  },
  {
    question: " Indicate the location of M2 cholinoreceptor type:",
    a: "Heart",
    b: "Glands",
    c: "Smooth muscle",
    d: "Endothelium",
    correct: "a",
  },
  {
    question: "The symptoms of mushroom poisoning include all of the following EXCEPT:",
    a: " Salivation, lacrimation, nausea, vomiting",
    b: " Dryness of mouth, hyperpyrexia, hallucination ",
    c: " Headache, abdominal colic",
    d: " Bradycardia, hypotension and shock ",
    correct: "b",
  },
  {
    question: "Which of the following cholinomimetics activates both muscarinic and nicotinic receptors?",
    a: " Lobeline",
    b: "Pilocarpine ",
    c: "Nicotine",
    d: " Bethanechol ",
    correct: "c",
  },
  {
    question: " Indicate a cholinomimetic agent, which is related to direct-acting drugs:",
    a: "carbachol",
    b: "Endrophonium",
    c: "Physostigmine",
    d: " Isoflurophate",
    correct: "a",
  },
  {
    question: " Characteristics of carbachol include all of the following EXCEPT: ",
    a: " It decreases intraocular pressure",
    b: "It causes mydriasis ",
    c: "It exerts both nicotinic and muscarinic effects",
    d: "it is resistant to acethylcholiesterase ",
    correct: "b",
  },




  {
    question: "Acetylcholine is not used in clinical practice because:",
    a: "It is very toxic",
    b: " The doses required are very high",
    c: " It is very rapidly hydrolyzed",
    d: "It is very costly",
    correct: "c",
  },
  {
    question: "Parasympathomimetic drugs cause: ",
    a: "Bronchodilation",
    b: " Mydriasis ",
    c: " Bradycardia",
    d: "Constipation",
    correct: "c",
  },
  {
    question: "Which of the following direct-acting cholinomimetics is mainly muscarinic in action? ",
    a: "Bethanechol",
    b: "Carbachol",
    c: "Acetylcholine",
    d: "None of the above",
    correct: "a",
  },
  {
    question: " Which of the following direct-acting cholinomimetics has the shortest duration of action?",
    a: "Acetylcholine",
    b: "Malathion",
    c: "Carbachol",
    d: "Bethanechol",
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

      <button onclick='window.location.href="cholinergic.html" '> Reload </button>
      `
      
    }
  }
})