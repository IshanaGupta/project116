mouthX=0;
mouthY=0;





function preload() {
    lipstick = loadImage('https://i.postimg.cc/65twjXSs/redlips.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCanvas(VIDEO);
    video.hide();


    postNet = ml5.postNet(video,model);
    postNet.on('pose', gotPoses);
}



function modelLoaded() {
    console.log('PoseNet Is Initialized');
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        mouthX = results[0].pose.mouth.x;
        mouthY = results[0].pose.mouth.y;
console.log("mouth x =" + results[0].pose.mouth.x);
console.log("mouth y =" + results[0].pose.mouth.y);
    }

}



function draw() {
    image(video, 0, 0, 300, 300);
    image(lipstick, mouthX, mouthY, 30, 30);
}


function take_snapshot(){
    save('me_in_lipstick.png');
}
