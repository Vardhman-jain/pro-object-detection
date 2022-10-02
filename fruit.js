objectDetector= "";

img = "";
objects = [];
status = "";

function preload(){
  img = loadImage('fruit.jpg');
}img="";
status='';
object = [];
percent="";
x = "";
y="";
label="";
h="";
w="";
function preload() {
    img=loadImage('fruit.jpg');
}


function setup() {
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML= "Status: Detecting Objects";

}
function modelLoaded() {
    console.log("Model Loaded!")
    status= true;
    objectDetector.detect(img, gotResults)
}
function gotResults(error, results) {
    if(error){
        console.log(error);
    }
    console.log(results);
    obeject= results;
    
}
function draw() {
    if(status =! ""){
        image(img,0,0, 650, 450)

        for ( i = 0; i < object.length; i++) {
            noStroke()
            fill(0,255,0);
            percent= floor(object[i].confidence * 100); //floor() will take the no. before the decimal;
            text(object[i].label + " " + percent+ "%", object[i].x + 15, object[i].y + 15);
            noFill();
            stroke(0,255,0);
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }

}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() {
  if (status != undefined) {
  	  image(img, 0, 0, 640, 420);
    for (var i = 0; i < objects.length; i++) {
      document.getElementById("status").innerHTML = "Status : Objects Detected";
      noStroke();
      fill(0, 255, 0);
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + "%", objects[i].x + 5, objects[i].y + 15);
      noFill();
      stroke(0, 255, 0);
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
  }
}