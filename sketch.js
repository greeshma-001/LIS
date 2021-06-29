

var astro,astroImage,astrogroup;
var score;
var gamestate,PLAY,END;


function preload() {

 

  bgimg = loadImage("mygamebg(1).jpg");
  astroImage=loadImage("pro8 astro.png");
 

}

function setup() {
  
  
  createCanvas(windowWidth,windowHeight);

  
  bg = createSprite(windowWidth,windowHeight);
  bg.addImage("bgimg", bgimg);
  bg.scale =1.2

  invground = createSprite(height / 2, 390, height, 10);
  invground.visible = false;


  astro=createSprite(400,500,50,50);
  astro.addImage(astroImage);
  astro.scale=0.4;

gamestate=1;
PLAY=1;
END=0;

}

function draw() {
 
  background(220);


  if (gamestate === PLAY) {
    
    bg.velocityY = -5;

    if (bg.y < 0) {
      bg.y = bg.height / 2;
    }
    if(keyDown(UP_ARROW)){
      astro.y=astro.y-2;
    }
    if(keyDown(DOWN_ARROW)){
      astro.y=astro.y+2;
    }
    if(keyDown(LEFT_ARROW)){
      astro.x=astro.x-2;
    }
    if(keyDown(RIGHT_ARROW)){
      astro.x=astro.x+2;
    }

  }

  if (gamestate === END) {
    bg.velocityY = 0;



  }

 



  drawSprites();
}

  

