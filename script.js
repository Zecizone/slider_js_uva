// let dots = document.getElementsByClassName('dots-item'),
// dotsArea = document.getElementsByClassName('dots-block')[0],
// slides = document.getElementsByClassName('msg-column'),
// prevBtn = document.getElementsByClassName('left-but'),
// nextBtn = document.getElementsByClassName('right-but'),
// slideIndex = 1;

// showSlides(slideIndex) ;

// function showSlides (n) {
//     if (n < 1) {
//         slideIndex - slides.length;
//     } else if (n > slides.length) {
//         slideIndex = 1;
//     }
//     for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//     }
//     for (let i = 0; i < dots.length; i++) {
//         dots[i].classList.remove('active');
//     }
//     slides[slideIndex - 1].style.display = 'block';
//     dots[slideIndex - 1].classList.add('active');
//  }

//  function plusSlides (n) {
//     showSlides(slideIndex += n);
//  }
//  function currentSlide (n) {
//     showSlides(slideIndex = n);
//  }
//  prevBtn.onclick = function () {
//     plusSlides(-1);
//  }
//  nextBtn.onclick = function () {
//     plusSlides(1);
//  }
//  dotsArea.onclick = function (e) {
//     for (let i = 0; i < dots.length + 1; i++) {
//         if (e.target.classList.contains('dots-item') && e.target == dots[i - 1]) {
//             currentSlide(i);
//         }
//     }
//  }

