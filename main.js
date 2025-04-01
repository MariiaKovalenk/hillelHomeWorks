document.getElementById("buttonsWrapper").addEventListener("click", buttonsWrapperClicked);

function buttonsWrapperClicked(event) {
    if (event.target.tagName === "BUTTON") {
        alert(`Натиснуто кнопку: ${event.target.textContent}`);
    }
}