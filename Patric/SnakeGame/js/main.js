const canvas = document.getElementById('game'); //links the canvas tag to the object canvas in JavaScript
const ctx = canvas.getContext('2d'); //enables use of getContext tools in html

const BOX = 32;
// total size of playground is 608 x 608, there are 19 squares in each direction, that means that each small square is of size 32x32

let foodCoords = {
    x: 1,
    y: 3
}

let myPlayground = new Image(); //creates and image object
myPlayground.src = "img/ground.png"; //shows the path to the image

let food = new Image();
food.src = "img/mango.png";

function drawGame() { //funciton for drawing the graphics
    ctx.drawImage(myPlayground, 0, 0); //draws the background
    ctx.drawImage(food, BOX*foodCoords.x, BOX*foodCoords.y); //draws the background


}

myGame = setInterval(drawGame, 100); //refresh the drawn function each 100 ms. 