window.onload = function() {
  document.getElementById("content").style.display = "block";
  document.getElementById("loading").style.display = "none";

  const slides = document.getElementsByClassName("slide")

  const observer = new IntersectionObserver(slides => {
    slides.forEach(entry => {
      const slide = entry.target
  
      if (entry.isIntersecting) {
        slide.classList.add('motion');
        return;
      }
  
      slide.classList.remove('motion');
    });
  });
  
  Array.from(slides).forEach((slide) => observer.observe(slide));
}