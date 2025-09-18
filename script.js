let score = 0;
let timeLeft = 0;
let totalTime = 0;
let timerInterval;
let countdownInterval;
let gameActive = false;

const timerDisplay = document.getElementById("timer");
const cpsDisplay = document.getElementById("cps");
const scoreDisplay = document.getElementById("score");
const gameArea = document.getElementById("gameArea");
const resetButton = document.getElementById("reset");
const timeButtons = document.querySelectorAll(".time-select button");
const startText = document.getElementById("startText");


timeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    totalTime = parseInt(btn.getAttribute("data-time"));
    timeLeft = totalTime;
    resetGame();
    timerDisplay.textContent = timeLeft;
  });
});

gameArea.addEventListener("click", () => {
  if (!gameActive && timeLeft > 0) {
    startCountdown();
  } else if (gameActive) {
    score++;
    scoreDisplay.textContent = score;
  }
});

function startCountdown() {
  let count = 3;
  startText.textContent = count;
  countdownInterval = setInterval(() => {
    count--;
    if (count > 0) {
      startText.textContent = count;
    } else {
      clearInterval(countdownInterval);
      startText.textContent = "";
      startGame();
    }
  }, 1000);
}


function startGame() {
  gameActive = true;
  timerDisplay.textContent = timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft >= 0) {
      timerDisplay.textContent = timeLeft;
    }
    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}


function endGame() {
  clearInterval(timerInterval);
  gameActive = false;
  timeLeft = 0;
  timerDisplay.textContent = 0;

  const cps = totalTime > 0 ? (score / totalTime).toFixed(2) : 0;
  cpsDisplay.textContent = cps;
  startText.textContent = `Game Over! Your CPS: ${cps}`;
}

function resetGame() {
  clearInterval(timerInterval);
  clearInterval(countdownInterval);

  score = 0;
  scoreDisplay.textContent = 0;
  cpsDisplay.textContent = 0;

  timeLeft = totalTime;
  timerDisplay.textContent = timeLeft;

  startText.textContent = "Click to start"; 
  gameActive = false;
}

resetButton.addEventListener("click", resetGame);
