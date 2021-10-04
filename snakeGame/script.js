
// initial function
function initial(){
   
  // get the canvas element
  const canvas  = document.getElementById('my-canvas');
  canvas.height = H = 600;
  canvas.width = W = 1000;

  // to draw on the canvas
  const  pen = canvas.getContext('2d');
  cellSize = 66;
  // create the snake as an object

  snake = {
    init_len : 5 , 
    color:"blue",
    direction:"right",
    cells : [],

    // function to fill the cells
    createSnake : function(){
      for(let i = this.init_len ; i > 0 ; i--){
         this.cells.push({x:i , y:0});
      }
    },

    // draw the snake on the canvas

    drawSnake : function(){
      for(let i = 0 ; i < this.cells.length ; i++){
        pen.fillStyle = this.color;
        pen.fillRect(this.cells[i].x*cellSize , this.cells[i].y*cellSize,cellSize-1 , cellSize-1);
       
      }
    },

  };

  // call the create snake function to fill the cells
  snake.createSnake();



}

function draw(){
 
  // draw function to draw the snake on canvas
  snake.drawSnake();
}


// function to update snake accordingly

function update(){



}

function gameLoop(){
 
  // call update and draw function repeatedly
  draw();
  update();

}

// call the initial function

initial();

// implement the game loop
var f = setInterval(gameLoop,500);

