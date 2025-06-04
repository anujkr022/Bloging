// Change heading:

//================================  tour pakage custmor review

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3,
    },
  },
});

//================================   custmer review

//================================     shop

var swiper = new Swiper(".myShopSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

//================================    shop

//================================ navbar

var getHubergerIcon = document.getElementById("hamburger-menu");
var getHubergerCrossIcon = document.getElementById("hamburger-cross");
var getMobileMenu = document.getElementById("mobile-menu");

getHubergerIcon.addEventListener("click", function () {
  console.log("hello");
  getMobileMenu.style.display = "flex";
  setTimeout(function () {
    getMobileMenu.style.transform = "translateX(0%)"; // Slide in the menu
  }, 50); // Add a small delay for better transition effect
});

getHubergerCrossIcon.addEventListener("click", function () {
  console.log("hello");
  getMobileMenu.style.transform = "translateX(-100%)"; // Slide out the menu
  setTimeout(function () {
    getMobileMenu.style.display = "none";
  }, 300); // Wait for the transition to end before hiding
});

// Check if screen size changes to desktop view and hide mobile menu
window.addEventListener("resize", function () {
  if (window.innerWidth > 770) {
    getMobileMenu.style.display = "none";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const stickyOffset = navbar.offsetTop;

  const handleScroll = () => {
    if (window.pageYOffset >= stickyOffset) {
      if (!navbar.classList.contains("sticky")) {
        navbar.classList.add("sticky");
        navbar.classList.add("slide-down");
      }
    } else {
      navbar.classList.remove("sticky");
      navbar.classList.remove("slide-down");
    }
  };

  window.addEventListener("scroll", handleScroll);
});

// ================================ navbar

//================================   counting

window.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const duration = 3000; // Total animation duration (ms)
  const stepTime = 20; // Interval between updates (ms)

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = target / (duration / stepTime);

    const updateCounter = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count) + "+";
        setTimeout(updateCounter, stepTime);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCounter();
  });
});

//================================   counting

//================================  tour pakage

const slider = document.getElementById("slider");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  }
}

//================================  tour pakage

// ===================================== date

const dateInput = document.getElementById("dateInput");
const dateLabel = document.getElementById("dateLabel");
const clearButton = document.getElementById("clearDate");

dateInput.addEventListener("change", () => {
  const date = new Date(dateInput.value);
  if (!isNaN(date.getTime())) {
    const formatted = `${date.getDate().toString().padStart(2, "0")}-${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${date.getFullYear()}`;
    dateLabel.textContent = formatted;
  }
});

clearButton.addEventListener("click", () => {
  dateInput.value = "";
  dateLabel.textContent = "Date";
});
// date

// search
function searchFunction() {
  const query = document.getElementById("searchInput").value;
  alert("Search query: " + query);
}
// search

//blog-image slider

document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("sliderTrack");
  const items = track.querySelectorAll(".slider-item");
  let slideIndex = 0;

  function updateSlider() {
    const itemWidth = items[0].offsetWidth;
    track.style.transform = `translateX(-${slideIndex * itemWidth}px)`;
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % items.length;
    updateSlider();
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + items.length) % items.length;
    updateSlider();
  }

  document.getElementById("next").addEventListener("click", nextSlide);
  document.getElementById("prev").addEventListener("click", prevSlide);

  setInterval(nextSlide, 3000);

  window.addEventListener("resize", updateSlider);

  updateSlider(); // Initial call
});

//blog-image slider
