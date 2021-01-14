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
const testText = new Text('Folkert de Jong');
testText.setPosition(4.629, 1.792, -0.431);
testText.setRotation(0.000, -90.000, 0.000);
testText.setScale(0.175, 0.175, 0.175);

// create an image
const image = new XRImage('assets/images/FolkertPortret.jpg');
image.setPosition(1.955, 1.792, 1.109);
image.setRotation(0.000, -90.000, 0.000);
image.setScale(0.8, 0.8, 0.8);

const image1 = new XRImage('assets/images/ballerina.JPG');
image1.setPosition(-2.031, 1.794, 0.834);
image1.setRotation(0.000, -90.000, 0.000);
image1.setScale(0.8, 0.8, 0.8);

const image2 = new XRImage('assets/images/balletjes.jpg');
image2.setPosition(-0.082, 1.786, 2.285);
image2.setRotation(0, 0, 0);
image2.setScale(0.8, 0.8, 0.8);

const image3 = new XRImage('assets/images/tafelEten.jpg');
image3.setPosition(1.135, 1.828, -1.702);
image3.setRotation(0, 0, 0);
image3.setScale(0.8, 0.8, 0.8);

const image4 = new XRImage('assets/images/JimFolkert.jpg');
image4.setPosition(-1.230, 1.856, -1.697);
image4.setRotation(0, 0, 0);
image4.setScale(0.8, 0.8, 0.8);

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

