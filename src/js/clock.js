const hourSection = document.querySelector(".hour-section");
const minuteSection = document.querySelector(".minute-section");

function setClock() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  updateDigit(hourSection.firstElementChild, hours[0]);
  updateDigit(hourSection.lastElementChild, hours[1]);
  updateDigit(minuteSection.firstElementChild, minutes[0]);
  updateDigit(minuteSection.lastElementChild, minutes[1]);
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
