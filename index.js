const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

let index = 0;
let intervalId;

// CREATE DOTS
const dots = [];

slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    dot.onclick = () => {
        index = i;
        showSlide(index);
        resetAutoSlide();
    };

    dotsContainer.appendChild(dot);
    dots.push(dot);
});

function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[i].classList.add("active");
    dots[i].classList.add("active");
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

function startAutoSlide() {
    intervalId = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
    clearInterval(intervalId);
    startAutoSlide();
}

/* buttons */
document.querySelector(".next").onclick = () => {
    nextSlide();
    resetAutoSlide();
};

document.querySelector(".prev").onclick = () => {
    prevSlide();
    resetAutoSlide();
};

/* init */
showSlide(0);
startAutoSlide();