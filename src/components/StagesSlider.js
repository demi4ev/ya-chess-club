document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 767) {
    const container = document.querySelector(".stages__container");
    const items = document.querySelectorAll(".stages__item");
    const controls = document.querySelector(".stages__controls");
    const prevBtn = document.querySelector(".stages__slider-btn-prev");
    const nextBtn = document.querySelector(".stages__slider-btn-next");
    const pagination = document.querySelector(".stages__pagination");
    const itemCount = items.length;
    const slidesPerPage = 1;
    const slidesPerGroup = 1;

    let currentIndex = 0;

    const slides = [
      [0, 1],
      [2],
      [3, 4],
      [5],
      [6]
    ];

    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement("button");
      dot.classList.add("stages__pagination-dot");
      dot.setAttribute("data-index", i);
      pagination.appendChild(dot);
    }

    const dots = document.querySelectorAll(".stages__pagination-dot");

    function updatePagination() {
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[currentIndex].classList.add("active");
    }

    function updateSlider() {
      container.innerHTML = '';
      slides[currentIndex].forEach((index) => {
        container.appendChild(items[index].cloneNode(true));
      });
      updatePagination();
    }

    function updateButtonState() {
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === slides.length - 1;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
      updateButtonState();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
      updateButtonState();
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        currentIndex = parseInt(dot.getAttribute("data-index"));
        updateSlider();
      });
    });

    updateSlider();
    updateButtonState();
  }
});