const cards = document.querySelectorAll	(".cards");
const timer = document.getElementById("timer");
const playerName = document.getElementById("player-name");
const startBtn = document.getElementById("start-btn");


let hasRevealCard  = false;
let boardBlocked = false;
let firstCard, secondCard;
let startTime;
let endTime;
let timerResults;

const results = [];

function openStartWindow() {
    const startWindow = document.getElementById("start-window");
    startWindow.style.display = "flex";
};

function closeStartWindow() {
    const startWindow = document.getElementById("start-window");
    if (playerName.value.trim() !=="") {
        startWindow.style.display = "none";
        startBtn.disable = true;
        mixCards();
    }
};

function playerNameCheck() {
    if (playerName.value.trim() !=="") {
        startBtn.removeAttribute("disabled");
    } else {
        startBtn.setAttribute("disabled", "disabled");
    }
};

playerName.addEventListener("input", playerNameCheck);

window.onload = openStartWindow;

startBtn.addEventListener("click", () => {
    if (playerName.value.trim() !=="") {
        closeStartWindow();
        mixCards();
    }
});

function startTimer() {
    if (!timerResults) {
        startTime = new Date().getTime();
        timerResults = setInterval(refreshTimer, 10);
    }
};

function stopTimer() {
    clearInterval(timerResults);
};

function refreshTimer() {
    const currentTime = new Date().getTime();
    const pastTime = currentTime - startTime;
    const milliseconds = pastTime % 1000;
    const seconds = Math.floor(pastTime / 1000) % 60;
    const minutes = Math.floor(pastTime / 1000 / 60);
    timer.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
};

function checkAllCardsOpen() {
    const revealCards = document.querySelectorAll('.cards.flip');
    if (revealCards.length === cards.length) {
        endTime = new Date().getTime();
        stopTimer();
        showGameTime();
    }
};

function revealCard() {
    if (boardBlocked) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasRevealCard) {
        hasRevealCard = true;
        firstCard = this;
        startTimer();
        return;
    }
    secondCard = this;
    verifyMatch();
};

function verifyMatch() {
    let match = firstCard.dataset.framework === secondCard.dataset.framework;

    match ? disableCards() : unflipCards();
};

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
};

function unflipCards() {
    boardBlocked = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
    }, 1000);
};

function showGameTime() {
    const showPlayerName = document.getElementById("player-name").value;
    const resultPlayerName = document.getElementById("results-player-name");
    const resultTime = document.getElementById("result-time");

    resultPlayerName.textContent = showPlayerName;

    const currentTime = new Date().getTime();
    const pastTime = endTime - startTime;
    const formattedTime = formatTime(pastTime);

    resultsShow();
}

