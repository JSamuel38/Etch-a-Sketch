const settings = document.querySelector('.settings');
const sizeSettings = document.createElement('div');
sizeSettings.classList.add('sizeSettings');
//Create a color picker
const colorPicker = document.createElement('input');
colorPicker.setAttribute('type', 'color');
colorPicker.setAttribute('class', 'colorPicker');
colorPicker.textContent = 'Pick a color';
settings.appendChild(colorPicker);
//Allow user to select a color
let pickedColor;
colorPicker.addEventListener('change', (e) => {
	pickedColor = e.target.value;
});

settings.appendChild(sizeSettings);
//Label for size
const sizeLabel = document.createElement('label');
sizeLabel.textContent = 'Size:';
sizeSettings.appendChild(sizeLabel);
//Allow user to selecet size
const sizeSelector = document.createElement('input');
sizeSelector.setAttribute('class', 'sizeSelector');
sizeSelector.setAttribute('type','number');
sizeSelector.setAttribute('min', '16');
sizeSelector.setAttribute('max', '64');
sizeSelector.setAttribute('step', '1');
sizeSelector.setAttribute('value', '16');
sizeSettings.appendChild(sizeSelector);
//Button to confirm size
const sizeButton = document.createElement('button');
sizeButton.setAttribute('class','sizeButton');
sizeButton.textContent = 'Confirm';
sizeSettings.appendChild(sizeButton);
sizeButton.addEventListener('click', () => {
	let containerSize = Math.pow(sizeSelector.value, 2);
	createContainer(containerSize);
});

const container = document.querySelector('.container');
//Create every pixel in the container of a selected size
function createContainer(containerSize) {
	container.replaceChildren();				//If the container has children, empty it
	for (let i = 0; i < containerSize; i++) {		//Add new children
		const pixel = document.createElement('div')
		pixel.addEventListener('mousedown', draw)
		pixel.addEventListener('mouseover', draw);
		container.appendChild(pixel);
	}
	const pixel = container.querySelectorAll('div');
	pixel.forEach((pixel) => {
		pixel.setAttribute('class', 'pixel');
		pixel.style.width = `${100 / Math.sqrt(containerSize)}%`; //Size of pixels
		pixel.style.height = `${100 / Math.sqrt(containerSize)}%`;//based on amount
	});
}
//Check if mouse clicked
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
//Draws if mouse is clicked
function draw(e) {
	if (e.type === 'mouseover' && !mouseDown) return;
	//Allow user to draw with selected color, default is black
	e.target.style.backgroundColor = pickedColor || 'black';
	console.log(e);
}
//Eraser button
const eraserButton = document.createElement('button');
eraserButton.setAttribute('class', 'eraserButton');
eraserButton.textContent = 'Eraser';
settings.appendChild(eraserButton);
//Turns "brush" into an eraser, makes color the same as canvas original color
eraserButton.addEventListener('click', () => {
	pickedColor = 'white';
});
//Clear button
const clearButton = document.createElement('button');
clearButton.setAttribute('class', 'clearButton');
clearButton.textContent = 'Clear';
settings.appendChild(clearButton);
//Clear the whole canvas
clearButton.addEventListener('click', () => {
	container.querySelectorAll('div').forEach((pixel) => {
		pixel.style.backgroundColor = 'white';
	});
});
//Creates default container
createContainer(256);