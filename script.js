const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;
let interval = setInterval(showNextSlide, 5000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function showPrevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}


nextBtn.addEventListener('click', () => {
  showNextSlide();
  resetInterval();
});

prevBtn.addEventListener('click', () => {
  showPrevSlide();
  resetInterval();
});


function resetInterval() {
  clearInterval(interval);
  interval = setInterval(showNextSlide, 3000);
}
