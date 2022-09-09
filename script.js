var readlineSync = require("readline-sync");
let score = 0;
const conductQuiz = function (qus, ans = "yes", comment = "") {
  console.log("");
  const userAns = readlineSync.question(qus + " : ");
  if (userAns === ans) {
    score++;
    console.log("Right ans");
  } else {
    score--;
    console.log("No right ans is ");
    console.log(comment);
  }
  console.log(``);
};
var userName = readlineSync.question("May I have your name? ");
// let welcomeMessage = 'Welcome ' + userName;
console.log(" ");
console.log(
  `Hi ${userName} Let's play some game plese enter your ans in yes or no`
);
console.log(" ");
const qusti = [
  "Name of Space Shuttle engine is RD-25 yes or no?",
  "Is liquid hydrogen fuel for RS-25 engne",
  "Is the starship redy yet?",
  "IS liquid methain is the fuel which starship is going to use?",
  "Is the Name of first Indian criogenic eninge is CE-20",
];
const ans2 = ["no", "yes", "no", "yes", "yes"];
const comment = [
  "The Aerojet Rocketdyne RS-25, also known as the Space Shuttle Main Engine",
  "RS-25 is a Fuel-rich dual-shaft staged combustion cycle engine",
  "When it will be it will be the most powerful rocket ever",
  "Because methane can be produced on Mars",
  "After long dew India devloped its cryogenic rocket engine",
];

function createQus(qus, ans, comment) {
  this.qus = qus;
  this.ans = ans;
  this.comment = comment;
}

const qustions = qusti.map(function (qus, i) {
  const quistion = new createQus(qus, ans2[i], comment[i]);
  return quistion;
});

qustions.forEach((qustion) =>
  conductQuiz(qustion.qus, qustion.ans, qustion.comment)
);
console.log(`Your final score is ${score}`);
