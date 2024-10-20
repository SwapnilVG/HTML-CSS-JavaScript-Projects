const typingText = document.querySelector(".typing-text p");
const input = document.querySelector(".wrapper .input-field");
const time = document.querySelector(".time span b");
const mistakes = document.querySelector(".mistake span");
const wpm = document.querySelector(".wpm span");
const cpm = document.querySelector(".cpm span");
const btn = document.querySelector("button");

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistake = 0;
let isTyping = false;

function loadParagraph() {
  const paragraph = [
    "Avoid daydreaming about the years to come.",
    "You are the most important person in your whole life.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Only demonstrate your strength when it’s really required.",
    "Subscribe to Drop X Out",
  ];

  const randomIndex = Math.floor(Math.random() * paragraph.length);
  typingText.innerHTML = ""; // Clear previous paragraph

  for (const char of paragraph[randomIndex]) {
    const span = `<span>${char}</span>`;
    typingText.innerHTML += span; // Append each character as span
  }

  typingText.querySelectorAll("span")[0].classList.add("active");

  document.addEventListener("keydown", () => {
    input.focus(); // Focus input on any key press
  });

  typingText.addEventListener("click", () => {
    input.focus(); // Focus input on clicking the paragraph
  });
}

function initTyping() {
  const char = typingText.querySelectorAll("span");
  const typedChar = input.value.charAt(charIndex);

  if (charIndex < char.length && timeLeft > 0) {
    if (!isTyping) {
      timer = setInterval(initTime, 1000);
      isTyping = true;
    }

    if (char[charIndex].innerHTML === typedChar) {
      char[charIndex].classList.add("correct");
    } else {
      char[charIndex].classList.add("incorrect");
      mistake++;
    }

    charIndex++;

    mistakes.innerText = mistake;
    cpm.innerText = charIndex - mistake;
  } else {
    clearInterval(timer); // Stop timer when typing is done
    input.value = ""; // Clear input field
  }
}

function initTime() {
  if (timeLeft > 0) {
    timeLeft--;
    time.innerText = timeLeft;
    const wpmVal = Math.round(
      (charIndex - mistake) / 5 / ((maxTime - timeLeft) / 60)
    );
    wpm.innerText = wpmVal;
  } else {
    clearInterval(timer);
  }
}

function reset() {
  loadParagraph();
  clearInterval(timer);
  timeLeft = maxTime;
  time.innerText = timeLeft;
  input.value = "";
  charIndex = 0;
  mistake = 0;
  isTyping = false;
  wpm.innerText = 0;
  cpm.innerText = 0;
  mistakes.innerText = 0;
}

input.addEventListener("input", initTyping);
btn.addEventListener("click", reset);

// Load the first paragraph when the page loads
loadParagraph();
