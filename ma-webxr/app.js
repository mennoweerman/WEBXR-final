// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(0, 1.54, -5);
minecraftModel.setScale(0.1, 0.1, 0.1);
minecraftModel.setRotation(0, -36.95, 0);

// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green');
sphere.setPosition(2.102, 1.792, 0.547);
sphere.setRotation(0, -90.000, 0)
sphere.setScale(0.175, 0.175, 0.175)

// create some text
const testText = new Text('Mediacollege Amsterdam WebXR');
testText.setPosition(1.5, 0, -5);
testText.setFontsize(10);

// create an image
const image = new XRImage('assets/images/FolkertdeJong.jpg');
image.setPosition(1.955, 1.792, 1.109);
image.setRotation(0.000, -90.000, 0.000);
image.setScale(0.8, 0.8, 0.8);

// create a 360 image
const image360 = new Sky('assets/360_world.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));

const cuberoom = new Model('assets/models/cube-room/cube-room.gltf');
cuberoom.setPosition(-0.044, 0.910, 0.296);
cuberoom.setScale(0.400, 0.400, 0.400);
cuberoom.setRotation(0, 0, 0);

const light = new AmbientLight();
AmbientLight.setPosition(-0.044, 0.910, 0.296);
AmbientLight.setScale(0.1, 0.44443, 0.16213);
AmbientLight.setRotation(0, 0, 0);

const image1 = new XRImage('assets/images/ballerina.jpg');
image1.setPosition(1.800, 1.400, 1.400);
image1.setRotation(0.000, -90.000, 0.000);
image1.setScale(0.8, 0.8, 0.8);