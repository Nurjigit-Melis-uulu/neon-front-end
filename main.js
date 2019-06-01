let button = document.querySelector("#button");
let lines = document.querySelectorAll(".line");
let buttonStatus = false;

button.addEventListener("click", () => {
  check();
});

function check() {
  if (buttonStatus) {
    for (let i = 0; i < lines.length; i++) {
      lines[i].style.animation = "neon 2s 1 forwards";
    }
    button.innerHTML = "finish";
    buttonStatus = false;
  } else {
    for (let i = 0; i < lines.length; i++) {
      lines[i].style.animation = "neonStop 2s 1 forwards";
    }
    button.innerHTML = "play";
    buttonStatus = true;
  }
}
