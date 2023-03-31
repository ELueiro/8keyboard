const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"];

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1));
}

function getRandomKey() {
  return keys[getRandomNumber(keys.length - 1)];
}

function targetRandomKey() {
  const key = document.getElementById(getRandomKey());
  key.classList.add("selected");
}

document.addEventListener("keyup", (event) => {
  const keyPressed = event.key;
  const keyElement = document.getElementById(keyPressed.toUpperCase());  
  const highlightedKey = document.querySelector(".selected");  
  keyElement.classList.add("hit");
  keyElement.addEventListener("animationend", () => {
    keyElement.classList.remove("hit");
  });
  if (keyPressed.toUpperCase() == highlightedKey.innerHTML) {
    highlightedKey.classList.remove("selected");
    targetRandomKey();
  }
});

targetRandomKey();
