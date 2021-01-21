var starImg, starImage, falingstars, falingstarsImage, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	starImage = loadImage("starImage.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");
	falingstarsImage = loadImage("faling stars.png");

}

function setup() {
	createCanvas(800, 750);

	fairy = createSprite(130, 520,20,20);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairyVoice.play();

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	falingstars = createSprite(400,-400,10,10);

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	star.x = starBody.position.x;
	World.add(world, starBody);
	
	Engine.run(engine);


}


function draw() {
  background(bgImg);


	 if(star.y>500 && fairy.x>499)
	{
	  star.velocityY = 0;
	  star.addImage("starImage", starImage);
	  star.changeImage("starImage", starImage);
	  star.scale = 0.04;
	  
	  falingstars.addImage(falingstarsImage);
	  falingstars.scale = 2;
	  falingstars.velocityY = 5;
	  fairyVoice.stop ();
	}


  drawSprites();

}

function keyPressed() {

 //write code here
if(keyCode === LEFT_ARROW)
 {
  fairy.x=fairy.x-20;
 }
if(keyCode === 	RIGHT_ARROW)
 {
  fairy.x=fairy.x+20;
 }
if(keyCode === DOWN_ARROW)
 {
  star.velocityY = 5;
 }

}
