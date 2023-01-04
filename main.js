//Create a color picker
const colorPicker = document.createElement('input');
colorPicker.setAttribute('type', 'color');
colorPicker.textContent = 'Pick a color';
document.body.appendChild(colorPicker);
//Allow user to select a color
let pickedColor;
colorPicker.addEventListener('change', (e) => {
	pickedColor = e.target.value;
});
//Allow user to selecet size
const sizeSelector = document.createElement('input');
sizeSelector.setAttribute('type','range');
sizeSelector.setAttribute('min', '16');
sizeSelector.setAttribute('max', '64');
sizeSelector.setAttribute('step', '1');
sizeSelector.setAttribute('value', '6');
document.body.appendChild(sizeSelector);
//Button to confirm size
const sizeButton = document.createElement('button');
sizeButton.textContent = 'Confirm Size';
document.body.appendChild(sizeButton);
sizeButton.addEventListener('click', () => {
	let containerSize = Math.pow(sizeSelector.value, 2);
	createContainer(containerSize);
})

const container = document.querySelector(".container");
//Create every pixel in the container of a selected size
function createContainer(containerSize) {
	container.replaceChildren();				//If the container has children, empty it
	for (let i = 0; i < containerSize; i++) {		//Add new children
		container.appendChild(document.createElement("div")); 
	}
	const pixel = container.querySelectorAll("div");
	pixel.forEach((pixel) => {
		pixel.setAttribute("class", "pixel");
		pixel.style.width = `${16 / Math.sqrt(containerSize)}rem`; //Size pixels
		pixel.style.height = `${16 / Math.sqrt(containerSize)}rem`;//based on amount
	});
	//Allow user to draw with selected color, default is black
	pixel.forEach((pixel) => {
		pixel.addEventListener("mouseover", () => {		
			pixel.style.backgroundColor = pickedColor || "black";
		});
	});
}
createContainer(256);