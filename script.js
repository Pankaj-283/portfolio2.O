// Typing effect
const roles = ["Developer", "Learner", "Creator"];
let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;
const typingElement = document.querySelector(".typing-role");

function type() {
  if (i < roles.length) {
    if (!isDeleting && j <= roles[i].length) {
      currentRole = roles[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentRole = roles[i].substring(0, j--);
    }

    typingElement.textContent = currentRole;

    if (j === roles[i].length + 1) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }

    if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      if (i === roles.length) i = 0;
    }
  }
  setTimeout(type, isDeleting ? 100 : 200);
}
type();

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Back to top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});