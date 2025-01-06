let counter = 0;
let whistleLimit;

function setWhistleLimit() {
    whistleLimit = parseInt(prompt("Please enter the whistle limit:"), 10);
    if (isNaN(whistleLimit) || whistleLimit <= 0) {
        alert("Invalid input. Please enter a positive number.");
        setWhistleLimit();
    }
}

function incrementCounter() {
    counter++;
    document.getElementById("whistle-count").textContent = `Current number of Whistles: ${counter}`;
    if (counter >= whistleLimit) {
        alert("Whistle limit reached, Turn off the cooker.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setWhistleLimit();
    const button = document.getElementById("whistle-button");
    button.addEventListener("click", incrementCounter);
});