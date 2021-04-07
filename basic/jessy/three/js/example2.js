import * as THREE from "/website/basic/jessy/three/js/three.module.js";

function app() {
    // Get window info
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    // Get the GL context
    const c = document.querySelector('#context');
    // Make a renderer
    const renderer = new THREE.WebGLRenderer({c});
    renderer.setSize(winW, winH);

    

    // Set the frustum
    const fov = 80; // Field of View
    const aspect = 2;
    const near = 0.1;
    const far = 5;

    // Make a camera
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 2;

    // Make a scene
    const scene = new THREE.Scene();

    

    // Make a circle
    const geometry = new THREE.CircleGeometry(5,32);
    const material = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
    const circle = new THREE.Mesh(geometry, material);


    

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

    // Render
    function render(time) {
        time *= 0.01;

        //circle.rotation.x = time;
        scene.add(circle);

        if(resizeRendererToDisplaySize) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
        }
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

app();