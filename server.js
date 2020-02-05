var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
 grassArr = [];
 xotakerner = [];
 gishatichner = [];
 amenaker = [];
matrix = [
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
]
var Grass = require("./grass")
var Xotaker = require("./Xotaker")
var Gishatich = require("./Gishatich")
var Amenaker = require("./Amenaker")

app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

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

        else if (matrix[y][x] == 4) {
            amenaker.push(new Amenaker(x, y));
        }
    }
}

function xax() {

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
io.sockets.emit("matrix",matrix);
}
setInterval(xax, 1000);
