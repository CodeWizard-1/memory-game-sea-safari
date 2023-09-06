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
}

function closeStartWindow() {
    const startWindow = document.getElementById("start-window");
    if (playerName.value.trim() !=="") {
        startWindow.style.display = "none";
        startBtn.disable = true;
        mixCards();
    }
}
