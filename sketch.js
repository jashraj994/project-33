function preload(){
backgroundImg = loadImage("snow3.jpg")
}
function setup() {
  createCanvas(1300,650);
  
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}