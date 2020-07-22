const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var score = 0;
var count = 0;

var particle;

var gameState ="start";

function setup() {
  createCanvas(900,800);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 10; j <=900; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,55,35));
    }
   for (var j = 30; j <=885; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,105,25));
    } 
    for (var j =10; j <=900; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,155,5));
    }
     for (var j = 30; j <=885; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,205,25));
    } 
    for (var j = 10; j <=900; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,255,35));
    }
    for (var j = 30; j <=885; j=j+40) 
    {
    
       plinkos.push(new Plinko(j,305,25));
    } 

}

function draw() {
  background(0); 
 
        textSize(15)
        fill("white")
        text("Score  " + score,20, 20)
        text("500  ",35, 600);
        text("500  ",105, 600);
        text("500  " ,190, 600)
        text("500  " ,270, 600);
        text("100  " ,350, 600)
        text("100  " ,430, 600)
        text("100  " ,510, 600)
        text("200  " ,590, 600)
        text("200  ",670, 600)
        text("200  ",745, 600)
        text("200  " ,830, 600)

  Engine.update(engine);


  if ( gameState ==="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
  
  }

  
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
 

  if(particle != null){

      console.log("hi inside" + particle);
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 6) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 6) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 6)  gameState ="end";

              }      
              
        }
  
      }

  

      ground.display();
}


function mousePressed(){

if(gameState!=="end"){
 
      count++;
     particle=new Particle(random(30,785), 10, 10, 10); 
  
  }  
}




