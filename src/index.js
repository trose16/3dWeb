// import { sis } from './animation';
import './styles/styles.css'
const THREE = require('three');
const OrbitControls = require('three-orbitcontrols');
var initializeDomEvents = require('threex-domevents')
var THREEx = {}
initializeDomEvents(THREE, THREEx)
console.log("Hello from 3D server index.js")
const toggle = require('./page')


let scene, camera, renderer, container, controls, domEvents;
let easterEgg, cubeB, imgCube, circleLabelOne, circleLabelTwo, circleLabelThree, circleLabelFour, circleLabelFive, circleLabelSix, group;


console.log('hello from group.js');


function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 25;
  // scene.background = new THREE.Color(0xCCCCCC);
  // setting alpha to true enables it to pull background color
  renderer = new THREE.WebGLRenderer( {alpha: true} );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild(renderer.domElement);
  // document.body.appendChild( renderer.domElement );

  userControls();
  defaultLighting();
  testGroup();


  // call any functions to create scene objects

  window.addEventListener('resize', onWindowResize, false);

}

// ENABLE USER INTERACTION
// to autoRotate https://stackoverflow.com/questions/20112043/orbitcontrols-auto-rotate-stop-when-interactive
function userControls(){
  // TODO try to resolve error https://stackoverflow.com/questions/35084134/typeerror-arrayi-call-is-not-a-function-error
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.addEventListener('change', renderer, {passive: false} );
  // stop autorotate after the first interaction
}




function defaultLighting() {
    let pointLight = new THREE.PointLight(0xdddddd)
    pointLight.position.set(-5, -3, 3)
    scene.add(pointLight)

    let ambientLight = new THREE.AmbientLight(0x505050)
    scene.add(ambientLight)
}


//ADD OBJECT FUNCTIONS AND CALL FROM INIT()
// function defaultObject(){
//   var geometry = new THREE.BoxGeometry( 1, 1, 1 );
//   var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } );
//   var cube = new THREE.Mesh( geometry, material );
//   scene.add( cube );
//   camera.position.z = 5;
// }

