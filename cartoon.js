const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = 'green';

var rectWidth = 300;
var rectHeight = 50;
var xPos = (canvas.width - rectWidth) / 2; 
var yPos = canvas.height - rectHeight; 

ctx.fillRect(xPos,yPos,rectWidth,rectHeight);

// Set the font for caption
ctx.font = '14px Arial';

// Choose color of caption
ctx.fillStyle = '#FF009D';

// Add the caption text
ctx.fillText('Hey Peppa Pig', 100, 30);

// Body
ctx.beginPath();
ctx.fillStyle = '#ffcccc'; // Light pink
ctx.ellipse(150, 180, 30, 60, Math.PI / 4, 0, 2 * Math.PI);
ctx.fill();

// Head
ctx.beginPath();
ctx.ellipse(180, 100, 35, 35, Math.PI / 4, 0, 2 * Math.PI); 
ctx.fill();

// Nose
ctx.beginPath();
ctx.ellipse(195, 110, 15, 8, Math.PI / 4, 0, 2 * Math.PI);
ctx.fill();

// Eye
ctx.beginPath();
ctx.fillStyle = 'white'; // Eye color
ctx.arc(188, 90, 7, 0, Math.PI * 2, true); 
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'black'; // Pupil color
ctx.arc(190, 88, 3, 0, Math.PI * 2, true); 
ctx.fill();

// Smile
ctx.beginPath();
ctx.strokeStyle = 'black'; // Smile color
ctx.arc(195, 120, 7, 0, Math.PI, false); 
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
