var Palindromes = function(options) {
    this.max = options.maxFactor;
    if (options.minFactor === undefined) { options.minFactor = 1; }
    this.min = options.minFactor;
}

Palindromes.prototype.generate = function() {
    this.maxVal = 0;
    this.minVal = this.max * this.max;
    let val = 0;
    for (let i = this.min; i <= this.max; i++) {
        for (let j = this.min; j <= this.max; j++) {
            val = i * j;
            if (this.checkPalindrome(val)) {
                if (this.maxVal < val) {
                    this.maxVal = val;
                }
                if (this.minVal > val) {
                    this.minVal = val;
                }
            }
        }
    }
}

Palindromes.prototype.checkPalindrome = function(num) {
    num = typeof num === "number" ? num.toString() : num;
    let reversed = num.split("").reverse().join("");
    for (let i = 0; i < num.length; i++) {
        if (num[i] != reversed[i]) { return false; }
    }
    return true;
}

Palindromes.prototype.getFactors = function(num) {
    let factors = [];
    let usedFactors = new Set();
    let curMax = this.max;
    while (curMax > this.min) {
        if (usedFactors.has(curMax)) { }
        else if (num % curMax == 0) {
            let div = num / curMax;
            if (!usedFactors.has(div) && div <= this.max && div >= this.min) {
                factors.push([div, curMax].sort());
                usedFactors.add(div);
                usedFactors.add(curMax);
            }
        }
        curMax--;
    }
    return factors;
}

Palindromes.prototype.largest = function() {
    return {
        value: this.maxVal,
        factors: this.getFactors(this.maxVal),
    }
}

Palindromes.prototype.smallest = function() {
    return {
        value: this.minVal,
        factors: this.getFactors(this.minVal),
    }
}

module.exports = Palindromes;