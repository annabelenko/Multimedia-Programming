const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = 'green';

var rectWidth = 300;
var rectHeight = 100;
var xPos = (canvas.width - rectWidth) / 2; 
var yPos = canvas.height - rectHeight; 

ctx.fillRect(xPos,yPos,rectWidth,rectHeight); // add the grass

// Use a for loop to draw each blade of grass
for(var i = 0; i < canvas.width; i += 5) {
    // Draw a blade of grass as a rectangle
    ctx.fillRect(i, canvas.height - 110, 2, 20); 
}

// Set the font for caption
ctx.font = '14px Arial';

// Choose color of caption
ctx.fillStyle = '#FF009D';

// Add the caption text
ctx.fillText('Hey Peppa Pig', 100, 30);

// Body + Dress
ctx.beginPath();
ctx.fillStyle = '#ffcccc'; // Light pink
ctx.ellipse(150, 180, 30, 60, Math.PI / 1, 0, 2 * Math.PI);
ctx.fill();


// Head
ctx.beginPath();
ctx.ellipse(170, 100, 35, 35, Math.PI / 4, 0, 2 * Math.PI); 
ctx.ellipse(190, 97, 25, 35, Math.PI / 4, 0, 2 * Math.PI); 

ctx.fill();

// Nose
ctx.beginPath();
ctx.fillStyle = '#F49AD1'; // Light pink
ctx.ellipse(210, 85, 10, 20, Math.PI / -8, 0, 2 * Math.PI); 
ctx.fill();

// Eye
ctx.beginPath();
ctx.fillStyle = 'white'; // Eye color
ctx.arc(178, 90, 7, 0, Math.PI * 2, true); 
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'black'; // Pupil color
ctx.arc(180, 88, 3, 0, Math.PI * 2, true); 
ctx.fill();

// Smile
ctx.beginPath();
ctx.strokeStyle = 'black'; // Smile color
ctx.arc(185, 120, 7, 0, Math.PI, false); 
ctx.stroke();

// Legs
ctx.fillStyle = '#ffcccc'; 
ctx.fillRect(125, 210, 10, 50); 
ctx.fillRect(150, 210, 10, 50); 

// Arms
ctx.beginPath();
ctx.lineWidth = 7; 
ctx.strokeStyle = '#ffcccc'; // Arms color
ctx.moveTo(130, 180);
ctx.lineTo(110, 220);  
ctx.moveTo(170, 180);
ctx.lineTo(190, 220);  
ctx.stroke();
