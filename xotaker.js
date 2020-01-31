var LivingCreature = require("./LivingCreature.js")
module.exports = class Xotaker extends LivingCreature {

    utel() {
        this.stanalNorKordinatner();
        var xot = this.yntrelVandak(1);
        var miHatXot = random(xot);
        if (miHatXot) {
            matrix[this.y][this.x] = 0;
            matrix[miHatXot[1]][miHatXot[0]] = 2;
            this.x = miHatXot[0];
            this.y = miHatXot[1];
            this.energy++;
            this.bazmanal();
            for (var i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }


        }
        else {
            this.sharjvel();
        }

    }
    mahanal() {
        if (this.energy == 0) {
            for (var i in xotakerner) {
                if (this.x == xotakerner[i].x && this.y == xotakerner[i].y) {
                    xotakerner.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                }
            }
        }
    }

    bazmanal() {
        if (this.energy == 10) {
            xotakerner.push(new Xotaker(this.x, this.y));
        }

    }

    sharjvel() {
        this.stanalNorKordinatner();
        var voidCells = this.yntrelVandak(0);
        var newCell = random(voidCells);
        if (newCell) {
            matrix[this.y][this.x] = 0;
            this.x = newCell[0];
            this.y = newCell[1];
            matrix[this.y][this.x] = 2;
            this.energy--;
            this.mahanal();

        }
    }
}