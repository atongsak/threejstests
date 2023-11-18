// tutorial: https://redstapler.co/add-3d-model-to-website-threejs/
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);

const camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 5000);

camera.position.set(-150,0,150);

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const hlight = new THREE.AmbientLight (0x404040,100);
scene.add(hlight);

const directionalLight = new THREE.DirectionalLight(0xffffff,100);
directionalLight.position.set(0,1,0);
directionalLight.castShadow = true;
scene.add(directionalLight);

const directionalLight2 = new THREE.DirectionalLight(0xffffff,0.0001);
directionalLight2.position.set(0,-1,3);
directionalLight2.castShadow = true;
scene.add(directionalLight2);

const directionalLight3 = new THREE.DirectionalLight(0xffffff,5);
directionalLight3.position.set(-2,-5,0);
directionalLight3.castShadow = true;
scene.add(directionalLight3);

let john;
let isAnimationPaused = false;

const controls = new OrbitControls( camera, renderer.domElement );
controls.addEventListener('change', renderer);

document.addEventListener('mousedown', function(){
    isAnimationPaused = true;
})

document.addEventListener('mouseup', function(){
    isAnimationPaused = false;
})

function animate(){
    requestAnimationFrame(animate);
    if(!isAnimationPaused){
        john.rotation.y += 0.02;
    }
    
    renderer.render(scene, camera);
}

const loader = new GLTFLoader();
loader.load('john.glb', function(gltf){
    john = gltf.scene.children[0];
    john.scale.set(0.8,0.8,0.8);
    john.position.set(0, 5, 0);
    scene.add(gltf.scene);
    animate();
});
