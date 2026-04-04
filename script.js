// Elements
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.getElementById("closeBtn");
const loginForm = document.getElementById("loginForm");
const errorMsg = document.getElementById("error");

// Open modal
loginBtn.onclick = (e) => {
  e.preventDefault(); // prevent default link behavior
  loginModal.style.display = "block";
};

// Close modal
closeBtn.onclick = () => {
  loginModal.style.display = "none";
};

// Close if clicked outside modal
window.onclick = (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
};

// Login logic
loginForm.onsubmit = (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Hardcoded admin credentials
  if (username === "admin" && password === "Pasupathi@13") {
    window.location.href = "admin.html"; // Redirect to dashboard
  } else {
    errorMsg.textContent = "Invalid credentials!";
  }
};
