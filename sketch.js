var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1i,car2i,car3i,car4i,track;

var xPos=375;


function preload(){
  track=loadImage("images/forestBg2.jpg")
  car1i=loadImage ("images/winnie.gif")
  car2i=loadImage ("images/rabbit.png")
  car3i=loadImage ("images/tiger.png")
  car4i=loadImage ("images/car4.png")
  
  //track=loadImage("images/background.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState=== 2){
    game.end();
  }
}

