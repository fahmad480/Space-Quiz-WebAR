let spaceQuiz = [
  {
    question: "Which planet is known as the Red Planet?",
    answerLeft: "Earth",
    answerRight: "Mars",
    correctAnswer: "Mars",
  },
  {
    question: "Which is the largest planet in the solar system?",
    answerLeft: "Jupiter",
    answerRight: "Saturn",
    correctAnswer: "Jupiter",
  },
  {
    question: "Which planet has a moon called Europa?",
    answerLeft: "Venus",
    answerRight: "Jupiter",
    correctAnswer: "Jupiter",
  },
  {
    question:
      "Which planet is known for its Great Red Spot, a giant storm that has been raging for hundreds of years?",
    answerLeft: "Neptune",
    answerRight: "Jupiter",
    correctAnswer: "Jupiter",
  },
  {
    question: "Which planet is closest to the Sun?",
    answerLeft: "Mercury",
    answerRight: "Venus",
    correctAnswer: "Mercury",
  },
  {
    question: "Which planet is known for its tilted axis and extreme seasons?",
    answerLeft: "Earth",
    answerRight: "Uranus",
    correctAnswer: "Earth",
  },
  {
    question: "Which planet is known for its rings?",
    answerLeft: "Saturn",
    answerRight: "Jupiter",
    correctAnswer: "Saturn",
  },
  {
    question:
      "Which planet has a surface mostly composed of frozen water and methane?",
    answerLeft: "Uranus",
    answerRight: "Neptune",
    correctAnswer: "Uranus",
  },
  {
    question:
      "Which planet has the shortest day (a day on this planet is only about 9 hours long)?",
    answerLeft: "Earth",
    answerRight: "Jupiter",
    correctAnswer: "Jupiter",
  },
  {
    question: "Which planet is known for its volcanoes and active geology?",
    answerLeft: "Venus",
    answerRight: "Earth",
    correctAnswer: "Venus",
  },
  {
    question:
      "Which planet is the most distant from the Sun in the solar system?",
    answerLeft: "Pluto",
    answerRight: "Neptune",
    correctAnswer: "Neptune",
  },
  {
    question: "Which planet is known for its blue-green appearance?",
    answerLeft: "Mars",
    answerRight: "Earth",
    correctAnswer: "Earth",
  },
  {
    question:
      "Which planet is known for its two small moons, Phobos and Deimos?",
    answerLeft: "Mars",
    answerRight: "Venus",
    correctAnswer: "Mars",
  },
  {
    question:
      "Which planet is known for its thin atmosphere and extreme temperatures?",
    answerLeft: "Mercury",
    answerRight: "Venus",
    correctAnswer: "Venus",
  },
  {
    question:
      "Which planet is known for its large, prominent Great Dark Spot and strong winds?",
    answerLeft: "Neptune",
    answerRight: "Saturn",
    correctAnswer: "Neptune",
  },
  {
    question: "Which planet is known for its methane lakes and rivers?",
    answerLeft: "Mars",
    answerRight: "Titan",
    correctAnswer: "Titan",
  },
  {
    question:
      "Which planet is known for its atmosphere that is composed mainly of hydrogen and helium?",
    answerLeft: "Jupiter",
    answerRight: "Uranus",
    correctAnswer: "Jupiter",
  },
  {
    question:
      "Which planet is known for its thin atmosphere, rocky surface, and lack of moons or rings?",
    answerLeft: "Mercury",
    answerRight: "Pluto",
    correctAnswer: "Mercury",
  },
  {
    question:
      "Which planet is known for its atmosphere that contains a thick layer of sulfuric acid clouds?",
    answerLeft: "Venus",
    answerRight: "Earth",
    correctAnswer: "Venus",
  },
  {
    question:
      "Which planet is known for its extreme temperature changes and distinctive surface features, including Olympus Mons, the tallest volcano in the solar system?",
    answerLeft: "Mars",
    answerRight: "Earth",
    correctAnswer: "Mars",
  },
];

let faceGroup = document.getElementById("face-group");
let questionUI = document.getElementById("questionUI");
let questionText = document.getElementById("questionText");
let answerUILeft = document.getElementById("answerUILeft");
let answerTextLeft = document.getElementById("answerTextLeft");
let buttonAnswerLeft = document.getElementById("leftButtonUI");
let answerUIRight = document.getElementById("answerUIRight");
let answerTextRight = document.getElementById("answerTextRight");
let buttonAnswerRight = document.getElementById("rightButtonUI");
let startButton = document.getElementById("startButtonUI");

let play = false;
let score = 0;
let questionIndex = 0;

// on click start button
startButton.addEventListener("click", function () {
  if (!play) {
    play = true;
    score = 0;
    questionIndex = 0;
    console.log("startButton clicked");
    startButton.classList.add("hidden");
    buttonAnswerLeft.classList.remove("hidden");
    buttonAnswerRight.classList.remove("hidden");
    startQuiz();
  }
});

buttonAnswerLeft.addEventListener("click", function () {
  if (play) {
    console.log(
      "buttonAnswerLeft clicked: " + spaceQuiz[questionIndex].answerLeft
    );
    checkAnswer(spaceQuiz[questionIndex].answerLeft);
  }
});

buttonAnswerRight.addEventListener("click", function () {
  if (play) {
    console.log(
      "buttonAnswerRight clicked: " + spaceQuiz[questionIndex].answerRight
    );
    checkAnswer(spaceQuiz[questionIndex].answerRight);
  }
});

// function to start the quiz
function startQuiz() {
  console.log("startQuiz called");
  // shuffle the array
  shuffle(spaceQuiz);

  // show the question
  showQuestion();
}

// check if answer is correct
function checkAnswer(answer) {
  console.log("checkAnswer called: " + answer);
  if (answer === spaceQuiz[questionIndex].correctAnswer) {
    console.log("checkAnswer: correct");
    score++;
  } else {
    console.log("checkAnswer: incorrect");
    //
  }

  // check if there are more questions
  if (questionIndex < spaceQuiz.length - 1) {
    console.log("checkAnswer: more questions");
    questionIndex++;
    showQuestion();
  } else {
    console.log("checkAnswer: no more questions");
    gameOver();
  }
}

// function game over
function gameOver() {
  if (play) {
    play = false;
    console.log("gameOver called");

    // show the score
    buttonAnswerLeft.classList.add("hidden");
    buttonAnswerRight.classList.add("hidden");
    startButton.classList.remove("hidden");
    questionText.setAttribute(
      "value",
      "You got " + score + " out of " + spaceQuiz.length + " correct!"
    );
    answerTextLeft.setAttribute("value", "");
    answerTextRight.setAttribute("value", "");
  }
}

// function to show the question
function showQuestion() {
  console.log("showQuestion called");

  questionText.setAttribute("value", spaceQuiz[questionIndex].question);
  answerTextLeft.setAttribute("value", spaceQuiz[questionIndex].answerLeft);
  answerTextRight.setAttribute("value", spaceQuiz[questionIndex].answerRight);

  buttonAnswerLeft.innerHTML = spaceQuiz[questionIndex].answerLeft;
  buttonAnswerRight.innerHTML = spaceQuiz[questionIndex].answerRight;
}

// function to shuffle array
function shuffle(array) {
  console.log("shuffle called");
  array.sort(() => Math.random() - 0.5);
}
