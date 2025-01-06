let counter = 0;
const whistleLimit = 5; // Set the whistle limit

function incrementCounter() {
    counter++;
    if (counter >= whistleLimit) {
        alert("Whistle limit reached, Turn off the cooker.");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("whistle-button");
    button.addEventListener("click", incrementCounter);
});