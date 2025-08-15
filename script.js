// Alert on load
window.onload = () => {
  alert("Welcome to the Skills Test!");
  loadStoredFormData();
  updateStudentCount();
};

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Form submitted successfully!";
  formMessage.style.color = "green";

  // Save to localStorage
  localStorage.setItem("submittedFormData", JSON.stringify({ name, email, message }));
  loadStoredFormData();
});

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Add Student
document.getElementById("addStudentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("newName").value.trim();
  const age = document.getElementById("newAge").value.trim();
  const skill = document.getElementById("newSkill").value.trim();

  if (!name || !age || !skill) return;

  const table = document.getElementById("studentTable").querySelector("tbody");
  const row = table.insertRow();
  row.innerHTML = `<td>${name}</td><td>${age}</td><td>${skill}</td>`;

  document.getElementById("newName").value = "";
  document.getElementById("newAge").value = "";
  document.getElementById("newSkill").value = "";

  updateStudentCount();
});

function updateStudentCount() {
  const table = document.getElementById("studentTable").querySelector("tbody");
  document.getElementById("studentCount").textContent = table.rows.length;
}

// Load submitted form data from localStorage
function loadStoredFormData() {
  const data = JSON.parse(localStorage.getItem("submittedFormData"));
  const display = document.getElementById("storedData");
  if (data) {
    display.innerHTML = `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `;
  } else {
    display.innerHTML = "<p>No form data submitted yet.</p>";
  }
}

// Smooth scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
