//creating the scene
const scene = new THREE.Scene();
//const gui=new dat.GUI();

//calling the functions of each individual element
var cube=getCube(1,1,1);
var ambLight=getAmbientLight(3); //adding the ambient light, the variable passed is the light intensity

//adding elements to the scene
scene.add(cube);
scene.add(ambLight);

//adding a perspective camera to the scene
var camera=new THREE.PerspectiveCamera(
    75,                                         //FOV
    window.innerWidth / window.innerHeight,     //aspect ration
    0.1,                                        //near
    1000                                        //far
);

//set camera positions
camera.position.set(-1,0,5);

//setting up the renderer
const renderer=new THREE.WebGLRenderer({
    antialias:true
});   //creating an instance of the renderer

renderer.setSize( window.innerWidth, window.innerHeight);   //setting up the size of the renderer
document.body.appendChild( renderer.domElement);

//function to display a box cube
function getCube(width,height,depth){
    const geometry=new THREE.BoxGeometry(width,height,depth);
    const material=new THREE.MeshPhongMaterial({
        color: 0x44aa88
        });
    const mesh=new THREE.Mesh(geometry,material);    
    return mesh;
}

//function to get an Ambient Light
function getAmbientLight(intensity){
    const light=new THREE.AmbientLight(0x404040);
    light.intensity=intensity;
    return light;
}

//animating the scene    
function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.0025;		//rotate the cube in the x axis
    cube.rotation.y += 0.0025;		//rotate the cube in the y axis
    renderer.render( scene, camera );
}
animate();



