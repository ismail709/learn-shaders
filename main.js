import * as THREE from "three"


// scene
const scene = new THREE.Scene();


// geometry
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({
    color:"#fff",
});
const mesh = new THREE.Mesh(geometry,material);



scene.add(mesh);


// camera
const fov = 70;
const aspect = 2;
const near = 0.1;
const far = 5;
const camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
camera.position.z = 2;
scene.add(camera);


//renderer
const canvas = document.querySelector("#webgl");
const renderer = new THREE.WebGLRenderer({
    canvas
});

renderer.setSize(800,500);
renderer.render(scene,camera);


// control camera

const range = document.querySelector("input");

range.oninput = () => {
    camera.position.z = range.value;
    renderer.render(scene,camera);
}