const canvas = document.getElementById('game'); //links the canvas tag to the object canvas in JavaScript
const ctx = canvas.getContext('2d'); //enables use of getContext tools in html

const BOX = 32;
// total size of playground is 608 x 608, there are 19 squares in each direction, that means that each small square is of size 32x32 so we make a vriable BOX = 32 to say the size of each little square

let foodCoords = {
    x: BOX * Math.floor(1 + 17 * Math.random()),
    y: BOX * Math.floor(3 + 15 * Math.random())
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

let dir = '';
let score = 0;

document.addEventListener("keydown", (e) => {
    if (e.code == 'KeyD' && dir != "left") dir = 'right';
    if (e.code == 'KeyA' && dir != "right") dir = 'left';
    if (e.code == 'KeyW' && dir != "down") dir = 'up';
    if (e.code == 'KeyS' && dir != "up") dir = 'down';
});

// document.addEventListener("keyup", (e) => {
//     dir = '';
// });

function drawGame() { //funciton for drawing the graphics
    ctx.drawImage(myPlayground, 0, 0); //draws the background
    ctx.drawImage(food, foodCoords.x, foodCoords.y); //draws the background

    ctx.font = "50px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${score}`, BOX, 2 * BOX);

    for (let i = 0; i < snakeCoords.length; i++) { //cycle for drawing all the elements of the snake
        ctx.fillStyle = "green";
        ctx.fillRect(snakeCoords[i].x, snakeCoords[i].y, BOX, BOX);
    }


    snakeX = snakeCoords[0].x; // snakeX is the temporary variable which stores the copy of the snake head x position
    snakeY = snakeCoords[0].y;

    if (snakeX > 17 * BOX || snakeX < 1 * BOX || snakeY > 17 * BOX || snakeY < 3 * BOX) {
        ctx.font = "50px Arial";
        ctx.fillStyle = "red";
        ctx.fillText(`GAME OVER!`, 5 * BOX, 11 * BOX);
        clearInterval(myGame);
    }

    if (dir == 'right') snakeX += BOX; // calculation of a new head position, snake moves to the right
    if (dir == 'left') snakeX -= BOX;
    if (dir == 'up') snakeY -= BOX;
    if (dir == 'down') snakeY += BOX;

    if (snakeX == foodCoords.x && snakeY == foodCoords.y) {
        foodCoords = {
            x: BOX * Math.floor(1 + 17 * Math.random()),
            y: BOX * Math.floor(3 + 15 * Math.random())
        }
        score++;
    } else {
        snakeCoords.pop(); // POP command deletes the last element in the array
    }

    let newHead = { //the new head is defined as an object
        x: snakeX,
        y: snakeY
    }

    hasSnakeEatenItself(snakeCoords, newHead);

    snakeCoords.unshift(newHead); // coordinates of new head are placed in the beginning of the array to display the snake movement.
}

myGame = setInterval(drawGame, 100); //refresh the drawn function each 100 ms. 

function hasSnakeEatenItself(snake, head) {
    for (let i = 0; i < snake.length; i++) {
        if (snake[i].x == head.x && snake[i].y == head.y) {
            ctx.font = "50px Arial";
            ctx.fillStyle = "orange";
            ctx.fillText(`GAME OVER!`, 5 * BOX, 11 * BOX);
            clearInterval(myGame);
        }
    }
}