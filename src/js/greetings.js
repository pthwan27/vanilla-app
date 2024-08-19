const loginForm = document.querySelector("#login_form");
const loginIdInput = document.querySelector("#login_form__id ");
const loginUserId = document.querySelector("#login_user_id");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (!savedUsername) {
  logout();
} else {
  login(savedUsername);
}

function login(username) {
  loginUserId.innerText = "Hello " + username;

  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginUserId.classList.remove(HIDDEN_CLASSNAME);
}

function logout() {
  //localStoreage 삭제 추가

  loginForm.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();

  const username = loginIdInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  login(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
