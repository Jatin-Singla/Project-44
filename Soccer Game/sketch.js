var pitch, soccer_ball, buttler, buttler2, fat_goalie, fat_goalie2, goal
var soccerBall, player1, player2, fatGoalie, fatGoalie2, goal1, goal2



function preload() {
pitch = loadImage("PITCH.jpeg")
soccer_ball = loadImage("SOCCER BALL.png")
buttler = loadImage("BUTTLER.png")
buttler2 = loadImage("BUTTLER 2.png")
fat_goalie = loadImage("FAT GOALIE.png")
fat_goalie2 = loadImage("FAT GOALIE 2.png")
goal = loadImage("GOAL.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  soccerBall = createSprite(windowWidth/2, windowHeight/2, 100, 100)
  player1 = createSprite(windowWidth/2 - 150, windowHeight/2, 100, 100)
  player2 = createSprite(windowWidth/2 + 150, windowHeight/2, 100, 100)
  fatGoalie = createSprite(150,windowHeight/2, 100, 100)
  fatGoalie2 = createSprite(windowWidth-150,windowHeight/2, 100, 100)
  goal1 = createSprite(30, windowHeight/2, 100,100)
  goal2 = createSprite(windowWidth - 30, windowHeight/2, 100, 100)


  soccerBall.addImage(soccer_ball)
  soccerBall.scale = 0.2
  player1.addImage(buttler)
  player1.scale = 0.6
  player2.addImage(buttler2)
  player2.scale = 0.6
  goal1.addImage(goal)
  goal2.addImage(goal)
  fatGoalie.addImage(fat_goalie)
  fatGoalie.scale = 0.7
  fatGoalie2.addImage(fat_goalie2)
  fatGoalie2.scale = 0.7
}

function draw() {
  background(pitch);
  drawSprites();
}