precision mediump float;

varying vec2 pos;

uniform float time;

void main(){
    gl_FragColor = vec4((sin(pos*time/100.)+1.)/2.,sin(time/1000.),1.);
}