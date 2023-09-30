let frameCount = 0;
let canvasHeight = 500;

function setup() {
    createCanvas(300, canvasHeight);
}

function draw() {
    frameCount++;
    background(0);
    fill(0);
    stroke(canvasHeight);

    for (let y = 100; y < canvasHeight; y += 5) {
        beginShape();
        let lastX; // Declare a variable to hold the value of the last x used in the loop
        for (let x = 0; x < canvasHeight; x++) {
            let noiseFactor = noise(x / 30 + frameCount / 50 + y);
            let vertexY = y - 80 / (1 + pow(x - 150, 4) / 8e6) * noiseFactor;
            vertex(x, vertexY);
            lastX = x; // Update the value of lastX at each iteration
        }
        vertex(lastX, 1e4); // Use lastX instead of x
        endShape();
    }
}