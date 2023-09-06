const cards = document.querySelectorAll	(".cards");
const timer = document.getElementById("timer");
const playerName = document.getElementById("player-name");
const startBtn = document.getElementById("start-btn");


let revealCard  = false;
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
        startTime = new Data().getTime();
        timerResults = setInterval(updateTimer, 10);
    }
};

function stopTimer() {
    clearInterval(timerResults);
};

