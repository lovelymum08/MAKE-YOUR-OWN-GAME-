var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2,player3,player4;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

var obstacleGroup,obstacle,obstacleImage;

function preload(){
  back_img = loadImage("forest.jpg");
  player_img = loadImage("basket2.png");
  fruit1_img = loadImage("Cotton.png");
  fruit2_img = loadImage("Eraser-1.png");
  fruit3_img = loadImage("cinnamon1.png");
  fruit4_img = loadImage("orange2.png");
  fruit5_img = loadImage("Flower.png");
  fruitGroup = new Group();

  obstacleImage = loadImage("mushroom.png")
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 4) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}