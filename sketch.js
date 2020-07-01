var database;
var line1 = [];

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    
}

function draw(){
    background("white");

    for(var i=0; i<this.line1.length; i++){
        beginShape();
        vertex(line1.x, line1.y);
        endShape();
      }
}

    function mouseDragged(){
        var point = {
          x: mouseX, 
          y: mouseY
        }
        line1.push(point);
    }

