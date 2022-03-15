import * as THREE from './three.js-dev/build/three.module.js';
import {GLTFLoader} from './three.js-dev/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from './three.js-dev/examples/jsm/controls/OrbitControls.js'


// console.log(THREE); 
const loader = new GLTFLoader(); 
const scene = new THREE.Scene(); 

loader.load('../assets/3D/Mask2.glb', function(gltf){
    console.log(gltf);
    const root = gltf.scene; 
    // root.rotation = 0.5;
    root.rotation.y = 180;
    root.scale.set(2,2,2);
    var animation = function() {
        requestAnimationFrame(animation); 
        root.rotation.y -= 0.001; 
    } 
    animation(); 

    // var animation2 = function(){

    // }

    scene.add(root);  
}, function(xhr){
    console.log(xhr.loaded/xhr.total * 100 + "% loaded");
}, function(error){
    console.log("an error occured");
})

// light test 
const light = new THREE.DirectionalLight(0xffffff, 1); 
light.position.set(2,2,2); 
light.intensity=1;
scene.add(light); 
const spotLight1 = new THREE.SpotLight( 0xff00aa );
spotLight1.position.set( 7, 2, 2 );
spotLight1.intensity=0.3;
scene.add( spotLight1 );
const spotLight2 = new THREE.SpotLight(0x27f2b9)
spotLight2.position.set(-1,2,9 );
spotLight2.intensity=0.3;
scene.add(spotLight2);

//-------light helper-------
const spotLightHelper = new THREE.SpotLightHelper( spotLight2 );
const spotLightHelper2 = new THREE.SpotLightHelper( spotLight1 );
const spotLightHelper3 = new THREE.SpotLightHelper( light);
// scene.add( spotLightHelper );
// scene.add(spotLightHelper2);
// scene.add(spotLightHelper3);

// Testing camera 
var camera = new THREE.PerspectiveCamera( 40, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.set(7,0,5);
// const camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
// scene.add( camera );
// camera.position.z = 5;
// camera.position.y = 1;

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({alpha:true});


// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);

// Render Loop
var render = function () {
  requestAnimationFrame( render );
  // Render the scene
  renderer.render(scene, camera);
};

render();