// var transMaterial
function testGroup(){
  var geometryEasterEgg = new THREE.BoxBufferGeometry( 1, 1, 1 );
  var materialEasterEgg = new THREE.MeshNormalMaterial();
  easterEgg = new THREE.Mesh( geometryEasterEgg, materialEasterEgg ); //green
  easterEgg.position.set( 1, 1, 0 );
  console.log("EASTER EGG ", geometryEasterEgg);

  // CIRCLE LABELS
  let textureLoader = new THREE.TextureLoader();
  let geoCircle = new THREE.CircleGeometry( 1, 32 );

  // USING THE SAME ICON FOR ALL
  let moreInfo = textureLoader.load( '../cubeImg/more.png' );
  let moreMaterial = new THREE.MeshBasicMaterial( { map: moreInfo, side: THREE.DoubleSide, transparent: true, opacity: .8 } );

  // CLICKABLE COLOR LABEL ONE
  // var geometryLabelOne = new THREE.CircleGeometry( 1, 32 );
  var materialLabelOne = new THREE.MeshBasicMaterial( { color: 'yellow', side: THREE.DoubleSide, side: THREE.DoubleSide, transparent: true, opacity: .3 } );
  circleLabelOne = new THREE.Mesh( geoCircle, materialLabelOne );
  circleLabelOne.position.set( -7, -7, 8 );

  // MORE ICON FOR LABEL ONE
  let moreLabelOne = new THREE.Mesh( geoCircle, moreMaterial );
  moreLabelOne.position.set( -7, -7, 8 );

  // CLICKABLE COLOR LABEL TWO
  // var geometryLabelTwo = new THREE.CircleGeometry( 1, 32 );
  var materialLabelTwo = new THREE.MeshBasicMaterial( { color: 'skyblue', side: THREE.DoubleSide, side: THREE.DoubleSide, transparent: true, opacity: .4 } );
  circleLabelTwo = new THREE.Mesh( geoCircle, materialLabelTwo );
  circleLabelTwo.position.set( 7, -7, 6);
  circleLabelTwo.rotation.y = Math.PI / 2;

  // MORE ICON FOR LABEL TWO
  let moreLabelTwo = new THREE.Mesh( geoCircle, moreMaterial );
  moreLabelTwo.position.set( 7, -7, 6);
  moreLabelTwo.rotation.y = Math.PI / 2;

  // CLICKABLE COLOR LABEL THREE
  // var geometryLabelThree = new THREE.CircleGeometry( 1, 32 );
  var materialLabelThree = new THREE.MeshBasicMaterial( { color: 'red', side: THREE.DoubleSide, side: THREE.DoubleSide, transparent: true, opacity: .4 } );
  circleLabelThree = new THREE.Mesh( geoCircle, materialLabelThree );
  circleLabelThree.position.set( 5, -7, -8);

  // MORE ICON FOR LABEL THREE
  let moreLabelThree = new THREE.Mesh( geoCircle, moreMaterial );
  moreLabelThree.position.set( 5, -7, -8);

  // CLICKABLE COLOR LABEL FOUR
  // var geometryLabelFour = new THREE.CircleGeometry( 1, 32 );
  var materialLabelFour = new THREE.MeshBasicMaterial( { color: 'white', side: THREE.DoubleSide, side: THREE.DoubleSide, transparent: true, opacity: .4 } );
  circleLabelFour = new THREE.Mesh( geoCircle, materialLabelFour );
  circleLabelFour.position.set( -9, -7, -6);
  circleLabelFour.rotation.y = Math.PI / 2;

  // MORE ICON FOR LABEL FOUR
  let moreLabelFour = new THREE.Mesh( geoCircle, moreMaterial );
  moreLabelFour.position.set( -9, -7, -6);
  moreLabelFour.rotation.y = Math.PI / 2;

  // CLICKABLE COLOR LABEL FIVE
  // var geometryLabelFive = new THREE.CircleGeometry( 1, 32 );
  var materialLabelFive = new THREE.MeshBasicMaterial( { color: 'pink', side: THREE.DoubleSide, side: THREE.DoubleSide, transparent: true, opacity: .4 } );
  circleLabelFive = new THREE.Mesh( geoCircle, materialLabelFive );
  circleLabelFive.position.set( -6, 7, 6 );
  circleLabelFive.rotation.x = Math.PI / 2;

  // MORE ICON FOR LABEL FIVE
  let moreLabelFive = new THREE.Mesh( geoCircle, moreMaterial );
  moreLabelFive.position.set( -6, 7, 6 );
  moreLabelFive.rotation.x = Math.PI / 2;

  // CLICKABLE COLOR LABEL SIX
  // var geometryLabelSix = new THREE.CircleGeometry( 1, 32 );
  var materialLabelSix = new THREE.MeshBasicMaterial( { color: blue, side: THREE.DoubleSide, side: THREE.DoubleSide, transparent: true, opacity: .4 } );
  circleLabelSix = new THREE.Mesh( geoCircle, materialLabelSix );
  circleLabelSix.position.set( 6, -9, -6 );
  circleLabelSix.rotation.x = Math.PI / 2;

  // MORE ICON FOR LABEL SIX
  // Needs a flipped ICON
  let moreFlipped = textureLoader.load( '../cubeImg/more-flip.png' );
  let moreMaterialFlip = new THREE.MeshBasicMaterial( { map: moreFlipped, side: THREE.DoubleSide} );
  let moreLabelSix= new THREE.Mesh( geoCircle, moreMaterialFlip );
  moreLabelSix.position.set( 6, -9, -6 );
  moreLabelSix.rotation.x = Math.PI / 2;




  // IMAGE CUBE
  // let textureLoader = new THREE.TextureLoader();
  let texture0 = textureLoader.load( '../cubeImg/a0.png' );
  let texture1 = textureLoader.load( '../cubeImg/a1.png' );
  let texture2 = textureLoader.load( '../cubeImg/a2.png' );
  let texture3 = textureLoader.load( '../cubeImg/a3.png' );
  let texture4 = textureLoader.load( '../cubeImg/a4.png' );
  let texture5 = textureLoader.load( '../cubeImg/a5.png' );

  let materials = [
      new THREE.MeshBasicMaterial( { map: texture0, side: THREE.DoubleSide } ),
      new THREE.MeshBasicMaterial( { map: texture1, side: THREE.DoubleSide } ),
      new THREE.MeshBasicMaterial( { map: texture2, side: THREE.DoubleSide } ),
      new THREE.MeshBasicMaterial( { map: texture3, side: THREE.DoubleSide } ),
      new THREE.MeshBasicMaterial( { map: texture4, side: THREE.DoubleSide } ),
      new THREE.MeshBasicMaterial( { map: texture5, side: THREE.DoubleSide } )
      // new THREE.MeshBasicMaterial( { map: videoTexture,overdraw: true } )

  ];

  let faceMaterial = new THREE.MeshFaceMaterial( materials );
  let geometry = new THREE.BoxGeometry( 15, 15, 15 );
  imgCube = new THREE.Mesh( geometry, faceMaterial );
  imgCube.position.set( -1, -1, 0 );
  imgCube.material.needsUpdate = true;


  //create a group and add the two cubes
  //These cubes can now be rotated / scaled etc as a group
  group = new THREE.Group();
  group.add( easterEgg );
  group.add( imgCube );
  group.add( circleLabelOne );
  group.add( moreLabelOne );
  group.add( circleLabelTwo );
  group.add( moreLabelTwo );
  group.add( circleLabelThree );
  group.add( moreLabelThree );
  group.add( circleLabelFour );
  group.add( moreLabelFour );
  group.add( circleLabelFive );
  group.add( moreLabelFive );
  group.add( circleLabelSix );
  group.add( moreLabelSix );
  group.rotation.x = 0.6;
  group.rotation.y = -0.7;

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


  easterEgg.rotation.y += 0.02;
  easterEgg.rotation.x += 0.01;
  group.rotation.y += 0.001;
  group.rotation.x += -0.001;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}




