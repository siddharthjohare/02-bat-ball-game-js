

let scoreStr = localStorage.getItem('score');
let score = JSON.parse(scoreStr) || { win: 0, lose: 0, draw: 0 };

function showResult(userChoice, computerChoice, result){

  document.querySelector('#move').innerText =
  "You Chose: " + userChoice + " , Computer Chose: " + computerChoice;

  document.querySelector('#result').innerText =
  "Result: " + result;

  document.querySelector('#score').innerText =
  "Win: " + score.win + " Lose: " + score.lose + " Draw: " + score.draw;
}

function playGame(userChoice){

  let arr = ['Bat','Ball','Stump'];
  let computerChoice = arr[Math.floor(Math.random()*3)];

  let result;

  if(userChoice === computerChoice){
    result = 'Match Draw';
    score.draw++;
  }

  else if(
    (userChoice === 'Bat' && computerChoice === 'Ball') ||
    (userChoice === 'Ball' && computerChoice === 'Stump') ||
    (userChoice === 'Stump' && computerChoice === 'Bat')
  ){
    result = 'You Win';
    score.win++;
  }

  else{
    result = 'You Lose';
    score.lose++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  showResult(userChoice, computerChoice, result);
}

function resetScore(){
  score = {win:0, lose:0, draw:0};
  localStorage.removeItem('score');

  document.querySelector('#move').innerText = "";
  document.querySelector('#result').innerText = "";
  document.querySelector('#score').innerText = "";

}

//=====================================
//  Complete Game Flow
// User Image Click
//       ↓
// playGame()
//       ↓
// Computer Random Choice
//       ↓
// Win / Lose / Draw Check
//       ↓
// Score Update
//       ↓
// localStorage Save
//       ↓
// showResult()
//       ↓
// Page Update

// We used these important concepts in this project:

// localStorage
// JSON.parse / JSON.stringify
// DOM Manipulation
// Functions
// Arrays
// Random Logic
// Event Handling 