const loginForm = document.querySelector("#login_form");
const logoutForm = document.querySelector("#logout_form");

const loginIdInput = document.querySelector("#login_form_id ");
const loginUserId = document.querySelector("#login_user_id");
const tooltipText = document.querySelector("#tooltiptext");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (!savedUsername) {
  logout();
} else {
  login(savedUsername);
}

function login(username) {
  loginUserId.innerText = username;
  tooltipText.innerText = username;

  loginForm.classList.add(HIDDEN_CLASSNAME);
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
}
function onLoginSubmit(event) {
  event.preventDefault();

  const username = loginIdInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  login(username);
}

function logout() {
  tooltipText.value = "";
  loginIdInput.value = "";
  localStorage.removeItem(USERNAME_KEY);

  loginForm.classList.remove(HIDDEN_CLASSNAME);
  logoutForm.classList.add(HIDDEN_CLASSNAME);
}

function onLogoutSumbmit(event) {
  event.preventDefault();

  const username = localStorage.getItem(USERNAME_KEY);

  if (!username) {
    return;
  }
  localStorage.setItem(USERNAME_KEY, username);

  logout(username);
}

document.addEventListener("DOMContentLoaded", function () {
  loginUserId.addEventListener("mouseover", function (event) {
    tooltipText.textContent = loginUserId.textContent;
    tooltipText.style.left = `${event.pageX}px`;
    tooltipText.style.top = `${event.pageY + 20}px`;
    tooltipText.classList.add("show");
  });

  loginUserId.addEventListener("mouseout", function () {
    tooltipText.classList.remove("show"); // 팝업 숨김
  });
});

loginForm.addEventListener("submit", onLoginSubmit);
logoutForm.addEventListener("submit", onLogoutSumbmit);
