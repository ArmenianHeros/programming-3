var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
grassArr = [];
xotakerner = [];
gishatichner = [];
amenaker = [];
// matrix = [
//     [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 2, 0, 1, 0, 0],
//     [0, 0, 1, 1, 1, 0, 0, 1, 2, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
//     [0, 0, 1, 2, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 1, 0, 1, 2, 0, 1, 0, 0, 1, 0, 0, 1, 2, 0],
//     [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0],
//     [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 2, 0],
//     [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 3, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 2],
//     [0, 0, 1, 0, 3, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0],
//     [0, 0, 1, 4, 3, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 2]
// ]
 matrix = [];
for (let y = 0; y < 25; y++) {
    matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
    for (let x = 0; x < 25; x++) {
        let a = Math.floor(Math.random() * 100);
        console.log(a);
        
        if (a >= 1 && a < 40) {
            matrix[y][x] = 1;
        }
        else if (a >= 40 && a < 65) {
            matrix[y][x] = 2;
        }
        else if (a >= 65 && a < 85) {
            matrix[y][x] = 3;
        }
        else if (a >= 85 && a < 100) {
            matrix[y][x] = 4;
        }

        else{
            matrix[y][x] = 0;
        }
    }
}



var Grass = require("./grass")
var Xotaker = require("./Xotaker")
var Gishatich = require("./Gishatich")
var Amenaker = require("./Amenaker")

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


app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);


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
        amenaker[i].utel();
    }
    io.sockets.emit("matrix", matrix);
}
setInterval(xax, 1000);


 

function erevuyte(x, y) {
    if (matrix[y][x] == 1) {
        for (var c in grassArr) {
            if (grassArr[c].x == x && grassArr.y == y) {
                grassArr.slice(c, 1);
            }
        }
    }
    if (matrix[y][x] == 2) {
        for (var c in xotakerner) {
            if (xotakerner[c].x == x && xotakerner.y == y) {
                xotakerner.slice(c, 1);
            }
        }
    }
    if (matrix[y][x] == 3) {
        for (var c in gishatichner) {
            if (gishatichner[c].x == x && gishatichner.y == y) {
                gishatichner.slice(c, 1);
            }
        }
    }
    if (matrix[y][x] == 4) {
        for (var c in amenaker) {
            if (amenaker[c].x == x && amenaker.y == y) {
                amenaker.slice(c, 1);

            }
        }
    }
    matrix[y][x] = 0;
}


io.on('connection', function (socket) {
    socket.on("jnjel", function (data) {
        erevuyte(0, 0);
        erevuyte(0, 1);
        erevuyte(0, 2);
        erevuyte(0, 3);
        erevuyte(1, 0);
        erevuyte(1, 1);
        erevuyte(1, 2);
        erevuyte(1, 3);
        erevuyte(2, 0);
        erevuyte(2, 1);
        erevuyte(2, 2);
        erevuyte(2, 3);
    });
 });



