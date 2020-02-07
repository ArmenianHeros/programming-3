var LivingCreature = require("./LivingCreature.js")
module.exports = class Gishatich extends LivingCreature {



    utel() {
        this.stanalNorKordinatner();
        var xot = this.chooseCell(2);
        var miHatXot = xot[Math.floor(Math.random() * xot.length)]
        if (miHatXot) {
            matrix[this.y][this.x] = 0;
            matrix[miHatXot[1]][miHatXot[0]] = 2;
            this.x = miHatXot[0];
            this.y = miHatXot[1];
            this.energy++;
            this.bazmanal();
            for (var i in xotakerner) {
                if (this.x == xotakerner[i].x && this.y == xotakerner[i].y) {
                    xotakerner.splice(i, 1);
                }
            }


        }
        else {
            this.sharjvel();
        }

    }
    mahanal() {
        if (this.energy == 0) {
            for (var i in gishatichner) {
                if (this.x == gishatichner[i].x && this.y == gishatichner[i].y) {
                    gishatichner.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                }
            }
        }
    }

    bazmanal() {
        if (this.energy == 10) {
            gishatichner.push(new Gishatich(this.x, this.y));
        }

    }

    sharjvel() {
        this.stanalNorKordinatner();
        var xot = this.chooseCell(0);
        
        var newCell = xot[Math.floor(Math.random() * xot.length)]
        if (newCell) {
            matrix[this.y][this.x] = 0;
            this.x = newCell[0];
            this.y = newCell[1];
            matrix[this.y][this.x] = 3;
            this.energy--;
            this.mahanal();

        }
    }

}