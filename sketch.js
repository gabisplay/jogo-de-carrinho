var canvas, backgroundImage
var gameState = 0
var playerCount
var database
var form, player, game
var allPlayers
var car1
var car2
var car3
var car4
var cars
var car1_img
var car2_img
var car3_img
var car4_img
var pista
var distance = 0
function preload() {
  pista = loadImage('../images/track.jpg')
  car1_img = loadImage('../images/car1.png')
  car2_img = loadImage('../images/car2.png')
  car3_img = loadImage('../images/car3.png')
  car4_img = loadImage('../images/car4.png')
}
function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30)
  database = firebase.database()
  game = new Game()
  game.getState()
  game.start()
}

function draw() {
  if (playerCount === 4) {
    game.update(1)
  }
  if (gameState === 1) {
    clear()
    game.play()
  }
  if (gameState === 2) {
    game.end()
    console.log(player.ranking)
  }
}
