var Binary = function(binaryString) {
    this.decimal = convert(binaryString);
}

Binary.prototype.toDecimal = function() {
    return this.decimal;
}

var convert = function(binaryString) {
    let current = Math.pow(2, binaryString.length - 1);
    let sum = 0;
    for (let digit of binaryString) {
        if (!(digit == 0 || digit == 1)) { return 0; }
        sum += digit * current;
        current /= 2;
    }
    return sum;
}

module.exports = Binary;