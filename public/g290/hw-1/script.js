// Here are the tutorials I referenced while working on this assignment.
// https://www.youtube.com/watch?v=6oFvqLfRnsU
// https://www.youtube.com/watch?v=l77yAZ0E950


var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 15;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
})

var light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(0, 5, 25);
scene.add(light);


var geometry = new THREE.BoxGeometry(4, 4, 4);
var side_colors = [
  new THREE.MeshLambertMaterial({color: 0xff0d00}),
  new THREE.MeshLambertMaterial({color: 0xff8400}),
  new THREE.MeshLambertMaterial({color: 0xffff00}),
  new THREE.MeshLambertMaterial({color: 0x3acf15}),
  new THREE.MeshLambertMaterial({color: 0x19a3e3}),
  new THREE.MeshLambertMaterial({color: 0x8d0ee8})
];
var material = new THREE.MeshFaceMaterial(side_colors);
var cube1 = new THREE.Mesh(geometry, material);
cube1.position.x = -6;
scene.add(cube1);

var geometry = new THREE.TorusKnotGeometry(3, 1, 2000, 16, 2, 5);
var material = new THREE.MeshLambertMaterial({color: 0x85e4a6, side: THREE.DoubleSide});
var torus1 = new THREE.Mesh(geometry, material);
torus1.position.x = 6;
scene.add(torus1);

var render = function() {
  requestAnimationFrame(render);
  
  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;
  // cube.rotation.z += 0.01;
  
  torus1.rotation.x -= 0.01;
  torus1.rotation.y -= 0.01;
  
  renderer.render(scene, camera);
}

render();