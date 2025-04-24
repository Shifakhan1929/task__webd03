
let slides = document.querySelectorAll('.slide');
let nextBtn = document.getElementById('nextBtn');
let prevBtn = document.getElementById('prevBtn');


let currentIndex = 0;


function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active'); 
  }
  slides[index].classList.add('active');
}


function showNextSlide() {
  currentIndex = currentIndex + 1;
  if (currentIndex >= slides.length) {
    currentIndex = 0; 
  }
  showSlide(currentIndex);
}


function showPrevSlide() {
  currentIndex = currentIndex - 1;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1; 
  }
  showSlide(currentIndex);
}


let interval = setInterval(showNextSlide, 5000);

nextBtn.onclick = function() {
  showNextSlide();
  resetInterval();
};


prevBtn.onclick = function() {
  showPrevSlide();
  resetInterval();
};

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(showNextSlide, 5000);
}
