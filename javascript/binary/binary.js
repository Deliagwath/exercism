var Binary = function(binaryString) {
    return {
        toDecimal: function() { return this.decimal; },
        decimal: convert(binaryString),
    }
}

var convert = function(binaryString) {
    if (binaryString.match(/[^0-1]/g) || binaryString == '0') { return 0; }

    // Constructing Stack Structure
    let binaryArray = [];
    for (let digit of binaryString) {
        binaryArray.push(digit);
    }

    // Sum
    let current = 1, sum = 0;
    do {
        let digit = binaryArray.pop();
        sum += digit == 1 ? current : 0;
        current *= 2;
    } while (binaryArray.length);
    return sum;
}

module.exports = Binary;