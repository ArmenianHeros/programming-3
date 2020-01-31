var LivingCreature = require("./LivingCreature.js")
module.exports = class Amenaker extends LivingCreature {

    

    utel1() {
        this.stanalNorKordinatner();
        var xot = this.yntrelVandak();
        var miHatXot = random(xot);
        if (miHatXot) {
            if (matrix[miHatXot[1]][miHatXot[0]] == 1) {
                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 1);

                    }
                }

            }

            else if (matrix[miHatXot[1]][miHatXot[0]] == 2) {
                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 2);

                    }
                }
            }

               else if (matrix[miHatXot[1]][miHatXot[0]] == 3) {
                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 3);

                    }
                }
               }
            matrix[this.y][this.x] = 0;
            matrix[miHatXot[1]][miHatXot[0]] = 4;
            this.x = miHatXot[0];
            this.y = miHatXot[1];
            this.energy++;



        }
        else {
           
        }

    }
        
    
    utel() {
        this.stanalNorKordinatner();
        var xot = this.yntrelVandak(2);
        var miHatXot = random(xot);
        if (miHatXot) {
            matrix[this.y][this.x] = 0;
            matrix[miHatXot[1]][miHatXot[0]] = 4;
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
            this.utel1();
        }

    }


}



