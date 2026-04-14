document.body.classList.add("app");

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

const links = document.querySelectorAll("a[href^='#']");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const target = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(target);

        if (!targetSection) return;

        sections.forEach(sec => sec.classList.remove("active"));
        targetSection.classList.add("active");
        console.log("ACTIVE SECTIONS:");
        document.querySelectorAll(".section.active").forEach(s => {
            console.log(s.id);
        });
    });
});

const text = document.getElementById("weightText");
const input = document.getElementById("weightInput");

text.addEventListener("click", () => {
    text.style.display = "none";
    input.style.display = "inline";
    input.focus();
});

input.addEventListener("blur", () => {
    text.textContent = input.value;
    input.style.display = "none";
    text.style.display = "inline";
});