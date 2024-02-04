const submit = document.getElementById("submit-btn");
let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let numbering = 0;


function getAnswer() {
  let input = document.getElementById("input");
  let answer = input.value.toLowerCase(); 

  let qAndA = [
    {
      numbering: 1,
      question: "What's my favorite band",
      answer: "queen",
    },
    {
      numbering: 2,
      question: "What's my favorite lore",
      answer: "league",
    },
    {
      numbering: 3,
      question: "What's my favorite color",
      answer: "blue",
    },
    {
      numbering: 4,
      question: "What's my favorite programming language",
      answer: "javascript",
    },
    {
      numbering: 5,
      question: "What's my favorite season",
      answer: "spring",
    },
    {
      numbering: 6,
      question: "What's my favorite animal",
      answer: "cat",
    },
    {
      numbering: 7,
      question: "What's my favorite movie",
      answer: "inception",
    },
    {
      numbering: 8,
      question: "What's my favorite food",
      answer: "pizza",
    },
    {
      numbering: 9,
      question: "What's my favorite hobby",
      answer: "reading",
    },
    {
      numbering: 10,
      question: "What's my favorite subject",
      answer: "math",
    },
  ];

  let correctAnswer = false;

  for (let i = 0; i < qAndA.length; i++) {
    if (qAndA[i].answer === answer) {
      alert("Correct answer!");
      correctAnswer = true;
      correctAnswersCount++;
      break;
    }
  }

  if (!correctAnswer) {
    alert("Incorrect answer!");
  }

  input.value = "";
  currentQuestionIndex++;
  numbering++;
  if (currentQuestionIndex < qAndA.length) {
    document.getElementById("question").innerText = qAndA[currentQuestionIndex].question;
    document.getElementById("numbering").innerText = qAndA[currentQuestionIndex].numbering;
  } else {
    alert("Quiz completed!");
    document.getElementById("numbering").innerText = `You've score ${correctAnswersCount} over ${qAndA.length}`;
    document.getElementById("question").remove();
    document.getElementById("input").remove();
    document.getElementById("submit-btn").remove();
  }
}
