
varying vec3 vPosition;

void main(){
    gl_FragColor = vec4(1. - vPosition.xy, 1., 1.0);
}
