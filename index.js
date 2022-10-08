var readlineSync = require('readline-sync');




var score = 0;
let questions = [
  {
    question: "capital of india ? ",
    answer: "delhi",
  },
  {
    question: "capital of maharashtra ? ",
    answer: "mumbai",
  },
  {
    question: "capital of UP ? ",
    answer: "lucknow",
  },
  {
    question: "capital of MP? ",
    answer: "bhopal",
  }, {
    question: "capital of UK ? ",
    answer: "dehradun",
  }
]








function Welcome() {
  let name = readlineSync.question("what is your name ?")
  console.log(`welcome ! ${name} let's play quiz of Captials ?`);
}




function Quest(question, answer) {

  let ans = readlineSync.question(question);

  console.log(`you have Entered ${ans}`)
  if (ans == answer) {
    console.log("you are right");
    score++

  } else {
    console.log("you are wrong");
    if (score == 0) { "" } else { score-- }
  }
  console.log(`current score is ${score}`)
  console.log("___________________________________")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    Quest(currentQuestion.question, currentQuestion.answer);
  }
}


Welcome()
game()