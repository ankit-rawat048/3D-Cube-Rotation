const cube = document.querySelector('.cube');
let mouseX = 0;
let mouseY = 0;
const rotationValue = 270;

const handleMouseMove = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    rotateX = -(mouseY / window.innerHeight - 0.5) * rotationValue;
    rotateY = -(mouseX / window.innerWidth - 0.5) * rotationValue;
    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

window.addEventListener("mousemove", handleMouseMove);

const openCube = document.getElementById('open');
let isClicked = false;  // Track whether the button has been clicked or not

openCube.addEventListener("click", () => {
    if (!isClicked) {
        // On first click, change the CSS variables
        document.documentElement.style.setProperty('--cube-width', '300px');
        document.documentElement.style.setProperty('--translateZ', '350px');
    } else {
        // On subsequent clicks, reset the values
        document.documentElement.style.setProperty('--cube-width', '300px');
        document.documentElement.style.setProperty('--translateZ', '150px');
    }
    
    // Toggle the click state
    isClicked = !isClicked;
});
