const hourSection = document.querySelector(".hour-section");
const minuteSection = document.querySelector(".minute-section");
const secondSection = document.querySelector(".second-section");

function setClock() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  updateDigit(hourSection.firstElementChild, hours[0]);
  updateDigit(hourSection.lastElementChild, hours[1]);
  updateDigit(minuteSection.firstElementChild, minutes[0]);
  updateDigit(minuteSection.lastElementChild, minutes[1]);
  updateDigit(secondSection.firstElementChild, seconds[0]);
  updateDigit(secondSection.lastElementChild, seconds[1]);
}

function updateDigit(e, newValue) {
  if (e.innerText !== newValue) {
    e.classList.add("change");

    setTimeout(() => {
      e.innerText = newValue;
      e.classList.remove("change");
    }, 300);
  }
}

(function startClock() {
  setClock();
  setInterval(setClock, 1000);
})();

document.addEventListener("DOMContentLoaded", () => {
  const digits = document.querySelectorAll(".digit");

  digitsChange(digits);
});

function getRandomColor(baseColor) {
  const minBrightness = 50;
  const variation = 30;
  let r = baseColor[0] + Math.random() * variation - variation / 2;
  let g = baseColor[1] + Math.random() * variation - variation / 2;
  let b = baseColor[2] + Math.random() * variation - variation / 2;
  r = Math.max(r, minBrightness);
  g = Math.max(g, minBrightness);
  b = Math.max(b, minBrightness);

  return `rgb(${r}, ${g}, ${b})`;
}

function digitsChange(digits) {
  const baseColor = [50, 100, 150];

  digits.forEach((digit) => {
    const randomRotate = (Math.random() * 15 - 10).toFixed(1);
    const shiftX = Math.random() * 2 - 5;
    const shiftY = Math.random() * 2 - 1;
    const color = getRandomColor(baseColor);

    digit.style.setProperty("--rotate", `${randomRotate}deg`);
    digit.style.setProperty("--shift-x", `${shiftX}px`);
    digit.style.setProperty("--shift-y", `${shiftY}px`);
    digit.style.setProperty("--color", color);
  });
}
