var ball,img,paddle;
function preload() {
  img= loadImage("ball.png");
  paddle= loadImage("paddle.png");
  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(50,200,20,20);
  
  paddle1 = createSprite(350,200,10,90);
  
  /* assign the images to the sprites */
  ball.addImage(img);
  
  paddle1.addImage(paddle);
  paddle1.scale=1.2;
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX=9;
  ball.setCollider("circle",0,0,20);
  paddle1.setCollider("rectangle",0,0,20,90);
}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edges= createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);

  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle1, randomVelocity);
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
    paddle1.y=paddle1.y-20;
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle1.y=paddle1.y+20;
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY=random(-4,4);
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

