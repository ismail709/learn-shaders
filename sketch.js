function preload(){
    myshader = loadShader("myshader.vert","myshader.frag");
}

function setup(){
    createCanvas(400,400,WEBGL);
}

function draw(){
    shader(myshader);

    myshader.setUniform("time",millis());
    rect(0,0,400,400);
}