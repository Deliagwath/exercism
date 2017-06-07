var Trinary = function(tri) {
    this.tri = tri;
}

Trinary.prototype.toDecimal = function() {
    return convert(this.tri);
}

function convert(triString) {
    let current = Math.pow(3, triString.length - 1);
    let sum = 0;
    for (let digit of triString) {
        if (!(digit <= 2 && digit >= 0)) { return 0; }
        sum += digit * current;
        current /= 3;
    }
    return sum;
}

module.exports = Trinary;