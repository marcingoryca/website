import * as THREE from "/website/basic/jessy/three/js/three.module.js";

function app() {

// Get the GL context
const c = document.querySelector('#context');

// Get window info
const winW = window.innerWidth;
const winH = window.innerHeight;

// Set the frustum
const fov = 70; // Field of View
const aspect = winW / winH;
const near = 0.01;
const far = 2;

// Make a camera
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

// Make a scene
const scene = new THREE.Scene();

// Make a renderer
const renderer = new THREE.WebGLRenderer({c});
renderer.setSize(winW, winH);

// Render
function render(time) {
    time *= 0.01;
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

// Resize Renderer
function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;

    if(needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
}

requestAnimationFrame(render);
}

app();