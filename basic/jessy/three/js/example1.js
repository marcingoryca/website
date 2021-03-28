    import * as THREE from "/website/basic/jessy/three/js/three.module.js";

    let camera, scene, renderer;
    let geometry, mesh, material;
    let lightColor, intensity;

    // Get the canvas/context to draw
    const canvas = document.querySelector('#cnv');

    // frustum
    const fov = 75;
    const aspect = 2;
    const near = 0.1;
    const far = 5;
    
    // geometry 
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    
    geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    // Add new cube
    const cube = new THREE.BoxGeometry(boxWidth/2, boxHeight/2, boxDepth/2);

    const cube3 = new THREE.BoxGeometry(boxWidth/2, boxHeight/2, boxDepth/2);

    // material
    material = new THREE.MeshPhongMaterial({ color: 0x00FF00 });

    // Add material to the new cube
    const material2 = new THREE.MeshPhongMaterial({ color: 0x55dd75 });

    const material3 = new THREE.MeshPhongMaterial({ color: 0xff3385 });

    // mesh
    mesh = new THREE.Mesh(geometry, material);

    // Make new mesh
    const mesh2 = new THREE.Mesh(cube, material2);

    const mesh3 = new THREE.Mesh(cube3, material3);

    // light 
    lightColor = 0xFFFFFF;
    intensity = 1;
    const light = new THREE.DirectionalLight(lightColor, intensity);

    let init = function() {
        camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.z = 2;

        light.position.set(-1, 2, 4);
        mesh2.position.x = -2;
        mesh3.position.x = 2;
        mesh3.position.y = 1;
        mesh3.position.z = -1;

        scene = new THREE.Scene();

        renderer = new THREE.WebGLRenderer({canvas});
        renderer.setSize(window.innerWidth, window.innerHeight);
        scene.add(mesh);
        scene.add(mesh2);
        scene.add(mesh3);
        scene.add(light);
        requestAnimationFrame(render);
    }

    let render = function(time) {
        time *= 0.0006;
        mesh.rotation.x = time;
        mesh.rotation.y = time;

        mesh2.rotation.z = time;
        mesh2.rotation.x = time;

        mesh3.rotation.y = time;
        mesh3.rotation.z = time;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }

    init();
    
