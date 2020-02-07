var socket = io();
var side = 20;
function setup() {
    frameRate(5);
    createCanvas(25 * side, 25 * side);
    background('#acacac');
}
function drawmatrix(matrix) {
console.log(matrix);

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else{
                fill("#acacac");
            }
            rect(x * side, y * side, side, side);
        }
    }
}

socket.on("matrix", drawmatrix);
