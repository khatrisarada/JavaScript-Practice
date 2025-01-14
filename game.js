const readline = require("readline"); 

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Generate a random number between 1 and 50
const randomNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 0;

console.log("Welcome to the Number Guessing Game!");
console.log("Guess a number between 1 and 50.\n");

// Function to handle user guesses
const askGuess = () => {
  rl.question("Enter your guess: ", (input) => {
    const userGuess = parseInt(input);
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 50) {
      console.log(" Please enter a valid number between 1 and 50.");
    } else if (userGuess === randomNumber) {
      console.log(
        `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts!`
      );
      rl.close(); // End the program
      return;
    } else if (userGuess < randomNumber) {
      console.log("Too low! Try again.");
    } else {
      console.log(" Too high! Try again.");
    }

    // Recursive call to continue the game
    askGuess();
  });
};

// Start the game
askGuess();
