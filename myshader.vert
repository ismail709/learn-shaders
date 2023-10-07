

attribute vec3 aPosition;

attribute vec2 aTexCoord;

varying vec2 pos;


void main(){
    pos = aTexCoord;

    vec4 uv = vec4(aPosition,1.);

    uv.xy = uv.xy*2. - 1.;

    gl_Position = uv;
}