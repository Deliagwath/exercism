var BigInt = require('./big-integer');

var Grains = function() {}

Grains.prototype.square = function(num) {
    return recursiveSquare(num).toString();
}

var recursiveSquare = function(depth) {
    if (depth <= 1) { return BigInt(1); }
    let this_level = recursiveSquare(depth - 1);
    return this_level.add(this_level);
}

Grains.prototype.total = function() {
    let total = BigInt(0);
    for (let i = 1; i <= 64; i++) {
        total = total.add(recursiveSquare(i));
    }
    return total.toString();
}

module.exports = Grains;