let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 3;

function makeGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const feedback = document.getElementById('feedback');
    const attemptsLeft = document.getElementById('attempts');

    // Validate user input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    // Check the guess
    if (userGuess === randomNumber) {
        feedback.textContent = "Congratulations! You guessed the correct number!";
        disableGame();
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Your guess is too low.";
    } else {
        feedback.textContent = "Your guess is too high.";
    }

    // Decrease the attempts and check if game is over
    attempts--;
    attemptsLeft.textContent = `Attempts Left: ${attempts}`;

    if (attempts === 0) {
        feedback.textContent += " Game Over! The correct number was " + randomNumber + ".";
        disableGame();
    }
}

function disableGame() {
    document.getElementById('userGuess').disabled = true;
    document.querySelector('button').disabled = true;
}
