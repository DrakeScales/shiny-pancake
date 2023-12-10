nosex=0;
nosey=0;

function preload() {
    moostache = loadImage('https://i.postimg.cc/3k6csTzT/1773772.png')
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses)
}
function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(nosex, nosey, 20);
    image(moostache, nosex - 40, nosey - 50, 75, 65);
}
function take_snapshot(){
    save('myfilteryaey.png');
}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function getPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nose x =" + nosex);
        console.log("nose y =" + nosey);
    }
}
function setup(){
canvas = createCanvas(280,280);
canvas.center();
background("white");
}

function clearCanvas()
{
    background("white");
}