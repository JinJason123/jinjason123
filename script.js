// Select the canvas and get the 2D rendering context
const canvas = document.getElementById('sceneCanvas');
const ctx = canvas.getContext('2d');

// Check if the canvas and context are loaded properly
console.log("Canvas initialized:", canvas);
console.log("Context:", ctx);

// Load background image
const background = new Image();
background.src = 'images/background.jpg'; // Ensure this path matches your image filename

// Draw the background once it loads
background.onload = function() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
};
