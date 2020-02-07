var LivingCreature = require("./LivingCreature.js")
module.exports = class Amenaker extends LivingCreature {

    


        
    
    utel() {
        this.stanalNorKordinatner();
        var xot = this.chooseCell(2);
        
        var miHatXot = xot[Math.floor(Math.random() * xot.length)]
        if (miHatXot) {
            matrix[this.y][this.x] = 0;
            matrix[miHatXot[1]][miHatXot[0]] = 4;
            this.x = miHatXot[0];
            this.y = miHatXot[1];
            this.energy++;
            for (var i in xotakerner) {
                if (this.x == xotakerner[i].x && this.y == xotakerner[i].y) {
                    xotakerner.splice(i, 1);

                }
            }


        }
    

    }


}



