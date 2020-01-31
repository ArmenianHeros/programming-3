var LivingCreature = require("./LivingCreature.js")
module.exports = class Grass extends LivingCreature {
 

    bazmanal() {
        this.multiplay++;
        var norVandak = random(this.chooseCell(0));
        if (this.multiplay >= 8 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiplay = 0;
        }
    }


}