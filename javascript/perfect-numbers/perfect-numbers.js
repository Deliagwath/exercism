var PerfectNumbers = function() {}

PerfectNumbers.prototype.classify = function(num) {
    if (typeof num !== 'number' || num <= 0) {
        return "Classification is only possible for natural numbers.";
    }
    let factors = getFactors(num);
    let sum = factors.reduce((a, b) => a + b, 0);
    return sum == num
        ? "perfect"
        : sum < num
            ? "deficient"
            : "abundant";
}

var getFactors = function(num) {
    let factors = new Set();
    let max = Math.floor(num / 2);
    for (let n = 1; n <= max; n++) {
        if (num % n == 0) { factors.add(n); }
    }
    return [...factors];
}

module.exports = PerfectNumbers;