//Create variables here
var dogstand,foodref,fooddata,dogsit
var database
function preload()
{
	//load images here
dogstand=loadImage("images/dogImg.png")
dogsit=loadImage("images/dogImg1.png")
}

function setup() {
  database = firebase.database();
  console.log(database);
  
  createCanvas(800, 700);
  
// create sprite
dog=createSprite(400,350,50,50)
dog.addImage(dogstand)
foodref=database.ref("Food")
foodref.on("value",readData)
 
}

function draw() {  
background("green")
if(keyDown(UP_ARROW)){
  writeData(fooddata)
  dog.addImage(dogsit)
  }
drawSprites();
  //add styles here

}

function readData (data){
fooddata=data.val()
}

function writeData(x){
if (x <= 0){
  x=0
}
else{
  x=x-1
} 
database.ref("/").update({
  Food:x
})
}