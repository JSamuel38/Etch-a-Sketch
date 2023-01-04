const colorPicker = document.createElement('input');
colorPicker.setAttribute('type', 'color');
colorPicker.textContent = 'Pick a color';
document.body.appendChild(colorPicker);

let pickedColor;
colorPicker.addEventListener('change', (e) => {
	pickedColor = e.target.value;
});

const container = document.querySelector(".container");
let containerSize = 256;
//Create every pixel in the container for a 16x16 canvas
for (let i = 0; i < containerSize; i++) {
	container.appendChild(document.createElement("div")); 
}

const pixel = container.querySelectorAll("div")
pixel.forEach((div) => {
	div.setAttribute("class", "pixel");
});

pixel.forEach((pixel) => {
  pixel.addEventListener("mouseover", () => {
		pixel.style.backgroundColor = pickedColor || "black";
	});
});