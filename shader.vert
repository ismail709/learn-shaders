varying vec3 vPosition;

void main() {

   vPosition = (position + 1.) / 2.;
   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}