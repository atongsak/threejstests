// Creates a spinning green cube
// Enter npx vite into terminal to get link to scene 

import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

const scene = new THREE.Scene();
// attributes: 
// field of view (degrees) - extent of the scene that is seen on the display at any given moment
// aspect ratio - always want to use the width of the element divided by the height
// next two: near and far clipping plane - objects further away from the camera than the value of far or closer than near won't be rendered
// renderer - size at which we want it to render our app, good idea to use the width and height of the area we want to fill with our app
//            in this case, the width and height of the browser window
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// we add the renderer element to our HTML document
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// add a cube
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

// create a render/animate loop
function animate() {
	requestAnimationFrame( animate );
    // these two lines rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
// animate();

// WebGL compatibility check
if ( WebGL.isWebGLAvailable() ) {

	// Initiate function or other initializations here
	animate();

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}