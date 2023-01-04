const container = document.querySelector(".container");
//Create every pixel in the container for a 16x16 canvas
for (let i = 0; i < 256; i++) {
	container.appendChild(document.createElement("div")); 
}

const containerDiv = container.querySelectorAll("div")
containerDiv.forEach((div) => {
	div.setAttribute("class", "pixel");
});