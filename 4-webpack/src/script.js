import "./style.css";
import * as THREE from "three";

const size = {
  width: 800,
  height: 600
};

/* Setup Scene */
const scene = new THREE.Scene();

/* Create a Red Cube */
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const redMaterial = new THREE.MeshBasicMaterial({
  color: "#FF0000"
});
const redCube = new THREE.Mesh(cubeGeometry, redMaterial);
scene.add(redCube);

/* Setup Camera */
/* The first parameter is the FOV in degrees, and the second is the aspect ratio */
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
/* Position camera */
camera.position.z = 3;
camera.position.x = 1;
scene.add(camera);

/* Render Scene */
const canvas = document.querySelector("canvas.webgl");
const renderer = new THREE.WebGLRenderer({
  canvas
});
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
