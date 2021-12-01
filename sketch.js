var meteor,meteorImg;
var star,starImg;
var rocket,rocketImg;
var space,spaceImg;

function preload(){
meteorImg = loadImage("meteor.png");
starImg = loadImage("Star.jpg");
rocketImg = loadImage("rocket.jpg")
spaceImg = loadImage("background.jpg")

}

function setup() {
createCanvas(600,600)
space = createSprite(400,300);
space.addImage("background",spaceImg);
space.velocityY = 1;
rocket = createSprite(200,400,50,50)
rocket.addImage("rocket",rocketImg)
rocket.scale = 0.3;
}

function draw() {
if(space.y > 400){
    space.y = 300;
}
 drawSprites();
}