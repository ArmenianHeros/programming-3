var LivingCreature = require("./LivingCreature.js")
module.exports = class Grass extends LivingCreature {
 

    bazmanal() {
        this.multiplay++;
        var xot = this.chooseCell(0);
        var norVandak = xot[Math.floor(Math.random() * xot.length)]
        if (this.multiplay >= 8 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiplay = 100;
        }
    }


}