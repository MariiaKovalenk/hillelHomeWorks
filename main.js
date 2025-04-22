let timeLeft = 85;

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${min.toString().padStart(2,"0")}:${secs.toString().padStart(2,"0")}`;
}

function updateTimer(){
    const timerDisplay = document.getElementById("timer");
    timerDisplay.textContent = formatTime(timeLeft);

    if(timeLeft > 0) {
        timeLeft--;
        setTimeout(updateTimer, 1000);
    }
}

updateTimer();