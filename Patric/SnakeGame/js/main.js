const canvas = document.getElementById('game'); //links the canvas tag to the object canvas in JavaScript
const ctx = canvas.getContext('2d'); //enables use of getContext tools in html

const BOX = 32;
// total size of playground is 608 x 608, there are 19 squares in each direction, that means that each small square is of size 32x32 so we make a vriable BOX = 32 to say the size of each little square

let foodCoords = {
    x: Math.floor(1 + 17 * Math.random()),
    y: 3
}
//Math.random funciton returns a randome value from 0 to 1 not including 1 or 0 
//Math.floor function cuts the decimal part of the number, t.i. if you have Math.floor(5.6459) = 5 

let snakeCoords = [];
snakeCoords[0] = {
    x: 9 * BOX,
    y: 10 * BOX
}

let myPlayground = new Image(); //creates and image object
myPlayground.src = "img/ground.png"; //shows the path to the image

let food = new Image();
food.src = "img/mango.png";

function drawGame() { //funciton for drawing the graphics
    ctx.drawImage(myPlayground, 0, 0); //draws the background
    ctx.drawImage(food, BOX * foodCoords.x, BOX * foodCoords.y); //draws the background

    for (let i = 0; i < snakeCoords.length; i++) {
        ctx.fillStyle = "green";
        ctx.fillRect(snakeCoords[i].x, snakeCoords[i].y, BOX, BOX);
    }


    snakeX = snakeCoords[0].x;
    snakeY = snakeCoords[0].y;

    snakeX += BOX;

    snakeCoords.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snakeCoords.unshift(newHead);
    console.log(snakeCoords);
}

myGame = setInterval(drawGame, 100); //refresh the drawn function each 100 ms. 