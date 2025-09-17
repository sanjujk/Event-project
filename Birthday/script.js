// Scroll animation reveal
const revealElements = document.querySelectorAll('.birthday-text, .birthday-img, .why-text, .why-img, .service-card');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
