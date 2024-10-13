let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrng = document.getElementById("wrng");
let guesses = document.getElementById("gesses");

let anwer = Math.floor(Math.random() * 100) + 1;
console.log(anwer);
let numGuesses = 0;

btn.addEventListener("click", () => {
  guessNumber();
});

function guessNumber() {
  if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
    wrng.textContent = "Please Enter Value between 1 to 100";
    wrng.style.color = "red";
  } else {
    numGuesses++;
    guesses.innerHTML = "No of Guess : " + numGuesses;

    if (input.value > anwer) {
      wrng.textContent = "You Guess Too High";
      wrng.style.color = "red";
      input.value = "";
    } else if (input.value < anwer) {
      wrng.textContent = "You Guess Too Low";
      wrng.style.color = "red";
      input.value = "";
    } else {
      wrng.textContent = "Congratulations You Guess the correct answer";
      wrng.style.color = "green";
      setTimeout(() => {
        resetGame();
      }, 5000);
    }
  }
}

function resetGame() {
  (input.value = ""), (numGuesses = 0);
  anwer = Math.floor(Math.random() * 100) + 1;
  console.log(anwer);
  guesses.innerHTML = "No of Guess : 0";
}
