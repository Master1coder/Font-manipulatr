nosex=0;
nosey=0;
difference=0;
rwx=0;
lwx=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(400,400);
    canvas=createCanvas(550,540);
    canvas.position(500,130);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposes);
}

function modelloaded(){
    console.log("model has loaded");
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    lwx=results[0].pose.leftWrist.x;
    rwx=results[0].pose.rightWrist.x;
    difference=floor(lwx-rwx);
}
}

function draw(){
    background("#ffffff");
    document.getElementById("font_size").innerHTML=difference;
    textSize(difference);
    fill("#d00000");
    text("Bhavya Patel",50,400)
}