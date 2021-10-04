
// initial function
function initial(){
   
  // get the canvas element
  const canvas  = document.getElementById('my-canvas');
  canvas.height = H = 600;
  canvas.width = W = 1000;

  // to draw on the canvas
   pen = canvas.getContext('2d');
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
     
    // snake knows how to update itself
    updateSnake : function(){
      // console.log('Updating snake');

      // // extract a cell from last of array and add it to the front
      // this.cells.pop();
      // var headX = this.cells[0].x;
      // var headY = this.cells[0].y;

      // // move ahead by 1 in x co-ordinate
      // var X = headX+1;
      // var Y = headY;
      // this.cells.unshift({x:X, y:Y});

      // update snake according to the direction property

      this.cells.pop();

      var headX = this.cells[0].x;
      var headY = this.cells[0].y;
      var nextX , nextY;
      if(this.direction == "right"){
          nextX = headX+1 ;
          nextY = headY;
      }
      else if(this.direction == "left"){
        nextX = headX-1;
        nextY = headY;
      }
      else if(this.direction == "down"){
        nextX = headX;
        nextY = headY+1;
      }
      else if(this.direction == "Up"){
        nextX = headX;
        nextY = headY-1;
      }

      this.cells.unshift({x:nextX , y:nextY});
    }

  };

  // call the create snake function to fill the cells
  snake.createSnake();

  // Add a event listener on document object
  function keyPressed(event){
    
    if(event.key == "ArrowRight"){
       // update direction of snake to right'
       snake.direction = "right";
    }
    else if(event.key == "ArrowLeft"){
      snake.direction = "left";
    }
    else if(event.key == "ArrowDown"){
      snake.direction = "down";
    }
    else if(event.key == "ArrowUp"){
      snake.direction = "Up"
    }
    console.log(snake.direction);
  }
  document.addEventListener('keydown',keyPressed);

}

function draw(){
 
  // draw function to draw the snake on canvas

  // erase the old frame first
  pen.clearRect(0,0,W,H);
  snake.drawSnake();
}


// function to update snake accordingly

function update(){
  snake.updateSnake();


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

