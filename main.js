function preload(){

}
function draw(){
image(video, 0, 0, 640, 480);
circle(30, 30, 50);
rect(10, 55, 45, 380);
circle(30,460, 50);

circle(580, 40, 50);
rect(560, 65, 45, 380);
circle(583,470, 50);
}
function setup(){
    canvas = createCanvas (640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
}
function take_snapshot(){
    save('image.png');
    console.log("Picture downloaded");
}
