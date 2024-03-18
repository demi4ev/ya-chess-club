const membersItems = document.querySelector('.members__items');
const prevBtn = document.querySelector('.members__slider-btn-prev');
const nextBtn = document.querySelector('.members__slider-btn-next');
const cardCount = membersItems.childElementCount;
let slidesToShow = 1;
let currentIndex = 0;
let autoSlideInterval;

function updateSlidesToShow() {
  if (window.innerWidth >= 767) {
    slidesToShow = 3;
  } else {
    slidesToShow = 1;
  }
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex += slidesToShow;
    updateSlider();
  }, 4000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

function updateSlider() {
  const cardWidth = membersItems.querySelector('.members__item').offsetWidth;
  currentIndex %= cardCount;
  membersItems.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  updateStatus();
}

nextBtn.addEventListener('click', () => {
  stopAutoSlide();
  currentIndex += slidesToShow;
  updateSlider();
  startAutoSlide();
});

prevBtn.addEventListener('click', () => {
  stopAutoSlide();
  currentIndex -= slidesToShow;
  if (currentIndex < 0) {
    currentIndex = cardCount - slidesToShow;
  }
  updateSlider();
  startAutoSlide();
});

window.addEventListener('resize', () => {
  updateSlidesToShow();
  updateSlider();
});

function updateStatus() {
  const currentSlide = Math.floor(currentIndex / slidesToShow) + 1;
  const numerator = Math.min(cardCount, currentSlide * slidesToShow);
  document.querySelector('.members__slider-status-current').textContent = numerator;
  document.querySelector('.members__slider-status-total').textContent = cardCount;
}

updateSlidesToShow();
updateSlider();
startAutoSlide();