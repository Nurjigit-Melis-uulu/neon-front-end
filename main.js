let button = document.querySelector("#button");
let lines = document.querySelectorAll(".line");
let buttonStatus = false;
let arrayOfDelay = [
  2,
  1,
  1.2,
  3,
  1.5,
  3,
  1.9,
  1.4,
  4.2,
  3.4,
  4,
  2,
  2,
  1,
  1.2,
  3,
  1.5,
  3,
  1.9,
  1.4,
  4.2,
  3.4,
  4,
  2,
  4.2,
  3.4,
  4,
  2
];

button.addEventListener("click", () => {
  check();
});

function check() {
  if (buttonStatus) {
    for (let i = 0; i < lines.length; i++) {
      let delay = null;
      lines[i].style.animation = "neon 2s 1 forwards";
      for (let i = 0; i < arrayOfDelay.length; i++) {
        const element = arrayOfDelay[i];
        lines[i].style.animationDelay = `${element}s`;
      }
    }
    button.innerHTML = "finish";
    buttonStatus = false;
  } else {
    for (let i = 0; i < lines.length; i++) {
      lines[i].style.animation = "neonStop 2s 1 forwards";
      for (let i = 0; i < arrayOfDelay.length; i++) {
        const element = arrayOfDelay[i];
        lines[i].style.animationDelay = `${element}s`;
      }
    }
    button.innerHTML = "play";
    buttonStatus = true;
  }
}
