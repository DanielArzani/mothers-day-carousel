// Variables
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true; // for auto sliding
const intervalTime = 4000;
let slideInterval;

// Slide to next image
const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // If there is no next element with the class of side, go back to first slide
    // Add current to slide
    slides[0].classList.add('current');
  }
  // A little bit after the class has been added to the current slide, remove it
  setTimeout(() => {
    current.classList.remove('current');
  });
};

// Slide to prev image
const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  // A little bit after the class has been added to the current slide, remove it
  setTimeout(() => {
    current.classList.remove('current');
  });
};

// Manual Sliding
next.addEventListener('click', (e) => {
  nextSlide();
  if (auto) {
    // Reset interval when manually changing slide
    clearInterval(slideInterval);
    // Restart interval function
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', (e) => {
  prevSlide();
  if (auto) {
    // Reset interval when manually changing slide
    clearInterval(slideInterval);
    // Restart interval function
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto Sliding
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
