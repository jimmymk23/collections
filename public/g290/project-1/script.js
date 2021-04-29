
// Scene
var scene = new THREE.Scene();


//Camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 100;


//Renderer
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


//Window Resize Event Listener
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
})


//Lights
var decay = 2;
var intensity = 1;
var distanceFromCenter = 125;

var light = new THREE.AmbientLight( "#404040" );
scene.add( light );
  // center
var light = new THREE.PointLight("#ffffff", intensity, 240, decay);
light.position.set(0, 0, 100);
scene.add(light);
  // top right
var light = new THREE.PointLight("#ffffff", intensity, 240, decay);
light.position.set(distanceFromCenter, distanceFromCenter, 90);
scene.add(light);
  // bottom left
var light = new THREE.PointLight("#ffffff", intensity, 240, decay);
light.position.set(-distanceFromCenter, -distanceFromCenter, 90);
scene.add(light);
  // bottom right
var light = new THREE.PointLight("#ffffff", intensity, 240, decay);
light.position.set(distanceFromCenter, -distanceFromCenter, 90);
scene.add(light);
  // top left
var light = new THREE.PointLight("#ffffff", intensity, 240, decay);
light.position.set(-distanceFromCenter, distanceFromCenter, 90);
scene.add(light);


// Variables for my Cubes
var itemIndex = 0;
var size = 15;
var space = size + 0;
var greyList = ["#ffffff", "#ededed", "#e6e6e6", "#d1d1d1", "#d9d9d9"];
var colorsList = ["#D3F8E2", "#E4C1F9", "#F694C1", "#EDE7B1", "#A9DEF9", "#FFE787", "#A59FCF", "#C4D8E2", "#E51670", "#7D9EC0", "#388E8E", "#71C671", "#8E388E"];

// Picks a random color from the given list
var randomColor = function(list) {
  var color = list[Math.floor(Math.random() * colorsList.length)];
  return color;
}

//Cubes
var geometry = new THREE.BoxGeometry(size, size, size/1.5);
for (var r = -11; r < 12; r++) {
  for (var c = -5; c < 6; c++) {
    var material = new THREE.MeshLambertMaterial({color: randomColor(greyList)});
    var cube = new THREE.Mesh(geometry, material);
    cube.position.x = space * r;
    cube.position.y = space * c;
    cube.position.z = Math.random() * 8;
    scene.add(cube);
    itemIndex++
  }
}


// Attempted Raycaster stuff
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2(), INTERSECTED;
var newColor;

function onMouseMove() {
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

mouse.x = 300;
mouse.y = 300;

// Render my stuff
function render() {
  
  raycaster.setFromCamera(mouse, camera);
  
  var intersects = raycaster.intersectObjects(scene.children);
  
  if (intersects.length > 0) {
		if ( INTERSECTED != intersects[0].object ) {
			if ( INTERSECTED ) INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex);
				INTERSECTED = intersects[0].object;
				INTERSECTED.material.color.set(randomColor(colorsList));
			}
		}
  
  requestAnimationFrame(render);
	renderer.render(scene, camera);
  
}

render();

window.addEventListener('mousemove', onMouseMove);



// var axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );