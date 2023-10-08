import * as THREE from "three";

const loader = new THREE.FileLoader();

loader.load("shader.vert", function (vertexShader) {
  loader.load("shader.frag", function (fragmentShader) {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // scene
    const scene = new THREE.Scene();

    // geometry
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    // Create ShaderMaterial here
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // const material = new THREE.MeshStandardMaterial({
    //     color:"#A29",
    // });

    // light
    // const intensity = 150;
    const intensity = 150;
    const light = new THREE.SpotLight(0xffffff, intensity, 40, 90);
    light.position.set(0, 10, 0);
    light.target.position.set(10, 0, 0);
    scene.add(light);
    scene.add(light.target);

    // camera
    const fov = 70;
    const aspect = sizes.width / sizes.height;
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 0, 2);
    scene.add(camera);

    //renderer
    const canvas = document.querySelector("#webgl");
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });
    renderer.setPixelRatio(window.devicePixelRatio);

    // const canvasSize = 300;

    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);

    // resize
    window.onresize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      const canva = renderer.domElement;
      const width = canva.clientWidth;
      const height = canva.clientHeight;
    };

    let speed = 0;

    // animation
    function render(time) {
      time *= 0.001;

      mesh.rotateX(speed);
      mesh.rotateY(speed);

      // mesh.rotation.x = time;
      // mesh.rotation.y = time;

      renderer.render(scene, camera);

      requestAnimationFrame(render);
    }

    render();

    // control camera

    const lightHeight = document.querySelector("#lightHeight");

    lightHeight.oninput = () => {
      light.position.y = lightHeight.value;
      renderer.render(scene, camera);
    };

    const cameraInput = document.querySelector("#cameraInput");

    cameraInput.oninput = () => {
      camera.position.z = cameraInput.value;
      renderer.render(scene, camera);
    };

    const objectSpeed = document.querySelector("#objectSpeed");

    objectSpeed.oninput = () => {
      speed = objectSpeed.value / 100.0;
      renderer.render(scene, camera);
    };

    const ResetRotation = document.querySelector("#ResetRotation");

    ResetRotation.onclick = () => {
      mesh.rotation.set(0, 0, 0);
      renderer.render(scene, camera);
    };
  });
});