window.addEventListener('load', (event) => {
  container = document.getElementById('container');
  init()
  animate()

  // DOMEVENTS
  domEvents	= new THREEx.DomEvents(camera, renderer.domElement)

  let logo = document.getElementById("home-logo");
  let overlay = document.getElementById("overlay");
  let eggOverlay = document.getElementById("easter-egg");
  let yellowLabelOverlay = document.getElementById("yellow");
  let redLabelOverlay = document.getElementById("red");
  let blueLabelOverlay = document.getElementById("blue");
  let greenLabelOverlay = document.getElementById("green");
  let pinkLabelOverlay = document.getElementById("pink");
  let orangeLabelOverlay = document.getElementById("orange");


// OPEN OVERLAY'S
  logo.addEventListener('click', function(){
    toggle.onLogo()
  })

  domEvents.addEventListener(easterEgg, 'click', function(){
    // easterEgg.material.color.setHex( 0x00ff00 )
    // easterEgg.material.wireframe = true;
    toggle.onEasterEgg()
  }, false)

  domEvents.addEventListener(circleLabelOne, 'click', function(){
    toggle.on(yellowLabelOverlay)
  }, false)

  domEvents.addEventListener(circleLabelTwo, 'click', function(){
    toggle.on(blueLabelOverlay)
  }, false)

  domEvents.addEventListener(circleLabelThree, 'click', function(){
    console.log("You've clicked on circleLabelThree")
    toggle.on(redLabelOverlay)
  }, false)

  domEvents.addEventListener(circleLabelFour, 'click', function(){
    console.log("You've clicked on circleLabelFour")
    toggle.on(greenLabelOverlay)
  }, false)

  domEvents.addEventListener(circleLabelFive, 'click', function(){
    console.log("You've clicked on circleLabelFive")
    toggle.on(pinkLabelOverlay)
  }, false)

  domEvents.addEventListener(circleLabelSix, 'click', function(){
    console.log("You've clicked on circleLabelSix")
    toggle.on(orangeLabelOverlay)
  }, false)


  // EXIT OVERLAY'S
    eggOverlay.addEventListener('click', function(){
      toggle.offEasterEgg()
    }, false)

    overlay.addEventListener('click', function(){
      toggle.offLogo()
    }, false)

    yellowLabelOverlay.addEventListener('click', function(){
      toggle.off(yellowLabelOverlay);
    }, false)

    blueLabelOverlay.addEventListener('click', function(){
      toggle.off(blueLabelOverlay);
    }, false)

    redLabelOverlay.addEventListener('click', function(){
      toggle.off(redLabelOverlay);
    }, false)

    greenLabelOverlay.addEventListener('click', function(){
      toggle.off(greenLabelOverlay);
    }, false)


    pinkLabelOverlay.addEventListener('click', function(){
      toggle.off(pinkLabelOverlay);
    }, false)


    orangeLabelOverlay.addEventListener('click', function(){
      toggle.off(orangeLabelOverlay);
    }, false)



// MOUSE OVER & OUT
domEvents.addEventListener(circleLabelOne, 'mouseover', function(event){
  circleLabelOne.material.color.setHex( 0x11faf2 )
  circleLabelOne.material.opacity = 0.2;
}, false)

domEvents.addEventListener(circleLabelOne, 'click', function(event){
  // circleLabelOne.material.color.setHex( 0x00ff00 )
  circleLabelOne.material.opacity = 0.5;
}, false)

// circleLabelTwo
domEvents.addEventListener(circleLabelTwo, 'mouseover', function(event){
  circleLabelTwo.material.color.setHex( 0x11faf2 )
  circleLabelTwo.material.opacity = 0.2;
}, false)

domEvents.addEventListener(circleLabelTwo, 'click', function(event){
  // circleLabelTwo.material.color.setHex( 0x00ff00 )
  circleLabelTwo.material.opacity = 0.5;
}, false)


// circleLabelThree
domEvents.addEventListener(circleLabelThree, 'mouseover', function(event){
  circleLabelThree.material.color.setHex( 0x11faf2 )
  circleLabelThree.material.opacity = 0.2;
}, false)

domEvents.addEventListener(circleLabelThree, 'click', function(event){
  // circleLabelThree.material.color.setHex( 0x00ff00 )
  circleLabelThree.material.opacity = 0.5;
}, false)

// circleLabelFour
domEvents.addEventListener(circleLabelFour, 'mouseover', function(event){
  circleLabelFour.material.color.setHex( 0x11faf2 )
  circleLabelFour.material.opacity = 0.2;
}, false)

domEvents.addEventListener(circleLabelFour, 'click', function(event){
  // circleLabelFour.material.color.setHex( 0x00ff00 )
  circleLabelFour.material.opacity = 0.5;
}, false)

// circleLabelFive
domEvents.addEventListener(circleLabelFive, 'mouseover', function(event){
  circleLabelFive.material.color.setHex( 0x11faf2 )
  circleLabelFive.material.opacity = 0.2;
}, false)

domEvents.addEventListener(circleLabelFive, 'click', function(event){
  // circleLabelFive.material.color.setHex( 0x00ff00 )
  circleLabelFive.material.opacity = 0.5;
}, false)

// circleLabelSix
domEvents.addEventListener(circleLabelSix, 'mouseover', function(event){
  circleLabelSix.material.color.setHex( 0x11faf2 )
  circleLabelSix.material.opacity = 0.2;
}, false)

domEvents.addEventListener(circleLabelSix, 'click', function(event){
  // circleLabelSix.material.color.setHex( 0x00ff00 )
  circleLabelSix.material.opacity = 0.5;
}, false)


// OTHER EVENTS
  domEvents.addEventListener(easterEgg, 'mouseover', function(event){
    // easterEgg.material.wireframe = false
    console.log('you moused over green easterEgg')
  }, false)

  // Stop rotating cube on click
  container.addEventListener('click', function(){
    controls.autoRotate = false;
  });

  // domEvents.addEventListener(easterEgg, 'click', function(event){
  //   console.log('you clicked on green easterEgg')
  //   easterEgg.material.color.setHex( 0x00ff00 )
  //   // window.open("https://www.w3schools.com");
  // }, false)



  domEvents.addEventListener(easterEgg, 'mouse out', function(event){
    easterEgg.material.color.setHex( 0x00ff00 )
    console.log('you moused off green easterEgg')
  }, false)

  domEvents.addEventListener(cubeB, 'click', function(event){
    console.log('you clicked on black cubeB')
  }, false)

  domEvents.addEventListener(cubeB, 'mouseover', function(event){
    // group.rotation.y += 0.1;
  }, false)
});
