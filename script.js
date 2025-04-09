document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! I’ll get back to you soon.");
  this.reset();
});

// Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// Hamburger Menu Toggle
document.getElementById("hamburger").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("show");
});
