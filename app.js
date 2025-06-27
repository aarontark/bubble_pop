const newDiv = document.createElement("div");
const popSounds = ['./sounds/pop.flac', './sounds/pop1.flac', './sounds/pop2.flac', './sounds/pop3.flac', './sounds/pop6.flac', './sounds/pop7.flac', './sounds/pop8.flac']
const audio = new Audio('./sounds/pop');

function randomNum() {
    return Math.floor(Math.random() * 256);
}

function randomSize () {
    if (window.innerWidth >= 1440) {
        return Math.round(((Math.random() * 3.75) + .25) * 100) / 100;
    } else {
        return Math.round(((Math.random() * 1.75) + .25) * 100) / 100
    }
    // 
}

function returnOpacity() {
    return Math.random();
}

function createCoordinates(size, screenWidth, screenHeight) {
    let top = Math.random() * (screenHeight - (size * 32));
    let left = Math.random() * (screenWidth - (size * 32));
    console.log(left, top);
    return [left, top];
}

function popCircle(element){
    audio.src = popSounds[Math.floor(Math.random() * 7)]
    audio.play();
    element.remove();
}

const createCircle = () => {
    let newCircle = document.createElement("div");
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let size = randomSize();
    let coordinates = createCoordinates(size, screenWidth, screenHeight);
    newCircle.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()}, .5`;
    newCircle.style.padding = `${size}rem`;
    newCircle.style.borderRadius = '50%';
    newCircle.style.position = 'absolute';
    newCircle.style.left = `${coordinates[0]}px`;
    newCircle.style.top = `${coordinates[1]}px`;
    newCircle.style.cursor = 'pointer';
    newCircle.addEventListener('click', () => {
        popCircle(newCircle);
    })
    document.body.appendChild(newCircle);
};

for (let i = 0; i <= 100; i++) {
    createCircle();
}

