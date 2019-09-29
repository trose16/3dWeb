// import { sis } from './animation';
import './styles/styles.css'
const THREE = require('three');
const OrbitControls = require('three-orbitcontrols');
var initializeDomEvents = require('threex-domevents')
var THREEx = {}
initializeDomEvents(THREE, THREEx)
console.log("Hello from 3D server index.js")


const toggle = require('./animation')

let overlay = document.getElementById('overlay');

overlay.addEventListener('click', toggle.off, false)

// console.log(sis("I love ya but work!"));

let scene, camera, renderer, container, controls;
let cubeA, cubeB, group, domEvents;


console.log('hello from group.js');


function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 10;
  // scene.background = new THREE.Color(0xCCCCCC);
  // setting alpha to true enables it to pull background color
  renderer = new THREE.WebGLRenderer( {alpha: true} );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild(renderer.domElement);
  // document.body.appendChild( renderer.domElement );

  userControls();
  defaultLighting();
  // defaultObject();
  testGroup();

  // call any functions to create scene objects

  window.addEventListener('resize', onWindowResize, false);

}

// ENABLE USER INTERACTION
// to autoRotate https://stackoverflow.com/questions/20112043/orbitcontrols-auto-rotate-stop-when-interactive
function userControls(){
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.addEventListener('change', renderer, {passive: false} );
}


function defaultLighting() {
    let pointLight = new THREE.PointLight(0xdddddd)
    pointLight.position.set(-5, -3, 3)
    scene.add(pointLight)

    let ambientLight = new THREE.AmbientLight(0x505050)
    scene.add(ambientLight)
}


//ADD OBJECT FUNCTIONS AND CALL FROM INIT()
function defaultObject(){
  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } );
  var cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  camera.position.z = 5;
}

function testGroup(){
  var geometryA = new THREE.BoxBufferGeometry( 1, 1, 1 );
  var geometryB = new THREE.BoxBufferGeometry( 3, 3, 3 );
  var materialA = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
  var materialB = new THREE.MeshBasicMaterial( {color: 0x000000} );

  console.log("Material A", materialA)

  cubeA = new THREE.Mesh( geometryA, materialA ); //green
  cubeA.position.set( 1, 1, 0 );

  cubeB = new THREE.Mesh( geometryB, materialB ); //black
  cubeB.position.set( -1, -1, 0 );



  // var url		= 'http://jeromeetienne.github.io/threex/'
  // var linkify	= THREEx.Linkify(domEvents, cubeB, url, true)


  //create a group and add the two cubes
  //These cubes can now be rotated / scaled etc as a group
  group = new THREE.Group();
  group.add( cubeA );
  group.add( cubeB );

  scene.add( group );
}




// DEFAULT SCENE EVENT LISTENERS

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


function animate(){
  // add object animation here
  group.rotation.y += 0.005;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

window.addEventListener('load', (event) => {
  container = document.getElementById('container');
  init()
  animate()

  // DOMEVENTS
  domEvents	= new THREEx.DomEvents(camera, renderer.domElement)

  domEvents.addEventListener(cubeA, 'click', function(event){
    console.log('you clicked on green cubeA')
    cubeA.material.color.setHex( 0x00ff00 )
    // window.open("https://www.w3schools.com");
  }, false)

  domEvents.addEventListener(cubeA, 'click', toggle.on, false)

  let logo = document.getElementById("home-logo");

  logo.addEventListener('click', toggle.on)

  domEvents.addEventListener(cubeA, 'mouseover', function(event){
    cubeA.material.color.setHex( 0xffffff )
    console.log('you moused over green cubeA')
  }, false)

  domEvents.addEventListener(cubeA, 'mouse out', function(event){
    cubeA.material.color.setHex( 0x00ff00 )
    console.log('you moused off green cubeA')
  }, false)

  domEvents.addEventListener(cubeB, 'click', function(event){
    console.log('you clicked on black cubeB')
  }, false)

  domEvents.addEventListener(cubeB, 'mouseover', function(event){
    // group.rotation.y += 0.1;
  }, false)
});
