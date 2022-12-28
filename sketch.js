//bola
xb=300
yb=200
d=10
r=d/2
xvelb=5
yvelb=5
//player
xp=0
yp=150
wp=10
hp=80
//inimigo
xe=590
ye=150
we=10
he=80
//placar
pp=0
pe=0
pt="-"
//colisão
let colide = false
//sons
let hit;
let ponto;

function preload(){
  hit=loadSound("Hit.wav")
  ponto=loadSound("Ponto.wav")
}

function setup() {
  createCanvas(600, 400);
  preload() 
}

function draw() {
  background(0);
  ball();
  movBall();
  raquete(xp,yp,wp,hp);
  raquete(xe,ye,we,he);
  col(xp,yp,wp,hp);
  col(xe,ye,we,he);
  movEnemy();
  movPlayer();
  score()
  unstuck()
}

function raquete(x,y,w,h){
    rect(x,y,w,h);
}

function ball(){
    circle(xb,yb,d);
}

function movPlayer(){
  if(keyIsDown(87)){
    yp -=10;
  }
    if(keyIsDown(83)){
    yp +=10;
  }
}

function movEnemy(){
  if(keyIsDown(UP_ARROW)){
    ye -=10;
  }
  if(keyIsDown(DOWN_ARROW)){
    ye +=10;
     }
}

function movBall(){
  xb += xvelb;
  yb += yvelb;
  
  if(xb + r > width || xb - r < 0){
     xvelb *= -1
     }
  
  if(yb + r > height || yb - r < 0){
     yvelb *= -1
     }
}

function col(x,y,w,h){
    colide= collideRectCircle(x,y,w,h,xb,yb,r);
  if(colide){
    xvelb *= -1
    hit.play();
  }
}

function score(){
  textSize(20)
  textAlign(CENTER)
  fill(255)
  text(pp, 275,26)
  text(pe, 305,26) 
  text(pt, 290,26) 
  if(xb>599){
     pp+=1
    ponto.play();
     }else{
       if(xb<1){
         pe+=1
             ponto.play();
       }
     }
}

function unstuck(){
    if (xb - r < 0 || xb + r > 600){
    xb = 300
    }
}