window.addEventListener("scroll", function(){
  const nav = document.querySelector("nav");

  if(window.scrollY > 50){
    nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
  } else {
    nav.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";
  }
});

window.addEventListener("load", () => {
  const reveals = document.querySelectorAll(".reveal");
  
  reveals.forEach(el => {
    el.classList.add("active");
  });
});


const elements = document.querySelectorAll(
  '.project-text, .project-img, .about h1, .about p, .polaroid, .services-title, .service-card, .section-title, .section-description'
);

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

elements.forEach(el => observer.observe(el));






