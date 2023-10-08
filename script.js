let slider = document.querySelector('.slider');
let slides = slider.querySelectorAll('.slide1, .slide2, .slide3');
let links = document.querySelectorAll('.lin');
let nextBtn = document.querySelector('.next-btn');
let prevBtn = document.querySelector('.prev-btn');
let dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
    slides[n].classList.add('active');

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active-dot');
  }
  dots[n].classList.add('active-dot');

  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('active-links');
  }
    links[n].classList.add('active-links');
};

prevBtn.addEventListener('click', function() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', function() {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
});

dots.forEach(function(dot, index) {
  dot.addEventListener('click', function() {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

links.forEach(function(link, index) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    currentSlide = index;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);