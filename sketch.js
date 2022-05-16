var imgBackground;
var gato,rato;
var imgGato1,imgRato1;
var imgRato2,imgGato2;
var imgFGato,imgFRato;


function preload() {
    //carregue as imagens aqui

    imgBackground = loadImage("images/garden.png");
    imgGato1 = loadImage("images/cat1.png");
    imgRato1 = loadImage("images/mouse1.png");

    imgRato2 = loadAnimation("images/mouse3.png","images/mouse2.png");
    imgGato2 = loadAnimation("images/cat3.png","images/cat2.png");
    
    imgFGato = loadImage("images/cat4.png");
    imgFRato = loadImage("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    gato = createSprite(700,650);
    gato.addImage(imgGato1);
    gato.scale = 0.2;

    rato = createSprite(100,650);
    rato.addImage(imgRato1);
    rato.scale = 0.2;
}

function draw() {

    background(imgBackground);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    
    if(gato.x - rato.x < (gato.width - rato.width)/2){
        gato.velocityX = 0;
        gato.addAnimation("ending",imgFGato);
        gato.changeAnimation("ending");
        gato.x = 220;
        rato.addAnimation("ending2",imgFRato);
        rato.changeAnimation("ending2");
    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui

    if(keyCode === LEFT_ARROW){
        gato.velocityX = -4;
        gato.addAnimation("running",imgGato2);
        gato.changeAnimation("running");
        rato.addAnimation("stoping",imgRato2);
        rato.changeAnimation("stoping");
    }

}
