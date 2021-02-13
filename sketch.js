var ball;
//var ballPosition
var position
var database

function setup(){
    createCanvas(500,500);
    database=firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition= database.ref('ball/position')
    ballPosition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyIsDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyIsDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyIsDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyIsDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
}

function readPosition(data){

position=data.val()
ball.x=position.x
ball.y=position.y

}

function showError(){

console.log("getting error while retriving values from the database")

}