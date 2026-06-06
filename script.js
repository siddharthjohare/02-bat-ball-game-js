// alert hata ke page par show karna hai 

// 1️--Move show (User + Computer choice)
// 2️-- Result show (Win/Lose/Draw)
//Iske liye HTML me 2 div add karne padenge aur JS me alert ki jagah DOM update karna hoga.

// 3-- Bat / Ball / Stump buttons ki jagah images use karni hai.
//Logic same rahega, sirf button ke andar image lagani hai.

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
//========================================================

//1️⃣ let scoreStr = localStorage.getItem('score');
//➡️ Browser localStorage se saved score data (string), la raha hai.

//2️⃣ let score = JSON.parse(scoreStr) || { win: 0, lose: 0, draw: 0 };
//➡️ String ko object me convert karo, agar data na mile to default score object banao.

//3️⃣ function showResult(userChoice, computerChoice, result)
//➡️ Page par move, result aur score show karne ka function.

//4️⃣ document.querySelector('#move').innerText =
//➡️ HTML me #move element select karke text change kar rahe.

//5️⃣ "You Chose: " + userChoice + " , Computer Chose: " + computerChoice;
//➡️ User aur computer ki moves page par display ho rahi.

//6️⃣ document.querySelector('#result').innerText =
//➡️ HTML me #result element select kiya.

//7️⃣ "Result: " + result;
//➡️ Game ka win / lose / draw result show ho raha.

//8️⃣ document.querySelector('#score').innerText =
//➡️ HTML me #score element select kiya.

//9️⃣  "Win: " + score.win + " Lose: " + score.lose + " Draw: " + score.draw;
//➡️ Current score page par display ho raha.

// Game Function

//🔟 function playGame(userChoice)
//➡️ User click kare to game start karne wala function.

//1️⃣1️⃣ let arr = ['Bat','Ball','Stump'];
// ➡️ Computer ke possible choices array me store kiye.

//1️⃣2️⃣  let computerChoice = arr[Math.floor(Math.random()*3)];
//➡️ Array me se random computer choice select kiya.

//1️⃣3️⃣ let result;
//➡️ Game ka result store karne ke liye variable.

//1️⃣4️⃣ if(userChoice === computerChoice)
//➡️ Check karta hai user aur computer same choice hai ya nahi.

//1️⃣5️⃣ result = 'Match Draw';
//➡️ Same choice hone par draw result set.

//1️⃣6️⃣ score.draw++;
//➡️ Draw hone par draw score 1 increase.

//1️⃣7️⃣ else if(...)
//➡️ Winning conditions check kar raha.

//1️⃣8️⃣ result = 'You Win';
//➡️ User jeet gaya to result win set.

//1️⃣9️⃣ score.win++;
//➡️ Win hone par win score increase.

//2️⃣0️⃣ else
//➡️ Baaki sab case lose condition.

//2️⃣1️⃣ result = 'You Lose';
//➡️ User haar gaya to lose result set.

//2️⃣2️⃣ score.lose++;
//➡️ Lose hone par lose score increase.

//2️⃣3️⃣ localStorage.setItem('score', JSON.stringify(score));
//➡️ Updated score localStorage me save ho raha.

//2️⃣4️⃣ showResult(userChoice, computerChoice, result);
//➡️ Function call karke page par result show kar rahe.

// Reset Function

//2️⃣5️⃣  function resetScore()
//➡️ Score reset karne ke liye function banaya.

//2️⃣6️⃣ score = {win:0, lose:0, draw:0};
//➡️ Score object ko 0 se reset kiya.

//2️⃣7️⃣ localStorage.removeItem('score');
//➡️ Browser storage se saved score delete.

//2️⃣8️⃣ document.querySelector('#move').innerText = "";
//➡️ Page se move text clear.

//2️⃣9️⃣ document.querySelector('#result').innerText = "";
//➡️ Page se result text clear.

//3️⃣0️⃣ document.querySelector('#score').innerText = "";
//➡️ Page se score display clear.

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

// ✅ Humne is project me ye important JS concepts use kiye:

// localStorage
// JSON.parse / JSON.stringify
// DOM Manipulation
// Functions
// Arrays
// Random Logic
// Event Handling 