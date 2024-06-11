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



// left arrow select and click event
const arrow_left = document.querySelector(".arrow_left")
arrow_left.addEventListener('click', arrow_left_click)
// alert for left arrow click
function arrow_left_click () {alert ('bonjour gauche')}

// right arrow select and click event
const arrow_right = document.querySelector(".arrow_right")
arrow_right.addEventListener('click', arrow_right_click)
// alert for right arrow click
function arrow_right_click () {alert ('bonjour droite')}

// display dots
const dots = document.querySelector(".dots");
let dotsIndex = 0;

const displayDots = () => {
	dots.innerHTML = ""; // empty all elements
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