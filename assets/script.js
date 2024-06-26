const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Variables

const dots = document.querySelector(".dots");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
let dotsIndex = 0;

// Function to display navigation dots
const displayDots = () => {
  dots.innerHTML = ""; // empty elements
  for (let i = 0; i < slides.length; i++) {
    const div = document.createElement("div");
    div.classList.add("dot");
    dots.appendChild(div);
    if (i === dotsIndex) {
      div.classList.add("dot_selected");
    }
  }
};

displayDots();

// dots selection
const listDots = document.querySelectorAll(".dots .dot");

// right click function
const handleRightClick = () => {
  if (listDots.length > 0) {
    listDots[dotsIndex].classList.remove("dot_selected");
    dotsIndex++;
    if (dotsIndex >= slides.length) {
      dotsIndex = 0;
	}
    listDots[dotsIndex].classList.add("dot_selected"); 
    bannerImg.src = "./assets/images/slideshow/" + slides[dotsIndex].image; // image update
    bannerText.innerHTML = slides[dotsIndex].tagLine; // text update
  }
};

arrowRight.addEventListener("click", handleRightClick);

// left click function
const handleLeftClick = () => {
  if (listDots.length > 0) {
    listDots[dotsIndex].classList.remove("dot_selected");
    dotsIndex--;
    if (dotsIndex < 0) {
      dotsIndex = slides.length - 1;
    }
    listDots[dotsIndex].classList.add("dot_selected");
    bannerImg.src = "./assets/images/slideshow/" + slides[dotsIndex].image;
    bannerText.innerHTML = slides[dotsIndex].tagLine;
  }
};

arrowLeft.addEventListener("click", handleLeftClick);