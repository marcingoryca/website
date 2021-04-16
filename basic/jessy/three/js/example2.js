import * as THREE from "/website/basic/jessy/three/js/three.module.js";

//function app() {

// Get the GL context
const can = document.querySelector('#cnv');
// Make a renderer
const renderer = new THREE.WebGLRenderer({can});
renderer.setSize(window.innerWidth, window.innerHeight);

// Get window info
//const winW = window.innerWidth;
//const winH = window.innerHeight;

// Set the frustum
const fov = 70; // Field of View
const aspect = 2;
const near = 0.1;
const far = 2;

// Make a camera
function app() {
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

// Make a scene
const scene = new THREE.Scene();

// Render
function render(time) {
    time *= 0.01;
    let rotation = time;
    //const canvas = renderer.domElement;
    //camera.aspect = canvas.clientWidth / canvas.clientHeight;
    //camera.updateProjectionMatrix();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

// Resize Renderer
/*
function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;

    // Resize Renderer
    function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const pixelRatio = window.devicePixelRatio;
        const width = canvas.clientWidth * pixelRaio | 0;
        const height = canvas.clientHeight * pixelRatio | 0;
        const needResize = canvas.width !== width || canvas.height !== height;

        if(needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }
    return needResize;
}
*/
requestAnimationFrame(render);
}

app();