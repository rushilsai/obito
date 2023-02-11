differnce=0;
rightwristx=0;
leftwristx=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#969A97');
    document.getElementById("ford_size").innerHTML="font size of the text will be="+differnce+"px";
    textSize(differnce);
    fill("black");
    text("obito",50,400);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        differnce=floor(leftwristx-rightwristx);
    }
}