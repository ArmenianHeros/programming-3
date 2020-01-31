var matrix = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 2, 0, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 1, 2, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 2, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 2, 0, 1, 0, 0, 1, 0, 0, 1, 2, 0],
    [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 2, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 3, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 2],
    [0, 0, 1, 0, 3, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0],
    [0, 0, 1, 4, 3, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 2]
];

var side = 20;
var grassArr = [];
var xotakerner = [];
var gishatichner = [];
var amenaker=[];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                xotakerner.push(new Xotaker(x, y));
            }

            else if (matrix[y][x] == 3) {
                gishatichner.push(new Gishatich(x, y));
            }

           else if (matrix[y][x] == 4){
                amenaker.push(new Amenaker(x, y));
            }
        }
    }



}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    }
    console.log(1)
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var i in xotakerner) {
        xotakerner[i].utel();
    }

    for (var i in gishatichner) {
        gishatichner[i].utel();
    }

    for (var i in amenaker) {
        amenaker[i].utel1();
    }






}


