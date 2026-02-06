const canvas = document.getElementById('game'); //links the canvas tag to the object canvas in JavaScript
const ctx = canvas.getContext('2d'); //enables use of getContext tools in html

let myPlayground = new Image(); //creates and image object
myPlayground.src = "img/ground.png"; //shows the path to the image

function drawGame() { //funciton for drawing the graphics
    ctx.drawImage(myPlayground, 0, 0); //draws the background
}

myGame = setInterval(drawGame, 100); //refresh the drawn function each 100 ms. 
