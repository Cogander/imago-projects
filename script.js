const ADMIN_USER = "admin";
const ADMIN_PASS = "imago123";

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    localStorage.setItem("adminLogin", "true");
    window.location.href = "dashboard.html";
  } else {
    error.innerText = "Username atau password salah!";
  }
}

function logout() {
  localStorage.removeItem("adminLogin");
  window.location.href = "login.html";
}

if (window.location.pathname.includes("dashboard")) {
  if (!localStorage.getItem("adminLogin")) {
    window.location.href = "login.html";
  }
}
